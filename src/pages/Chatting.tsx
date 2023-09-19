import { FC, useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs';
import { useRoute } from '../hooks';


export const Chatting: FC = () => {
  const { onNavigete, id } = useRoute()
  console.log("mountainName", id)
  const clientRef = useRef<any>(null)

  const [chat, setChat] = useState("");
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

  return (
    <div>
      <h1>Chatting</h1>
      <button onClick={onNavigete('/home')}>뒤로가기</button>
      <button onClick={sendChat}>전송</button>
      <button onClick={sendChat2}>긴급메시지전송</button>
      <input style={{ border: "1px solid red" }} type='text' value={chat} onChange={(e) => setChat(e.target.value)} />
      <hr />
      <p>받은 메시지</p>
      <p>{receiveMsg}</p>
    </div>
  )
}




/*  soketjs-client 설치
    이유: 소켓을 지원하지 않는 IE9 이하 버전의 대응을 위해 


      const [client, setClient] = useState<any>(null)
  const connect = () => {
    try {
      const clientSocket = new Client({
        brokerURL: "ws://localhost:8080/chat",
        connectHeaders: {
          login: "",
          passcode: "password",
        },
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000, // 자동 재 연결 // 해당연결을 제한할 방법은 없다. 
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      })

      // 구독
      clientSocket.onConnect = function () {
        clientSocket.subscribe(`/sub/channels/${mountainName}`, (data)=>{
          console.log("구독메시지", data)
        });
      }
      clientSocket.activate(); // 클라이언트 활성화
      setClient(clientSocket)
    } catch(err) {
      console.log(err)
    }
  }

  const disConnect = () => {
    // 연결 끊기
    if (client === null) {
      return;
    }
    client.deactivate();
  };


  const [chat, setChat] = useState("");
  const sendChat = () => {
    if (chat === "") {
      return;
    }

    client.publish({
      destination: "/pub/chat/" + mountainName,
      body: JSON.stringify({
        type: "테스트",
        // sender: userId,
        // channelId: "1",
        // data: chat,
      }),
    });

    setChat("");
  };

  useEffect(() => {
    connect();
    return () => {
      disConnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    // const connect = () => {
  //   try {
  //     // 01 소켓연결
  //     clientRef.current = new Client({
  //       brokerURL: "ws://localhost:8080/ws-stomp",
  //       // 02 구독메시지
  //       onConnect: () => {
  //         clientRef.current.subscribe(`/room/${mountainName}`, (data:any)=>{
  //           console.log("구독메시지", data)
  //           setReceiveMsg(JSON.stringify(data))
  //         });
  //       }
  //     })

  //     // 03 소켓 활성화 
  //     clientRef.current.activate();
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }



  //============


*/
