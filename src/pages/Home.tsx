import { FC, useEffect, useRef, useState } from 'react'
// import { useRoute } from '../hooks'
import * as SC from '../components'
import { chiak, homeSvg, odae, seorak, taebaek, togeterSvg, userSvg } from '../asset'
import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Styled } from '../types/styled'
import * as AS from '../asset/homeicon'



export const Home: FC = () => {
  // const {onNavigete} = useRoute()
  const [mount, setMount] = useState<any>(["설악산", 1])
  const onChangeMount = (targer: any) => () => {
    setMount(targer)
  }


  const mountCourseRef = useRef<HTMLDivElement | null>(null)

  const settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false,
  }

  const settings2 = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: false,
    arrows: false,
  }

  const svgPath = (number: number | undefined) => {
    return number && (new Image().src = require(`../asset/homeicon/walking${number}.svg`));
  }

  useEffect(() => {
    mountCourseRef.current && (mountCourseRef.current.style.height = `${window.innerHeight - 310}px`)
  }, [])

  return (
    <SC.PagesLayout $bColor="#FFECDB">
      <SliderLayout>
        <Slider {...settings}>

          {/* 슬라이더 첫번째 아이템 */}
          <SliderInner>
            <SC.FlexBox $gap={10}>
              <MountainWeather $fd='column' $gap={5}>
                <img src={AS.sunny} alt='weather' />
                <WeatherMountTiitle children="설악산" />
                <WeatherMountState $state={true} children="입산가능" />
                <SC.FlexBox $fd='column'>
                  <WeatherMountContent children="일출 07:00" />
                  <WeatherMountContent children="일몰 18:36" />
                </SC.FlexBox>
              </MountainWeather>

              <MountainWeather $fd='column' $gap={5}>
                <img src={AS.gloomy} alt='weather' />
                <WeatherMountTiitle children="오대산" />
                <WeatherMountState $state={true} children="입산가능" />
                <SC.FlexBox $fd='column'>
                  <WeatherMountContent children="일출 07:00" />
                  <WeatherMountContent children="일몰 18:36" />
                </SC.FlexBox>
              </MountainWeather>

              <MountainWeather $fd='column' $gap={5}>
                <img src={AS.cloud} alt='weather' />
                <WeatherMountTiitle children="치악산" />
                <WeatherMountState $state={true} children="입산가능" />
                <SC.FlexBox $fd='column'>
                  <WeatherMountContent children="일출 07:00" />
                  <WeatherMountContent children="일몰 18:36" />
                </SC.FlexBox>
              </MountainWeather>

              <MountainWeather $fd='column' $gap={5}>
                <img src={AS.rainny} alt='weather' />
                <WeatherMountTiitle children="태백산" />
                <WeatherMountState $state={false} children="입산불가" />
                <SC.FlexBox $fd='column'>
                  <WeatherMountContent children="일출 07:00" />
                  <WeatherMountContent children="일몰 18:36" />
                </SC.FlexBox>
              </MountainWeather>
            </SC.FlexBox>
          </SliderInner>

          {/* 슬라이더 두번째 아이템 */}
          <SliderInner>
            <SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
              <SC.CustomH1 $fSize={2} children="금일 산불경보 현황" style={{ width: "100%", color: "#fff" }} />
              <WaringLayout $gap={5}>
                <MountainWeather $fd='column' $gap={5}>
                  <img src={svgPath(10)} alt='weather' />
                  <WeatherMountTiitle children="설악산" />
                  <SC.FlexBox $fd='column'>
                    <WaringGrade $grade={1}>낮음</WaringGrade>
                    <div style={{ fontWeight: "700" }}>10%</div>
                  </SC.FlexBox>
                </MountainWeather>

                <MountainWeather $fd='column' $gap={5}>
                  <img src={svgPath(40)} alt='weather' />
                  <WeatherMountTiitle children="오대산" />
                  <SC.FlexBox $fd='column'>
                    <WaringGrade $grade={2}>다소낮음</WaringGrade>
                    <div style={{ fontWeight: "700" }}>40%</div>
                  </SC.FlexBox>
                </MountainWeather>

                <MountainWeather $fd='column' $gap={5}>
                  <img src={svgPath(70)} alt='weather' />
                  <WeatherMountTiitle children="치악산" />
                  <SC.FlexBox $fd='column'>
                    <WaringGrade $grade={2}>높음</WaringGrade>
                    <div style={{ fontWeight: "700" }}>70%</div>
                  </SC.FlexBox>
                </MountainWeather>

                <MountainWeather $fd='column' $gap={5}>
                  <img src={svgPath(100)} alt='weather' />
                  <WeatherMountTiitle children="태백산" />
                  <SC.FlexBox $fd='column'>
                    <WaringGrade $grade={4}>경보</WaringGrade>
                    <div style={{ fontWeight: "700" }}>100%</div>
                  </SC.FlexBox>
                </MountainWeather>
              </WaringLayout>
            </SC.FlexBox>
          </SliderInner>


          {/* 슬라이더 세번째 아이템 */}
          <SliderInner>
            <SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
              <SC.CustomH1 $fSize={2} children="입산 금지품목" style={{ width: "100%", color: "#fff" }} />
              <GridBox>
                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.fire} alt='fire' />
                  <ForbiddenContent children="인화성물질 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.washing} alt='washing' />
                  <ForbiddenContent children="상의탈의/세탁 NO" />

                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.alcohol} alt='alcohol' />
                  <ForbiddenContent children="음주산행 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.speaker} alt='speaker' />
                  <ForbiddenContent children="스피커 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.pet} alt='pet' />
                  <ForbiddenContent children="애완동물동반 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.plant} alt='plant' />
                  <ForbiddenContent children="임산물채취 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.night} alt='night' />
                  <ForbiddenContent children="야간산행 NO" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={10}>
                  <img src={AS.route} alt='route' />
                  <ForbiddenContent children="샛길진입 NO" />
                </SC.FlexBox>

              </GridBox>

            </SC.FlexBox>
          </SliderInner>

          {/* 슬라이더 네번째 아이템 */}
          <SliderInner>
            <SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
              <SC.CustomH1 $fSize={2} children="나의 뱃지 리스트" style={{ width: "100%", color: "#fff" }} />
              <GridBox style={{ alignItems: "start" }}>

                <SC.FlexBox $fd='column' $gap={5}>
                  <div style={{ position: "relative" }}>
                    <MountaiMedal src={seorak} $state={true} alt='seorak' />
                    <div style={{ position: "absolute", right: "0", bottom: "0", fontWeight: "800" }}>x20</div>
                  </div>
                  <WeatherMountTiitle children="설악산" />
                  <WeatherMountContent children="023-02-03" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={5}>
                  <div style={{ position: "relative" }}>
                    <MountaiMedal src={odae} $state={true} alt='odae' />
                    <div style={{ position: "absolute", right: "0", bottom: "0", fontWeight: "800" }}>x20</div>
                  </div>
                  <WeatherMountTiitle children="오대산" />
                  <WeatherMountContent children="2023-02-03" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={5}>
                  <div style={{ position: "relative" }}>
                    <MountaiMedal src={chiak} $state={false} alt='chiak' />
                  </div>
                  <WeatherMountTiitle children="치악산" />
                  <WeatherMountContent $state={false} children="" />
                </SC.FlexBox>

                <SC.FlexBox $fd='column' $gap={5}>
                  <div style={{ position: "relative" }}>
                    <MountaiMedal src={taebaek} $state={false} alt='taebaek' />
                  </div>
                  <WeatherMountTiitle children="태백산" />
                  <WeatherMountContent children="" />
                </SC.FlexBox>
              </GridBox>
            </SC.FlexBox>
          </SliderInner>

          {/* 슬라이더 다섯번째 아이템 */}
          <SliderInner>
            <SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
              <SC.CustomH1 $fSize={2} children="나의 플로깅 포인트" style={{ width: "100%", color: "#fff" }} />
              <WaringLayout $gap={5} style={{ padding: "0 50px" }}>
                <Point>500g</Point>
                <SC.FlexBox $fd='column' $gap={5} style={{ width: "80px" }}>
                  <img src={AS.switchMoney} alt='switchMoney' />
                  <WeatherMountContent children="환전하기" />

                </SC.FlexBox>
              </WaringLayout>
            </SC.FlexBox>
          </SliderInner>
        </Slider>
      </SliderLayout>


      <MountCourse $fd='column' $jc='space-between' $gap={15} ref={mountCourseRef}>
        <SC.FlexBox $jc='space-between' style={{ padding: "0 30px" }}>
          <SlelectMount $state={mount[0] === "설악산"} onClick={onChangeMount(["설악산", 1])}>설악산</SlelectMount>
          <SlelectMount $state={mount[0] === "오대산"} onClick={onChangeMount(["오대산", 2])}>오대산</SlelectMount>
          <SlelectMount $state={mount[0] === "치악산"} onClick={onChangeMount(["치악산", 3])}>치악산</SlelectMount>
          <SlelectMount $state={mount[0] === "태백산"} onClick={onChangeMount(["태백산", 4])}>태백산</SlelectMount>
        </SC.FlexBox>
        
        <SliderLayout2>
        <Slider {...settings2}>
            <SliderCourse>
              <SliderCircle />
            </SliderCourse>
        </Slider>
        </SliderLayout2>



        <SC.FlexBox $jc='space-between' style={{ padding: "0 30px" }}>
        <SettingsBTN >실시간채팅</SettingsBTN>
          <SettingsBTN >함께하기</SettingsBTN>
        </SC.FlexBox>
      </MountCourse>
      <div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
        <SC.NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list =>
            <SC.NavIcon key={list} children={<img src={list} alt='NavbottomImg' />} />)}
        </SC.NavBottom>
      </div>
    </SC.PagesLayout>
  )
}


