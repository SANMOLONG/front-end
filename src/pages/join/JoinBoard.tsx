import { FC, useState } from "react";
import styled from "styled-components";
import writebutton from "../../asset/join/write.svg";

import { FooterNav } from "../../components";
import { useNavigate } from "react-router-dom";
import { JoinBoardDrop } from "./JoinBoardDrop";
import { useGetJoinBoardQuery } from "../../redux/api/RTKquery";

export const JoinBoard: FC = () => {
	const navigate = useNavigate();

	const mountains = ["설악산", "치악산", "태백산", "오대산"];
	const courses = [
		"용소폭포코스",
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

	const onDetailButtonHandler = (id: number) => () => {
		navigate(`/joindetail/${id}`);
	};

	const [selectedMountain, setSelectedMountain] = useState("산 선택");
	const [selectedCourse, setSelectedCourse] = useState("코스 선택");

	const { isLoading, isError, data } = useGetJoinBoardQuery({ selectedMountain, selectedCourse });
	console.log(selectedMountain);
	console.log(selectedCourse);

	if (isLoading || isError) return <div>로딩 중...</div>;
	else {
		return (
			<>
				<JoinBoardOutline>
					<div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
						<div style={{ fontSize: "40px", fontFamily: "HakgyoansimGaeulsopungB" }}>산모롱이</div>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
							<JoinBoardDrop
								type='mountain'
								items={mountains}
								selected={selectedMountain}
								setSelected={setSelectedMountain}
							/>
							<JoinBoardDrop
								type='course'
								items={courses}
								selected={selectedCourse}
								setSelected={setSelectedCourse}
							/>
						</div>
						<SelectLayout>
							<input type='checkbox' />
							<div style={{ fontSize: "12px" }}>신청가능한 목록만</div>
						</SelectLayout>
					</div>
					{data.uncompleted.map((item: any, idx: number) => (
						<div key={idx} style={{ display: "flex", flexDirection: "column", gap: " 10px" }}>
							<JoinListItem onClick={onDetailButtonHandler(item.postId)}>
								<div>
									<div style={{ fontSize: "16px", textAlign: "center" }}>
										{item.mountDate.split("-")[0]}
									</div>
									<div style={{ fontSize: "12px", textAlign: "center" }}>
										{item.mountDate.split("-")[1]}/{item.mountDate.split("-")[2]}
									</div>
									<div style={{ fontSize: "8px", textAlign: "center" }}>(등산일)</div>
								</div>
								<div>
									<div style={{ fontSize: "16px", textAlign: "left" }}>{item.title}</div>
									<div style={{ fontSize: "12px", textAlign: "left" }}>
										{item.mountain} - {item.course}(난이도:{item.level})
									</div>
								</div>
								<div>
									<div style={{ fontSize: "10px", textAlign: "left" }}>모집인원</div>
									<div style={{ fontSize: "16px", textAlign: "center" }}>
										{item.togetherCount}/{item.headCount}
									</div>
								</div>
							</JoinListItem>
						</div>
					))}

					<WriteButton onClick={onWriteButtonHandler}>
						<img src={writebutton} alt='joinwrite' />
					</WriteButton>
				</JoinBoardOutline>
				<FooterNav />
			</>
		);
	}
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
