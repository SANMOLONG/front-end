import { FC, useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs';
import { useRoute } from '../hooks';
import { CustomH1, CustomH2, Flex, FlexBox, NavBottom, NavIcon, PagesLayout } from '../components';
import styled, { css, keyframes } from 'styled-components';
import { Styled } from '../types/styled';
import { homeSvg, togeterSvg, urgnet, userSvg } from '../asset';


export const Chatting: FC = () => {
  const { onNavigete, id } = useRoute()
  console.log("mountainName", id)
  const clientRef = useRef<any>(null)

  const [chat, setChat] = useState("");
  const [mount, setMount] = useState("설악산");
  const [mountSelect, setMountSelect] = useState(false);

  const onMountSelect = () => {
    setMountSelect(pre => !pre)
  }

  const onRoomChange = (mount: string) => () => {
    setMount(mount)
    setMountSelect(pre => !pre)
  }

  const [receiveMsg, setReceiveMsg] = useState("");
  const connect = () => {
    try {
      // 01 소켓연결
      clientRef.current = new Client({
        brokerURL: `ws://ec2-13-125-219-90.ap-northeast-2.compute.amazonaws.com/ws-stomp`,
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000, // 자동 재 연결 // 해당연결을 제한할 방법은 없다. 
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        // 02 구독메시지
        onConnect: () => {
          clientRef.current.subscribe(`/room/${id}`, (data: any) => {
            console.log("구독메시지", data.body)
            setReceiveMsg(JSON.stringify(data.body))
          });
        }
      })

      // 03 소켓 활성화 
      clientRef.current && clientRef.current.activate();
    } catch (err) {
      console.log(err)
    }
  }

  // 04 소켓으로 메시지 보내기 
  const sendChat = () => {
    // if (chat === "") return;
    clientRef.current && clientRef.current.publish(
      {
        destination: `/send/${id}/common`,
        body: JSON.stringify({
          'sender': "모롱이",
          'message': "긴급메시지",
        }),
      }
    );

    setChat("");
  };

  const sendChat2 = () => {
    if (chat === "") return;
    clientRef.current && clientRef.current.publish(
      `/send/${id}`,
      {},
      JSON.stringify({
        'sender': "모롱이",
        'message': "긴급메시지",
      })
    );

    setChat("");
  };

  // 05 소켓 연결 끊기
  const disConnect = () => {
    // 연결 끊기
    if (clientRef.current === null) {
      return;
    }
    clientRef.current.deactivate();
  };


  useEffect(() => {
    connect()
    return () => {
      disConnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chattingAreaRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (chattingAreaRef.current) {
      chattingAreaRef.current.style.height = `${window.innerHeight - 345}px`;
      chattingAreaRef.current.scrollTop = chattingAreaRef.current.scrollHeight;
    }
  }, [])

  return (
    <PagesLayout>
      <ChattingHeader $fd='column' $ai='start'>
        <CustomH1 $fSize={3} children="산모롱이" />
        <CustomH2 children="강원특별자치도의 아름다운 골짜기 기행" />
      </ChattingHeader>
      <ChattingContent>
        <FlexBox $fd='column' $ai='start' $gap={10} style={{ padding: "10px 30px" }}>
          <FlexBox $gap={10} $jc='start' style={{ position: "relative" }}>
            <SelectBtn onClick={onMountSelect} $type="gradientOrange" children={`${mount} ▼`} />
            <SelectBtn onClick={onNavigete("/home")} children="뒤로가기" />
            {mountSelect && <div style={{ position: "absolute", bottom: "-130px", backgroundColor: "#fff", zIndex: "10", borderRadius: "5px" }}>
              <FlexBox style={{ height: "30px", width: "80px" }} onClick={onRoomChange("설악산")}>설악산</FlexBox>
              <FlexBox style={{ height: "30px", width: "80px" }} onClick={onRoomChange("오대산")}>오대산</FlexBox>
              <FlexBox style={{ height: "30px", width: "80px" }} onClick={onRoomChange("치악산")}>치악산</FlexBox>
              <FlexBox style={{ height: "30px", width: "80px" }} onClick={onRoomChange("태백산")}>태백산</FlexBox>
            </div>}
          </FlexBox>

          <UrgentMsgLayout >
            <MessageContainer $length={3}>
              <Message>
                <Circle />
                <UrgentTilte children={<>[ 긴급 <span children="38.12341, 127.123414" />, 2842님]</>} />
                <UrgentMsg children="긴급메시지입니다." />
              </Message>

              <Message>
                <Circle />
                <UrgentTilte children={<>[ 긴급 <span children="38.12341, 127.123414" />, 2842님]</>} />
                <UrgentMsg children="긴급메시지입니다." />
              </Message>

              <Message>
                <Circle />
                <UrgentTilte children={<>[ 긴급 <span children="38.12341, 127.123414" />, 2842님]</>} />
                <UrgentMsg children="긴급메시지입니다.긴급메시지입니다긴급메시지입니다긴급메시지입니다긴급메시지입니다긴급메시지입니다긴급메시지입니다" />
              </Message>


            </MessageContainer>
          </UrgentMsgLayout> {/*335*/}
          <ChattingLayout ref={chattingAreaRef} $fd='column' $jc='start' $gap={30} style={{ height: "200px", overflow: "auto" }} >
            {Array.from({ length: 10 }, () => 0).map(list => (
              <FlexBox key={list} $fd='column' $ai='start' $gap={5}>
                <div style={{ fontSize: "800" }}>용대폭포코스, 2842님</div>
                <FlexBox $jc='start' $ai='end' $gap={10}>
                  <div style={{ maxWidth: "70%", padding: "6px", borderRadius: "10px", background: "#FFCD86" }}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</div>
                  <div style={{ color: "#757575", fontSize: "10px" }}>2023-02-23</div>
                </FlexBox>
              </FlexBox>
            ))}
          </ChattingLayout>

        </FlexBox>
      </ChattingContent>
      <div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
        <div style={{ padding: "0 30px" }}>
          <img style={{ display: "block", margin: "10px auto" }} src={urgnet} alt='urgnetImg' />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 60px", height: "45px", border: "3px solid #FF995A", marginBottom: "10px", borderRadius: "50px", padding: "0 10px", alignItems: "center" }}>
            <input style={{ borderRadius: "50px" }} placeholder='위급상황시, 메시지 입력 후 버튼을 클릭해주세요. ' />
            <FlexBox style={{ width: "60px", height: "32px", backgroundColor: "#FFCD86", borderRadius: "20px" }}>보내기</FlexBox>
          </div>
        </div>
        <NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list =>
            <NavIcon key={list} children={<img src={list} alt='NavbottomImg' />} />)}
        </NavBottom>
      </div>
    </PagesLayout>
  )
}


