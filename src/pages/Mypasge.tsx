import { FC } from 'react'
import { CustomH1, CustomH2, Flex, FlexBox, FooterNav, PagesLayout } from '../components'
import styled from 'styled-components'
import { Styled } from '../types/styled'
import { GridBox, MountaiMedal, Point, WaringLayout, WeatherMountContent, WeatherMountTiitle } from './Home'
import { chiak, odae, seorak, taebaek } from '../asset'
import { switchMoney } from '../asset/homeicon'

export const Mypasge: FC = () => {
  return (
    <PagesLayout style={{ backgroundColor: "#FFECDB" }}>
      <MyPageHeader $fd='column' $gap={5}>
        <CustomH1 children="모롱이님" />
        <CustomH2 children="산모롱이" />
      </MyPageHeader>

      <FlexBox $fd='column' $gap={20} style={{ padding: "50px", position: "relative" }}>
        <CustomH2 children="상세보기" style={{ position: "absolute", top: "30px", right: "30px" }} />
        <GridBox style={{ alignItems: "start" }}>

          <FlexBox $fd='column' $gap={5}>
            <div style={{ position: "relative" }}>
              <MountaiMedal src={seorak} $state={true} alt='seorak' />
              <div style={{ position: "absolute", right: "0", bottom: "0", fontWeight: "800" }}>x20</div>
            </div>
            <WeatherMountTiitle children="설악산" />
            <WeatherMountContent children="023-02-03" />
          </FlexBox>

          <FlexBox $fd='column' $gap={5}>
            <div style={{ position: "relative" }}>
              <MountaiMedal src={odae} $state={true} alt='odae' />
              <div style={{ position: "absolute", right: "0", bottom: "0", fontWeight: "800" }}>x20</div>
            </div>
            <WeatherMountTiitle children="오대산" />
            <WeatherMountContent children="2023-02-03" />
          </FlexBox>

          <FlexBox $fd='column' $gap={5}>
            <div style={{ position: "relative" }}>
              <MountaiMedal src={chiak} $state={false} alt='chiak' />
            </div>
            <WeatherMountTiitle children="치악산" />
            <WeatherMountContent $state={false} children="" />
          </FlexBox>

          <FlexBox $fd='column' $gap={5}>
            <div style={{ position: "relative" }}>
              <MountaiMedal src={taebaek} $state={false} alt='taebaek' />
            </div>
            <WeatherMountTiitle children="태백산" />
            <WeatherMountContent children="" />
          </FlexBox>
        </GridBox>

        <FlexBox $fd='column' $ai='start' $gap={10} style={{ width: "100%" }}>
          <MypageTitle children="나의 플로깅 포인트 " />
          <MypagePoint style={{padding:"0 40px"}}>
            <div style={{fontSize:"3rem", width:"100%", fontWeight:"800"}}>500g</div>
            <FlexBox $fd='column' $gap={5} style={{ width: "80px" }}>
              <img src={switchMoney} alt='switchMoney' />
              <WeatherMountContent children="환전하기" />
            </FlexBox>
          </MypagePoint>
        </FlexBox>
      </FlexBox>


      <FooterNav />
    </PagesLayout>
  )
}



const MyPageHeader = styled.div<Partial<Styled>>`
  ${Flex}
  width: 100%;
  height: 120px;
  border-radius: 0 0 10px 10px;
  background-color: #FF9D5D;
`

const MypageTitle = styled.h2`
  font-size: 1.5rem;
`

const MypagePoint = styled.div<Partial<Styled>>`
  ${Flex}
  width: 100%;
  height: 80px;
  background-color: #fff;
`