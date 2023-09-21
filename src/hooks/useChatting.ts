import { FormEvent, useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import { useRoute } from "../hooks";
import { selectchatMsg, setChatMsg } from "../redux/modules/chattingSlice";
import { useAppDispatch, useAppSelector } from "../redux/config/hooks";

export const useChatting = (): any => {
	/*  상태관련 부분
      useRoute - 네비게이션 관련 훅
      clientRef - @stomp/stompjs 를 담을 state
      chattingAreaRef - 채팅방 높이 조졸 state
      mountSelect-useState - 산별토글버튼 state
      mount-useState - 산별토클 입력을 관리할 state
      chat-useState - input 메시지가 입력된 state
      receiveMsg-useState - 받은 메시지를 담을 state*/

	const { onNavigate, id } = useRoute();
	const clientRef = useRef<any>(null);
	const chattingAreaRef = useRef<HTMLDivElement | null>(null);
	const [mountSelect, setMountSelect] = useState(false);
	const [mount, setMount] = useState(["설악산", 1]);
	const [chat, setChat] = useState("");
	const dispatch = useAppDispatch();
	const chatMsg = useAppSelector(selectchatMsg);

	/*  함수부
          onMountSelect - 산별 채팅방 토글제어
          onRoomChange - 토글로 열려진 채팅방 정보가 담겨질 상태
      */

	const onMountSelect = () => setMountSelect((pre) => !pre);
	const onRoomChange = (select: (string | number)[]) => () => {
		setMount(select);
		setMountSelect((pre) => !pre);
	};

	/* 소켓연결관련 함수
        connect - 소켓 연결함수
        sendChat - 채팅보내기함수
        urgentChat- 긴급메시지보내기함수
      */

	const connect = () => {
		try {
			// 01 소켓연결부
			clientRef.current = new Client({
				brokerURL: `ws://ec2-13-125-219-90.ap-northeast-2.compute.amazonaws.com/ws-stomp`,
				reconnectDelay: 5000,
				heartbeatIncoming: 4000,
				heartbeatOutgoing: 4000,
				// 02 구독메시지
				onConnect: () => {
					clientRef.current.subscribe(`/room/${id}`, (data: any) => {
						dispatch(setChatMsg(JSON.parse(data.body)));
					});
				},
			});

			// 03 소켓 활성화
			clientRef.current && clientRef.current.activate();
		} catch (err) {
			console.log(err);
		}
	};

	// 04 소켓 연결 끊기
	const disConnect = () => {
		// 연결 끊기
		if (clientRef.current === null) {
			return;
		}
		clientRef.current.deactivate();
	};

	// 05 소켓으로 메시지 보내기
	const sendChat = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (chat === "") return;
		clientRef.current &&
			clientRef.current.publish({
				destination: `/send/${id}/common`,
				body: JSON.stringify({
					sender: "모롱이",
					message: chat,
				}),
			});
		setChat("");
	};

	// 06 소켓으로 긴급메시지 보내기
	const urgentChat = async () => {
		if (chat === "") return;
		const getLocation = () => {
			return new Promise((resolve, reject) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						({ coords: { latitude, longitude } }) => {
							console.log(latitude);
							console.log(longitude);
							clientRef.current &&
								clientRef.current.publish({
									destination: `/send/${id}/emer`,
									body: JSON.stringify({
										sender: chat,
										message: `${latitude}`,
									}),
								});
						},
						(error) => {
							reject(error);
						}
					);
				} else {
					reject(new Error("Geolocation is not supported."));
				}
			});
		};
		getLocation();

		setChat("");
	};

	useEffect(() => {
		if (chattingAreaRef.current) {
			chattingAreaRef.current.style.height = `${window.innerHeight - 345}px`;
			chattingAreaRef.current.scrollTop = chattingAreaRef.current.scrollHeight;
		}
		connect();
		return () => {
			disConnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		mount,
		mountSelect,
		chat,
		chattingAreaRef,
		chatMsg,
		sendChat,
		urgentChat,
		setChat,
		onNavigate,
		onMountSelect,
		onRoomChange,
	};
};
