import { FC } from "react";
import styled from "styled-components";
import writebutton from "../../asset/join/write.svg";
import { JoinBoardDrop } from "./JoinBoardDrop";
import { Footer } from "../../components";
import { useNavigate } from "react-router-dom";

export const JoinBoard: FC = () => {
	const navigate = useNavigate();

	const mountains = ["설악산", "치악산", "태백산", "오대산"];
	const courses = [
		"두로봉 코스",
		"동대산 코스",
		"동대산 코스",
		"상왕봉 코스",
		"소금강산 코스",
		"소금강산 코스",
		"비로봉 코스",
		"선재길 코스",
		"선재길 코스",
		"계방산1 코스",
		"계방산1 코스",
		"계방산2 코스",
		"계방산2 코스",
	];

	const onWriteButtonHandler = () => {
		navigate("/joinwrite");
	};

	const onDetailButtonHandler = () => {
		navigate("/joindetail");
	};

	return (
		<JoinBoardOutline>
			<div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
				<div style={{ fontSize: "40px", fontFamily: "HakgyoansimGaeulsopungB" }}>산모롱이</div>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
					<JoinBoardDrop type='mountain' items={mountains} />
					<JoinBoardDrop type='course' items={courses} />
				</div>
				<SelectLayout>
					<input type='checkbox' />
					<div style={{ fontSize: "12px" }}>신청가능한 목록만</div>
				</SelectLayout>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: " 10px" }}>
				<JoinListItem onClick={onDetailButtonHandler}>
					<div>
						<div style={{ fontSize: "16px", textAlign: "center" }}>2023</div>
						<div style={{ fontSize: "12px", textAlign: "center" }}>08/23</div>
						<div style={{ fontSize: "8px", textAlign: "center" }}>(등산일)</div>
					</div>
					<div>
						<div style={{ fontSize: "16px", textAlign: "left" }}>함께 등산가실 분 구합니다!!</div>
						<div style={{ fontSize: "12px", textAlign: "left" }}>설악산 - 용대폭포코스(난이도:하)</div>
					</div>
					<div>
						<div style={{ fontSize: "10px", textAlign: "left" }}>모집인원</div>
						<div style={{ fontSize: "16px", textAlign: "left" }}>4/20</div>
					</div>
				</JoinListItem>
				<JoinListItem onClick={onDetailButtonHandler}>
					<div>
						<div style={{ fontSize: "16px", textAlign: "center" }}>2023</div>
						<div style={{ fontSize: "12px", textAlign: "center" }}>08/23</div>
						<div style={{ fontSize: "8px", textAlign: "center" }}>(등산일)</div>
					</div>
					<div>
						<div style={{ fontSize: "16px", textAlign: "left" }}>함께 등산가실 분 구합니다!!</div>
						<div style={{ fontSize: "12px", textAlign: "left" }}>설악산 - 용대폭포코스(난이도:하)</div>
					</div>
					<div>
						<div style={{ fontSize: "10px", textAlign: "left" }}>모집인원</div>
						<div style={{ fontSize: "16px", textAlign: "left" }}>4/20</div>
					</div>
				</JoinListItem>
			</div>
			<WriteButton onClick={onWriteButtonHandler}>
				<img src={writebutton} alt='joinwrite' />
			</WriteButton>
			<Footer />
		</JoinBoardOutline>
	);
};

const JoinBoardOutline = styled.div`
	max-width: 700px;
	min-width: 390px;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: #ffecdb;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	gap: 10px;
	min-height: calc(100vh - 70px);
`;

// const JoinBoardLayout = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	padding: 20px;
// 	box-sizing: border-box;
// 	gap: 10px;
// 	min-height: calc(100vh - 70px);
// `;

const JoinListItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 15px;
	background-color: #fff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

// const Footer = styled.div`
// 	position: sticky;
// 	bottom: 0;
// 	width: 100%;
// 	height: 70px;
// 	background-color: #333;
// 	color: #fff;
// 	text-align: center;
// `;

const WriteButton = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	right: 20px;
	bottom: 90px;
	width: 50px;
	height: 50px;
	background: linear-gradient(0deg, #fdcb82, #ff9859);
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const SelectLayout = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
