import { FC, useEffect, useRef, useState } from 'react'
import * as SC from '../components'
import { chiak, homeSvg, odae, seorak, taebaek, togeterSvg, userSvg } from '../asset'
import { useRoute } from '../hooks'

export const Main: FC = () => {
  const bottomRef = useRef(null)
  const topImgRef = useRef<HTMLDivElement | null>(null)
  const mainContentRef = useRef<HTMLDivElement | null>(null)
  const [lastIntro, setLastIntro] = useState(true)
  const {onNavigete} = useRoute()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("화면에 등장")
          setLastIntro(false)
        } else {
          setLastIntro(true)
        }
      },
      { threshold: 0.2 }
    )
    bottomRef.current && observer.observe(bottomRef.current)

    if(mainContentRef.current) {
      mainContentRef.current.style.top = "250px"
      setTimeout(() => {
        if(topImgRef.current) topImgRef.current.style.opacity = "1"
      }, 500)
    }
  }, [])

  return (
    <SC.PagesLayout>
      <SC.FigureImg ref={topImgRef} children={<img src={require("../asset/seorak.jpeg")} alt='MainImg' />} />
      <SC.MainContent ref={mainContentRef} $fd='column' $ai='start' $jc='start' $gap={30}>
        <div>
          <SC.FlexBox $jc='flex-start' $ai='end' $gap={5}>
            <SC.CustomH1 children="산모롱이" />
            <SC.MainBtn onClick={onNavigete('/home')} children="등산하러 가기" />
          </SC.FlexBox>
          <SC.CustomH2 children="강원특별자치도의 아름다운 골짜기 기행" />
        </div>
        <SC.FlexBox $jc='space-between'>
          {[chiak, odae, seorak, taebaek].map(list =>
            <img key={list} style={{ width: "20%" }} src={list} alt={`${list}-icon`} />)}
        </SC.FlexBox>
        <SC.FlexBox $fd='column' $ai='start' $gap={40}>
          <SC.MainIntrodution children={<>산능선 휘어진 부분들을 뜻하는 <span>‘산모롱이’</span>들을 많이 품고 있는 청정 강원의 아름다운 명소들로 초대합니다.</>}/>
          <SC.MainIntrodution children={<><span children="‘혼산’" />{`이라도 괜찮습니다.\n저희 산모롱이를 통해 등산크루들을 만나보세요.`}</>}/>
          <SC.MainIntrodution children={<><span children="‘안전한 산행’" />{`도 저희 산모롱이와 함께합시다.\n긴급상황 시 근처 사용자들에게 채팅으로 알려주세요.`}</>} />
          <SC.MainIntrodution ref={bottomRef} children={<><span children="'하산'" />{`후\n근처 맛집을 방문해 즐거운 추억을 남겨봅시다.`}</>} />
        </SC.FlexBox>
      </SC.MainContent>

      <div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
        <SC.ScrollDiv $state={lastIntro} children={<p>내용 더보기</p>}/>
        <SC.NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list => 
            <SC.NavIcon children={<img  key={list} src={list} alt='NavbottomImg'/>} />)}
        </SC.NavBottom>
      </div>
    </SC.PagesLayout>
  )
}

