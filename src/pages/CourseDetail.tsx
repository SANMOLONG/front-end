import React from "react";
import styled from "styled-components";
import { Styled } from "../types/styled";
import { Flex, FlexBox } from "../components";
import mountain from "../asset/mountain.png";
import ryongso from "../asset/ryongso.png";
import route from "../asset/route.png";
import { seorak } from "../asset";
import { useNavigate } from "react-router-dom";

export const CourseDetail = () => {
	const navigate = useNavigate();

	const onMoveHomeHandler = () => {
		navigate("/home");
	};

	const onMoveChatHandler = () => {
		navigate("/home/1");
	};

	const searchKakaoMap = () => {
		const routeName = encodeURIComponent("용소폭포코스"); // 검색어
		const url = `https://map.kakao.com/?q=${routeName}`;
		window.open(url, "_blank"); // 새 탭에서 열기
	};

	return (
		<PagesLayout>
			<ChattingHeader $fd='column' $ai='start'>
				<CustomH1 $fSize={3} children='산모롱이' />
				<CustomH2 children='강원특별자치도의 아름다운 골짜기 기행' />
			</ChattingHeader>
			<CourseDetailLayout>
				<FlexBox
					$fd='column'
					$gap={10}
					style={{ borderRadius: "10px", backgroundColor: "#2E2E2E", padding: "20px" }}>
					<FlexBox $gap={10} $ai='flex-start'>
						<div>
							<div style={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}>
								설악산 용대폭포코스
							</div>
							<div style={{ color: "#fff", fontWeight: "bold" }}>
								수정처럼 맑은 계곡과 기이한 암석이 어우러져 우리나라 최고의 단풍을 즐길 수 있는 대표코스
							</div>
							<div style={{ marginTop: "10px" }}>
								<div style={{ color: "#fff" }}>용소폭포코스</div>
								<div style={{ color: "#fff" }}>난이도 : 지옥</div>
								<div style={{ color: "#fff" }}>시간 : 48시간</div>
								<div style={{ color: "#fff" }}>출발지 : 주전골 입구</div>
							</div>
						</div>
						<div>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "10px" }}
								src={mountain}
								alt='tks'
							/>
						</div>
					</FlexBox>
					<FlexBox $jc='space-between'>
						<BackButton onClick={onMoveHomeHandler}>뒤로가기</BackButton>
						<FlexBox $jc='flex-end' $gap={20}>
							<ChatButton onClick={onMoveChatHandler}>실시간 채팅</ChatButton>
							<CourseButton>코스선택</CourseButton>
						</FlexBox>
					</FlexBox>
				</FlexBox>

				<div onClick={searchKakaoMap}>
					<img style={{ width: "350px", height: "180px", borderRadius: "10px" }} src={route} alt='' />
				</div>
				<div style={{ padding: "0 20px" }}>
					<img style={{ width: "100%", height: "180px", borderRadius: "10px" }} src={ryongso} alt='' />
				</div>
				<FlexBox $gap={15}>
					<div>
						<BadgeIcon>
							<img src={seorak} alt='' />
						</BadgeIcon>
						<BadgeIconTitle>용소폭포</BadgeIconTitle>
					</div>
					<div>
						<div style={{ fontSize: "20px", fontWeight: "bold" }}>용소폭포 코스 등산하다!</div>
						<div>용소 폭포 코스 탐방을 인증 할 수 있어요. </div>
						<div>인증을 위해서 입구에서 뱃지를 누르고 </div>
						<div>등산을 시작해 주세요 </div>
					</div>
				</FlexBox>
			</CourseDetailLayout>
		</PagesLayout>
	);
};

const PagesLayout = styled.div<Partial<Styled>>`
	${Flex}
	flex-direction: column;
	align-items: normal;
	justify-content: normal;
	width: 100%;
	height: 100%;
	position: relative;
	background-color: ${({ $bColor }) => $bColor};
	-webkit-overflow-scrolling: touch;
`;

const ChattingHeader = styled.header<Partial<Styled>>`
	${Flex}
	align-items: flex-start;
	justify-content: flex-start;
	padding: 10px 30px;
	background-color: #ff9859;
	color: white;
	height: 100px;
	/* height: 80px; */
`;

const CustomH1 = styled.h1<Partial<Styled>>`
	font-family: "HakgyoansimGaeulsopungB";
	font-size: ${({ $fSize }) => ($fSize ? `${$fSize}rem` : "4rem")};
`;

const CustomH2 = styled.h2`
	font-family: "HakgyoansimGaeulsopungB";
	font-size: 1.5rem;
`;

const CourseDetailLayout = styled.div<Partial<Styled>>`
	${Flex}
	position: fixed;
	top: 80px;
	flex-direction: column;
	gap: 10px;
`;

const BackButton = styled.div<Partial<Styled>>`
	${Flex}
	min-width: 80px;
	min-height: 30px;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 100px;
`;
const ChatButton = styled.div<Partial<Styled>>`
	${Flex}
	min-width: 80px;
	min-height: 30px;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 100px;
`;
const CourseButton = styled.div<Partial<Styled>>`
	${Flex}
	min-width: 80px;
	min-height: 30px;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 100px;
`;

const BadgeIcon = styled.div`
	width: 68px;
	height: 68px;
	background-color: linear-gradient(140deg, rgba(253, 203, 130, 0.2) 9.74%, rgba(255, 152, 89, 0.2) 85.19%);
	border-radius: 50%;
`;

const BadgeIconTitle = styled.div<Partial<Styled>>`
	${Flex}
	border-radius: 5px;
	background: linear-gradient(89deg, #fdcb82 2.48%, #ffd9c1 81.7%);
	font-family: "HakgyoansimGaeulsopungB";
	font-size: 15px;
	width: 72.981px;
	height: 30px;
`;
