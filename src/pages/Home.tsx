import { FC, useEffect, useRef, useState } from "react";
import * as SC from "../components";
import { chiak, odae, seorak, taebaek } from "../asset";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Styled } from "../types/styled";
import * as AS from "../asset/homeicon";
import { useRoute } from "../hooks";
import { useGetHomeCourseDateQuery, useGetHomedateQuery } from "../redux/api/RTKquery";

export const Home: FC = () => {
	const { onNavigate } = useRoute();
	const [mount, setMount] = useState<any>(["설악산", 1]);
	const onChangeMount = (targer: any) => () => {
		setMount(targer);
	};
	const mountCourseRef = useRef<HTMLDivElement | null>(null);

	const settings = {
		slidesToShow: 1,
		swipeToSlide: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		dots: false,
		arrows: false,
	};

	const settings2 = {
		slidesToShow: 1,
		swipeToSlide: true,
		focusOnSelect: true,
		autoplay: false,
		infinite: true,
		dots: false,
		arrows: false,
	};

	const svgPath = (number: number | undefined) => {
		let present = number && Math.ceil(number / 10);
		return number && (new Image().src = require(`../asset/homeicon/walking${present + "0"}.svg`));
	};

	const riskMsg = (number: number | undefined) => {
		let present = number && Math.ceil(number / 10);
		if (present && 0 <= present && present <= 4) return "낮음";
		else if (present && present <= 6) return "다소낮음";
		else if (present && present <= 8) return "주의";
		else return "경보";
	};

	const onforecast = (forecast: any) => {
		// 1(맑음), 2(비), 3(구름), 4(흐림)
		if (forecast === 1) return AS.sunny;
		else if (forecast === 2) return AS.rainny;
		else if (forecast === 3) return AS.cloud;
		else return AS.gloomy;
	};

	const onCourseDetailHandler = (courseName: string) => {
		console.log("작동함");
		console.log(courseName);
		onNavigate(`/coursedetail/${courseName}`);
	};

	const { isLoading, isError, data } = useGetHomedateQuery({});
	const { isLoading: courseLoading, isError: couseError, data: courseDate } = useGetHomeCourseDateQuery({});
	console.log("query", courseDate);

	useEffect(() => {
		mountCourseRef.current && (mountCourseRef.current.style.height = `${window.innerHeight - 310}px`);
	}, []);
	if (isLoading || isError || courseLoading || couseError) return <div>로딩 중...</div>;
	else {
		const { badges, fires, plogging, weathers } = data;
		return (
			<SC.PagesLayout $bColor='#FFECDB' style={{}}>
				<SliderLayout>
					<Slider {...settings}>
						{/* 슬라이더 첫번째 아이템 */}
						<SliderInner>
							<SC.FlexBox $gap={10}>
								{weathers.map(({ mount, hiking, sunrise, sunset, forecast }: any) => (
									<MountainWeather key={mount} $fd='column' $gap={5}>
										<img src={onforecast(forecast)} alt='weather' />
										<WeatherMountTiitle children={mount} />
										<WeatherMountState
											$state={hiking}
											children={hiking ? "입산가능" : "입산불가"}
										/>
										<SC.FlexBox $fd='column'>
											<WeatherMountContent children={`일출 ${sunrise}`} />
											<WeatherMountContent children={`일물 ${sunset}`} />
										</SC.FlexBox>
									</MountainWeather>
								))}
							</SC.FlexBox>
						</SliderInner>

						{/* 슬라이더 두번째 아이템 */}
						<SliderInner>
							<SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
								<SC.CustomH1
									$fSize={2}
									children='금일 산불경보 현황'
									style={{ width: "100%", color: "#fff" }}
								/>
								<WaringLayout $gap={5}>
									{fires.map((list: any) => (
										<MountainWeather key={list.mount} $fd='column' $gap={5}>
											<img src={svgPath(list.risk)} alt='weather' />
											<WeatherMountTiitle children={list.mount} />
											<SC.FlexBox $fd='column'>
												<WaringGrade $grade={1}>{riskMsg(list.risk)}</WaringGrade>
												<div style={{ fontWeight: "700" }}>{list.risk}%</div>
											</SC.FlexBox>
										</MountainWeather>
									))}
								</WaringLayout>
							</SC.FlexBox>
						</SliderInner>

						{/* 슬라이더 세번째 아이템 */}
						<SliderInner>
							<SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
								<SC.CustomH1
									$fSize={2}
									children='입산 금지품목'
									style={{ width: "100%", color: "#fff" }}
								/>
								<GridBox>
									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.fire} alt='fire' />
										<ForbiddenContent children='인화성물질 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.washing} alt='washing' />
										<ForbiddenContent children='상의탈의/세탁 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.alcohol} alt='alcohol' />
										<ForbiddenContent children='음주산행 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.speaker} alt='speaker' />
										<ForbiddenContent children='스피커 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.pet} alt='pet' />
										<ForbiddenContent children='애완동물동반 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.plant} alt='plant' />
										<ForbiddenContent children='임산물채취 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.night} alt='night' />
										<ForbiddenContent children='야간산행 NO' />
									</SC.FlexBox>

									<SC.FlexBox $fd='column' $gap={10}>
										<img src={AS.route} alt='route' />
										<ForbiddenContent children='샛길진입 NO' />
									</SC.FlexBox>
								</GridBox>
							</SC.FlexBox>
						</SliderInner>

						{/* 슬라이더 네번째 아이템 */}
						<SliderInner>
							<SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
								<SC.CustomH1
									$fSize={2}
									children='나의 뱃지 리스트'
									style={{ width: "100%", color: "#fff" }}
								/>
								<GridBox style={{ alignItems: "start" }}>
									{badges.map(({ mount, count, lastDate }: any) => (
										<SC.FlexBox key={mount} $fd='column' $gap={5}>
											<div style={{ position: "relative" }}>
												<MountaiMedal src={seorak} $state={!!count} alt='seorak' />
												{!!count && (
													<div
														style={{
															position: "absolute",
															right: "0",
															bottom: "0",
															fontWeight: "800",
														}}>
														x{count}
													</div>
												)}
											</div>
											<WeatherMountTiitle children={mount} />
											<WeatherMountContent children={lastDate} />
										</SC.FlexBox>
									))}
								</GridBox>
							</SC.FlexBox>
						</SliderInner>

						{/* 슬라이더 다섯번째 아이템 */}
						<SliderInner>
							<SC.FlexBox $fd='column' $gap={10} style={{ padding: "20px 30px" }}>
								<SC.CustomH1
									$fSize={2}
									children='나의 플로깅 포인트'
									style={{ width: "100%", color: "#fff" }}
								/>
								<WaringLayout $gap={5} style={{ padding: "0 50px" }}>
									<Point>{plogging}</Point>
									<SC.FlexBox $fd='column' $gap={5} style={{ width: "80px" }}>
										<img src={AS.switchMoney} alt='switchMoney' />
										<WeatherMountContent children='환전하기' />
									</SC.FlexBox>
								</WaringLayout>
							</SC.FlexBox>
						</SliderInner>
					</Slider>
				</SliderLayout>

				<MountCourse $fd='column' $jc='space-between' $gap={15} ref={mountCourseRef}>
					<SC.FlexBox $jc='space-between' style={{ padding: "0 30px" }}>
						<SlelectMount $state={mount[0] === "설악산"} onClick={onChangeMount(["설악산", 1])}>
							설악산
						</SlelectMount>
						<SlelectMount $state={mount[0] === "오대산"} onClick={onChangeMount(["오대산", 2])}>
							오대산
						</SlelectMount>
						<SlelectMount $state={mount[0] === "치악산"} onClick={onChangeMount(["치악산", 3])}>
							치악산
						</SlelectMount>
						<SlelectMount $state={mount[0] === "태백산"} onClick={onChangeMount(["태백산", 4])}>
							태백산
						</SlelectMount>
					</SC.FlexBox>

					<SliderLayout2>
						<Slider {...settings2}>
							{courseDate.map(({ courseNM, level, coursePic }: any) => (
								<SliderCourse key={courseNM} onClick={() => onCourseDetailHandler(courseNM)}>
									<SliderCircle>
										<img src={coursePic} alt='coursePic' />
									</SliderCircle>

									<SliderCircleText $fd='column' $gap={5}>
										<SliderCircleMount $fSize={2}>{courseNM}</SliderCircleMount>
										<SliderCircleMount $fSize={1.5}>{`난이도 : ${level}`}</SliderCircleMount>
									</SliderCircleText>
								</SliderCourse>
							))}
						</Slider>
					</SliderLayout2>

					<SC.FlexBox $jc='space-between' style={{ padding: "0 30px" }}>
						<SettingsBTN onClick={onNavigate(`${mount[1]}`)}>실시간채팅</SettingsBTN>
						<SettingsBTN onClick={onNavigate("/joinboard")}>함께하기</SettingsBTN>
					</SC.FlexBox>
				</MountCourse>
				<SC.FooterNav />
			</SC.PagesLayout>
		);
	}
};

