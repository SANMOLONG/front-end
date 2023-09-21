import styled from "styled-components";
import { Styled } from "../../types/styled";
import { Flex } from "../theme";

const NavBottom = styled.div<Partial<Styled>>`
	${Flex}
	width: 100%;
	height: 70px;
	background-color: #fff;
	border-top: 1px solid #ff9859;
`;

const NavIcon = styled.div<Partial<Styled>>`
	${Flex}
	width: 70px;
	height: 70px;
`;

export { NavBottom, NavIcon };
