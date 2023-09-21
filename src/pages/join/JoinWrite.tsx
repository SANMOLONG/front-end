import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import { Flex, FlexBox } from "../../components";
import { Styled } from "../../types/styled";
import { calander } from "../../asset";
import { useNavigate } from "react-router-dom";

export const JoinWrite = () => {
	const navigate = useNavigate();

	const onBackButtonHandler = () => {
		navigate(-1);
	};
	return (
		<JoinWriteOutline>
			<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
				<BackButton onClick={onBackButtonHandler}>돌아가기</BackButton>
				<div style={{ fontSize: "40px", fontFamily: "HakgyoansimGaeulsopungB" }}>산모롱이</div>
			</div>
			<Title>
				<TitleText>제목</TitleText>
				<TitleInput />
			</Title>
			<FlexBox $jc='space-between'>
				<MountainDropDown>설악산▼</MountainDropDown>
				<CourseDropDown>용대폭포코스▼</CourseDropDown>
				<ManDropDown>인원▼</ManDropDown>
				<DayDropDown>
					<img src={calander} alt='날짜선택' />
					<span>2023.09.23</span>
				</DayDropDown>
			</FlexBox>
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
			<ContentInput maxLength={600} />
			<FlexBox style={{ width: "100%" }}>
				<Submit>등록하기</Submit>
			</FlexBox>

			<Footer />
		</JoinWriteOutline>
	);
};

const JoinWriteOutline = styled.div<Partial<Styled>>`
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

const BackButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 73px;
	border: 1px solid black;
	font-size: 14px;
	border-radius: 5px;
	background-color: #fff;
`;

const Title = styled.div<Partial<Styled>>`
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

const TitleInput = styled.input`
	width: 100%;
	min-height: 30px;
	outline: none;
	padding: 0 10px;
`;

const MountainDropDown = styled.div<Partial<Styled>>`
	${Flex}
	border-radius: 10px;
	border: 2px solid #ff9859;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background-color: #fff;
	min-width: 70px;
	min-height: 30px;
	font-weight: bold;
`;

const CourseDropDown = styled.div<Partial<Styled>>`
	${Flex}
	border-radius: 10px;
	border: 2px solid #ff9859;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background-color: #fff;
	min-width: 120px;
	min-height: 30px;
	font-weight: bold;
`;

const ManDropDown = styled.div<Partial<Styled>>`
	${Flex}
	border-radius: 10px;
	border: 2px solid #ff9859;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background-color: #fff;
	min-width: 50px;
	min-height: 30px;
	font-weight: bold;
`;
const DayDropDown = styled.div<Partial<Styled>>`
	${Flex}
	gap: 10px;
	border-radius: 10px;
	border: 2px solid #ff9859;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	background-color: #fff;
	min-width: 110px;
	min-height: 30px;
	font-weight: bold;
`;

const ContentInput = styled.textarea`
	min-height: 380px;
	border-radius: 10px;
	resize: none;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Submit = styled.button`
	min-height: 60px;
	min-width: 200px;
	background-color: #ff9d5d;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: none;
	color: #fff;
	font-size: 20px;
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