export const SliderLayout = styled.div`
	width: 100%;
	height: 240px;
	background-color: #ff9d5d;
	border-radius: 0 0 20px 20px;
`;

export const SliderLayout2 = styled.div`
	width: 90%;
	height: 250px;
`;

export const SliderInner = styled.div`
	width: 390px;
	height: 200px;
`;

export const MountainWeather = styled.div<Partial<Styled>>`
	${SC.Flex}
	width: 20%;
	height: 200px;
`;

export const WeatherMountTiitle = styled.h2`
	font-weight: 800;
	font-size: 1.5rem;
`;

export const WeatherMountState = styled.h3<Partial<Styled>>`
	${SC.Flex}
	color: ${({ $state }) => ($state ? "#65938F" : "#FF625D")};
	font-size: 1.25rem;
	background-color: #fff;
	padding: 4px 10px;
	border-radius: 20px;
`;
export const WeatherMountContent = styled.h3<Partial<Styled>>`
	font-size: 1rem;
`;

export const WaringLayout = styled.div<Partial<Styled>>`
	${SC.Flex}
	width: 100%;
	height: 140px;
	border-radius: 20px;
	background-color: #fff;
`;
export const WaringGrade = styled(WeatherMountContent)<Partial<Styled>>`
	${({ $grade }) =>
		$grade === 1
			? css`
					color: #004fae;
			  `
			: $grade === 2
			? css`
					color: #3ea61c;
			  `
			: $grade === 3
			? css`
					color: #ffd170;
			  `
			: css`
					color: #fc0000;
			  `};
`;

