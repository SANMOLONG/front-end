import React, { useState } from "react";
import styled from "styled-components";

interface DropdownMenuProps {
	type: "mountain" | "course";
	items: string[];
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const JoinBoardDrop: React.FC<DropdownMenuProps> = ({ type, items, selected, setSelected }) => {
	const [dropActivate, setDropActivate] = useState<{ [key: string]: boolean }>({});

	const dropMenuButtonHandler = (type: string) => () => {
		setDropActivate((prevState) => ({ ...prevState, [type]: !prevState[type] }));
	};
	const droppedMenuBlur = (type: string) => () => {
		setTimeout(() => {
			setDropActivate((prevState) => ({ ...prevState, [type]: false }));
		}, 200);
	};

	const selectItem = (item: string) => {
		setSelected(item);
		setDropActivate((prevState) => ({ ...prevState, [type]: false }));
	};

	return (
		<div
			style={{
				borderBottom: "2px solid #FF9D5D",
				width: type === "mountain" ? "70px" : "100px",
				textAlign: "center",
			}}>
			<div onClick={dropMenuButtonHandler(type)} onBlur={droppedMenuBlur(type)} tabIndex={0}>
				{`${selected} ▼`}
			</div>
			{dropActivate[type] && (
				<DropdownMenu type={type}>
					{items.map((item, idx) => (
						<MenuItem key={idx} onClick={() => selectItem(item)}>
							<div>{item}</div>
						</MenuItem>
					))}
				</DropdownMenu>
			)}
		</div>
	);
};

const DropdownMenu = styled.div<{ type: "mountain" | "course" }>`
	border: 1px solid black;
	border-radius: 10px;
	margin-top: 10px;
	position: fixed;
	display: flex;
	flex-direction: column;
	width: ${({ type }) => (type === "course" ? "120px" : "80px")};
	background-color: #fff;
	padding: 20px 0;
	text-align: center;
`;
const MenuItem = styled.div`
	padding: 7px;
	&:hover {
		font-weight: bold;
		background-color: #ffecdb;
	}
`;
