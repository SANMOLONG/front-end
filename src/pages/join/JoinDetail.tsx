import React from "react";
import { Flex, FlexBox, Footer } from "../../components";
import styled from "styled-components";
import { Styled } from "../../types/styled";
import { useNavigate } from "react-router-dom";
import * as AS from "../../asset";

export const JoinDetail = () => {
	const navigate = useNavigate();

	const onBackButtonHandler = () => {
		navigate("/joinboard");
	};
	return (
		<JoinDetailOutline>
			<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
				<BackButton onClick={onBackButtonHandler}>돌아가기</BackButton>
				<div style={{ fontSize: "40px", fontFamily: "HakgyoansimGaeulsopungB" }}>산모롱이</div>
			</div>
			<TitleContainer>
				<TitleText>제목</TitleText>
				<Title children='함께 등산가실 분 구합니다!!!' />
			</TitleContainer>
			<CourseInfo>
				<FlexBox $fd='row' $ai='center' $jc='space-between' style={{ width: "100%" }}>
					<div style={{ fontSize: "18px", fontWeight: "bold", flex: 0.6 }}>용대폭포코스</div>
					<FlexBox $jc='flex-start' $fd='column' $ai='flex-start' style={{ flex: 1 }}>
						<FlexBox $jc='normal'>
							<div>난이도 : 지옥</div>
							<div>시간 : 4시간30분</div>
						</FlexBox>
						<div style={{ fontSize: "10px" }}>출발지 : 주전골 입구(강원도 영양군 서면 약수길 45)</div>
					</FlexBox>
				</FlexBox>

				<div style={{ fontWeight: "bold" }}>
					수정처럼 맑은 계곡과 기이한 암석이 어우러져 우리나라 최고의 단풍을 즐길 수 있는 대표 코스
				</div>
			</CourseInfo>
			<div style={{ height: "150px", overflowY: "scroll" }}>
				<Content>
					{`슝~갓다 슝~갔다 픡 꼬꾸라지면 you die

					◈ 모집요강 지리산 등산학교 제21기 동계반 모집요강

					◎ 일정 : 2006년	12월 9일 ~ 10일 (지리산 중산리 : 오후1시 )
					1 2월 16일 ~ 17일 (오후1시) 2007년 1월 6일 ~ 7일 (오후1시)
				1월 13일 ~ 14일 (오후1시) 1월 20일 ~ 21일（오후1시) (시간변동은 여건에 따라 있을 수 있습니다.)

				◎ 입교비
				: 일반 12만원, 학생 8만원 경남은행 567-22-0094763 예금주 : 경남산악연맹

				◎ 수업시간 : 토요일 오후 1시 ~
				일요일 오후 4시까지 ◎ 접수마감 : 2006년 11월 30일 ◎ 제출서류 : 입학원서, 사진2매`}
				</Content>
			</div>
			<div style={{ height: "320px", overflowY: "scroll" }}>
				<CommentContainer>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>{" "}
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>{" "}
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>{" "}
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>{" "}
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
					<FlexBox $jc='space-between'>
						<FlexBox $jc='flex-start' $gap={10}>
							<div style={{ fontWeight: "bold" }}>모롱이 닉네임</div>
							<div style={{ fontSize: "10px" }}>Date. 2023.09.23</div>
						</FlexBox>
						<FlexBox $jc='flex-end' $gap={5}>
							<div style={{ backgroundColor: "#ff9859", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.trash} alt='' />
							</div>
							<div style={{ backgroundColor: "#FFECDB", padding: "2px 5px", borderRadius: "4px" }}>
								<img src={AS.rewrite} alt='' />
							</div>
						</FlexBox>
					</FlexBox>
					<div>요렛는데? 요로? 요로요로요로롱~ 으잉?</div>
				</CommentContainer>
			</div>

			<SectorGradation></SectorGradation>
			<CommentSubmitContainer>
				<CommentInput />
				<CommentButton>보내기</CommentButton>
			</CommentSubmitContainer>
			<Footer />
		</JoinDetailOutline>
	);
};

const JoinDetailOutline = styled.div<Partial<Styled>>`
	${Flex}
	max-width: 700px;
	min-width: 390px;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: #ffecdb;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	gap: 10px;
	min-height: calc(100vh - 70px);
	align-items: normal;
	justify-content: normal;
	gap: 20px;
`;

const BackButton = styled.div<Partial<Styled>>`
	${Flex}
	height: 30px;
	width: 73px;
	border: 1px solid black;
	font-size: 14px;
	border-radius: 5px;
	background-color: #fff;
`;

const TitleContainer = styled.div<Partial<Styled>>`
	${Flex}
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const TitleText = styled.div<Partial<Styled>>`
	${Flex}
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	letter-spacing: 5px;
	min-height: 30px;
	min-width: 70px;
	text-align: center;
	background-color: #ff9d5d;
`;

const Title = styled.div<Partial<Styled>>`
	${Flex}
	justify-content: flex-start;
	width: 100%;
	min-height: 30px;
	outline: none;
	padding: 0 10px;
	background-color: #fff;
	font-weight: bold;
`;

const CourseInfo = styled.div<Partial<Styled>>`
	${Flex}
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background: #fff;
	padding: 10px 15px;
`;

const Content = styled.div`
	min-width: 350px;
	min-height: 150px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background: #fff;
	padding: 20px;
	border-radius: 10px;
	overflow-y: scroll;
	white-space: pre-line;
`;

const CommentContainer = styled.div<Partial<Styled>>`
	${Flex}
	flex-direction: column;
	gap: 10px;
	justify-content: flex-start;
	align-items: flex-start;
	min-width: 350px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background: #fff;
	padding: 15px;
	border-radius: 10px;
	min-height: 280px;
`;

const CommentButton = styled.button<Partial<Styled>>`
	${Flex}
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	letter-spacing: 5px;
	min-height: 30px;
	min-width: 70px;
	text-align: center;
	background-color: #ff9d5d;
	border: none;
`;

const CommentInput = styled.input`
	width: 100%;
	min-height: 30px;
	outline: none;
	padding: 0 10px;
`;

const SectorGradation = styled.div`
	position: fixed;
	bottom: 70;
	height: 100px;
	width: 100%;
	background: linear-gradient(180deg, rgba(255, 236, 219, 0) 0%, #ffecdb 100%);
	z-index: 9;
`;

const CommentSubmitContainer = styled.div<Partial<Styled>>`
	${Flex}
	position: fixed;
	bottom: 90px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	overflow: hidden;
	min-width: 350px;
	background-color: #ff9d5d;
	background: linear-gradient(180deg, rgba(255, 236, 219, 0) 0%, #ffecdb 43.23%);
	overflow: hidden;
	z-index: 10; // 더 높은 z-index
`;
