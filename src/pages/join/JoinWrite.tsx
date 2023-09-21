import React from "react";
import styled from "styled-components";

export const JoinWrite = () => {
	return (
		<JoinWriteOutline>
			<JoinWriteLayout></JoinWriteLayout>
			<Footer>푸터 데스~</Footer>
		</JoinWriteOutline>
	);
};

const JoinWriteOutline = styled.div`
	max-width: 390px;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: #ffecdb;
`;

const JoinWriteLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	gap: 10px;
	min-height: calc(100vh - 70px);
`;
const Footer = styled.div`
	position: sticky;
	bottom: 0;
	width: 100%;
	height: 70px;
	background-color: #333;
	color: #fff;
	text-align: center;
`;