export const GridBox = styled.div<Partial<Styled>>`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 10px;
	row-gap: 10px;
	width: 100%;
`;

export const ForbiddenContent = styled.h3`
	font-size: 0.8rem;
`;

export const MountaiMedal = styled.img<Partial<Styled>>`
	opacity: ${({ $state }) => ($state ? "1" : "0.3")};
	border: 2px solid #fff;
	border-radius: 50%;
`;

export const Point = styled.div`
	width: 100%;
	font-size: 4.5rem;
	font-weight: 800;
`;

export const MountCourse = styled.article<Partial<Styled>>`
	${SC.Flex}
	padding: 30px 0;
`;

export const SlelectMount = styled.div<Partial<Styled>>`
	${SC.Flex}
	width: 100px;
	height: 35px;
	border-radius: 5px;
	${SC.cursor}
	color: #4F4141;
	font-size: 2rem;
	font-family: "HakgyoansimGaeulsopungB";
	${({ $state }) =>
		$state &&
		css`
			background: linear-gradient(89deg, #fdcb82 2.48%, #ff9859 81.7%);
		`}
`;

export const SettingsBTN = styled.div<Partial<Styled>>`
	${SC.Flex}
	${SC.cursor}
  width: 150px;
	height: 50px;
	border-radius: 5px;
	font-size: 2rem;
	font-family: "HakgyoansimGaeulsopungB";
	background: linear-gradient(89deg, #fdcb82 2.48%, #ff9859 81.7%);
`;

export const SliderCourse = styled.div`
	position: relative;
	max-width: 100%;
	height: 250px;
`;

export const SliderCircle = styled.div`
	position: relative;
	margin: 0 auto;
	width: 250px;
	height: 250px;
	border-radius: 50%;
	background-color: yellow;
	overflow: hidden;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

export const SliderCircleText = styled.div<Partial<Styled>>`
	${SC.Flex}
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translateX(-50%);
`;

export const SliderCircleMount = styled.h1<Partial<Styled>>`
	font-size: ${({ $fSize }) => `${$fSize}rem`};
	font-family: "HakgyoansimGaeulsopungB";
	color: #fff;
`;