const ChattingHeader = styled.header<Partial<Styled>>`
  ${Flex}
  padding: 10px 30px;
  background-color: #FF9859;
  color: white;
  height: 80px;
`

const ChattingContent = styled.div`
  min-height: calc(100% - 80px);
  background: linear-gradient(180deg, #FF9859 8.85%, #fff 44.79%);
`

const SelectBtn = styled.div<Partial<Styled>>`
  ${Flex}
  padding: 0 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  font-size: 1.25rem;

  ${({ $type }) => $type === "gradientOrange" && css`
    width: 80px;
    background: linear-gradient(89deg, #FDCB82 2.48%, #FFD9C1 81.7%);
  `}
`

const UrgentMsgLayout = styled.article<Partial<Styled>>`
  ${Flex}
  width:100%;
  height: 30px;
  overflow:hidden;
  border-radius: 50px;
  background-color: #2E2E2E;
`

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: #F84E4E;
`

const UrgentTilte = styled.div`
  color: #F84E4E;
  font-weight: 800;
  span {
    color: #fff;
  }
`

const UrgentMsg = styled.div`
  color: #fff;
`


const moveRightToLeft = keyframes`
 0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MessageContainer = styled.div<Partial<Styled>>`
  ${Flex}
  gap: 30px;
  animation: ${moveRightToLeft} ${({ $length }) => $length && 15 * $length}s linear infinite;
`;

const Message = styled.div<Partial<Styled>>`
  ${Flex}
  gap: 5px;
  white-space: nowrap;
`

const ChattingLayout = styled.div<Partial<Styled>>`
  ${Flex}
  &::-webkit-scrollbar {
    display: none;
  }
`