const SliderLayout = styled.div`
  width: 100%;
  height: 240px;
  background-color: #FF9D5D;
  border-radius: 0 0 20px 20px;
`

const SliderLayout2 = styled.div`
  width: 90%;
  height: 150px;
`

const SliderInner = styled.div`
  width: 390px;
  height: 200px;
`

const MountainWeather = styled.div<Partial<Styled>>`
  ${SC.Flex}
  width: 20%;
  height: 200px;
`

const WeatherMountTiitle = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
`

const WeatherMountState = styled.h3<Partial<Styled>>`
  ${SC.Flex}
  color: ${({ $state }) => $state ? "#65938F" : "#FF625D"};
  font-size: 1.25rem;
  background-color: #fff;
  padding: 4px 10px;
  border-radius: 20px;
`
const WeatherMountContent = styled.h3<Partial<Styled>>`
  font-size: 1rem;
`

const WaringLayout = styled.div<Partial<Styled>>`
  ${SC.Flex}
  width: 100%;
  height: 140px;
  border-radius: 20px;
  background-color: #fff;
`
const WaringGrade = styled(WeatherMountContent) <Partial<Styled>>`
  ${({ $grade }) => $grade === 1
    ? css`
      color: #004FAE;
    ` : $grade === 2
      ? css`
        color: #3EA61C;
      ` : $grade === 3
        ? css`
            color: #FFD170;
          ` : css`
          color: #FC0000;
          `};
