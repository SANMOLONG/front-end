import { ChangeEvent, FC} from 'react'
import * as SC from '../components';
import { homeSvg, togeterSvg, urgnet, userSvg } from '../asset';
import { useChatting } from '../hooks/useChatting';


export const Chatting: FC = () => {
  const {mount, mountSelect, chat, chattingAreaRef, chatMsg, sendChat, setChat, urgentChat,onNavigete, onMountSelect, onRoomChange} = useChatting()

  return (
    <SC.PagesLayout>
      <SC.ChattingHeader $fd='column' $ai='start'>
        <SC.CustomH1 $fSize={3} children="산모롱이" />
        <SC.CustomH2 children="강원특별자치도의 아름다운 골짜기 기행" />
      </SC.ChattingHeader>
      <SC.ChattingContent>
        <SC.FlexBox $fd='column' $ai='start' $gap={10} style={{ padding: "10px 30px" }}>
          <SC.FlexBox $gap={10} $jc='start' style={{ position: "relative" }}>
            <SC.SelectBtn onClick={onMountSelect} $type="gradientOrange" children={`${mount[0]} ▼`} />
            <SC.SelectBtn onClick={onNavigete("/home")} children="뒤로가기" />
            {mountSelect && (
              <SC.MountSelectLayout onMouseLeave={onMountSelect} children={
                [["설악산", 1], ["오대산", 2], ["치악산", 3], ["태백산", 4]].map(list => (
                  <SC.MountSelectList
                    key={list[0]}
                    onClick={onRoomChange(list)}
                    children={list[0]}
                  />
                ))
              } />
            )}
          </SC.FlexBox>
          <SC.UrgentMsgLayout >
            <SC.MessageContainer $length={3}>
              {Array.from({length:2}, (_,idx) => idx).map(list => (
                <SC.Message key={list}>
                <SC.Circle />
                <SC.UrgentTilte children={<>[ 긴급 <span children="38.12341, 127.123414" />, 2842님]</>} />
                <SC.UrgentMsg children="긴급메시지입니다." />
              </SC.Message>
              ))}
              
            </SC.MessageContainer>
          </SC.UrgentMsgLayout>
          <SC.ChattingLayout ref={chattingAreaRef} $fd='column' $jc='start' $gap={30} >
            {!!chatMsg.length && chatMsg.map(({sender, message, date}:any, idx:number) => (
              <SC.FlexBox key={idx} $fd='column' $ai='start' $gap={5}>
                <div className='nickname' children={`용대폭포코스, ${sender} 님`} />
                <SC.FlexBox $jc='start' $ai='end' $gap={10}>
                  <div className='content' children={message} />
                  <div className='date' children={date} />
                </SC.FlexBox>
              </SC.FlexBox>
            ))}
          </SC.ChattingLayout>
        </SC.FlexBox>
      </SC.ChattingContent>
      <SC.ChattingBottom>
        <form className='chatInput' onSubmit={sendChat}>
          <img className='urgnetImg' src={urgnet} alt='urgnetImg' onClick={urgentChat} />
          <div className='inputLayout'>
            <input className='chattingInput' value={chat} placeholder='위급상황시, 메시지 입력 후 버튼을 클릭해주세요. ' onChange={(e: ChangeEvent<HTMLInputElement>) => setChat(e.target.value)} />
            <input type='submit' className='sendBtn' value="보내기" />
          </div>
        </form>
        <SC.NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list =>
            <SC.NavIcon key={list} children={<img src={list} alt='NavbottomImg' />} />)}
        </SC.NavBottom>
      </SC.ChattingBottom>
    </SC.PagesLayout>
  )
}
