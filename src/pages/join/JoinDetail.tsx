import React from "react";
import { Flex, FlexBox, Footer, FooterNav } from "../../components";
import styled from "styled-components";
import { Styled } from "../../types/styled";
import { useNavigate, useParams } from "react-router-dom";
import * as AS from "../../asset";
import { useGetJoinDetailQuery } from "../../redux/api/RTKquery";

export const JoinDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const onBackButtonHandler = () => {
		navigate("/joinboard");
	};

	const { isLoading, isError, data } = useGetJoinDetailQuery({ id });
	console.log(data);

	if (isLoading || isError) return <div>로딩 중...</div>;
	else {
		const {
			title,
			content,
			course,
			courseDetail,
			departAD,
			departNM,
			level,
			mountDate,
			completed,
			author,
			comments,
			spendTime,
		} = data;
		return (
			<>
				<JoinDetailOutline>
					<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
						<BackButton onClick={onBackButtonHandler}>돌아가기</BackButton>
						<div style={{ fontSize: "40px", fontFamily: "HakgyoansimGaeulsopungB" }}>산모롱이</div>
					</div>
					<TitleContainer>
						<TitleText>제목</TitleText>
						<Title children={title} />
					</TitleContainer>
					<CourseInfo>
						<FlexBox $fd='row' $ai='center' $jc='space-between' style={{ width: "100%" }}>
							<div style={{ fontSize: "18px", fontWeight: "bold", flex: 0.6 }}>{course}</div>
							<FlexBox $jc='flex-start' $fd='column' $ai='flex-start' style={{ flex: 1 }}>
								<FlexBox $jc='normal'>
									<div>난이도 : {level}</div>
									<div>시간 : {spendTime}</div>
								</FlexBox>
								<div style={{ fontSize: "10px" }}>
									출발지 : {departNM}
									{departAD}
								</div>
							</FlexBox>
						</FlexBox>

						<div style={{ fontWeight: "bold" }}>{courseDetail}</div>
					</CourseInfo>
					<div style={{ height: "150px", overflowY: "scroll", borderRadius: "10px" }}>
						<Content>{content}</Content>
					</div>
					<div style={{ height: "320px", overflowY: "scroll" }}>
						<CommentContainer>
							{comments.map((item: any, idx: number) => (
								<FlexBox $fd='column' $ai='flex-start' key={idx}>
									<FlexBox $jc='space-between'>
										<FlexBox $jc='flex-start' $gap={10}>
											<div style={{ fontWeight: "bold" }}>{item.nickname}</div>
											<div style={{ fontSize: "10px" }}>Date. {item.createdAt}</div>
										</FlexBox>
										<FlexBox $jc='flex-end' $gap={5}>
											<div
												style={{
													backgroundColor: "#ff9859",
													padding: "2px 5px",
													borderRadius: "4px",
												}}>
												<img src={AS.trash} alt='' />
											</div>
											<div
												style={{
													backgroundColor: "#FFECDB",
													padding: "2px 5px",
													borderRadius: "4px",
												}}>
												<img src={AS.rewrite} alt='' />
											</div>
										</FlexBox>
									</FlexBox>
									<div>{item.content}</div>
								</FlexBox>
							))}
						</CommentContainer>
					</div>

					<SectorGradation></SectorGradation>
					<CommentSubmitContainer>
						<CommentInput />
						<CommentButton>보내기</CommentButton>
					</CommentSubmitContainer>
				</JoinDetailOutline>
				<FooterNav />
			</>
		);
	}
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