`

const GridBox = styled.div<Partial<Styled>>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
`

const ForbiddenContent = styled.h3`
  font-size: 0.8rem;
`

const MountaiMedal = styled.img<Partial<Styled>>`
  opacity: ${({ $state }) => $state ? "1" : "0.3"};
  border: 2px solid #fff;
  border-radius: 50%;
`

const Point = styled.div`
width: 100%;
  font-size: 4.5rem;
  font-weight: 800;
`


const MountCourse = styled.article<Partial<Styled>>`
${SC.Flex}
padding: 30px 0;
`

const SlelectMount = styled.div<Partial<Styled>>`
${SC.Flex}
width: 100px;
height: 35px;
border-radius: 5px;
${SC.cursor}
color: #4F4141;
font-size: 2rem;
font-family: 'HakgyoansimGaeulsopungB';
${({ $state }) => $state && css`
background: linear-gradient(89deg, #FDCB82 2.48%, #FF9859 81.7%);
`}
`

const SettingsBTN = styled.div<Partial<Styled>>`
  ${SC.Flex}
  ${SC.cursor}
  width: 150px;
  height: 50px;
  border-radius: 5px;
  font-size: 2rem;
  font-family: 'HakgyoansimGaeulsopungB';
  background: linear-gradient(89deg, #FDCB82 2.48%, #FF9859 81.7%);
`

const SliderCourse = styled.div`
  max-width: 100%;
  height: 150px;
  background-color: red;
`

const SliderCircle = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: yellow;

`