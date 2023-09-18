import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client } from '@stomp/stompjs';
import { useRoute } from '../hooks';

export const Chatting:FC = () => {
  const {onNavigete} = useRoute()
  const {id:mountainName} = useParams()
  console.log("mountainName", mountainName)


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
  
  return (
    <div>
      <h1>Chatting</h1>
      <button onClick={onNavigete('/home')}>뒤로가기</button>
      <button onClick={sendChat}>전송</button>
    </div>
  )
}




/*  soketjs-client 설치
    이유: 소켓을 지원하지 않는 IE9 이하 버전의 대응을 위해 
*/