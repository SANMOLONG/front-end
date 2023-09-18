import styled, { css } from "styled-components"
import { Styled } from "../../types/styled"
import { Flex, cursor } from "../theme"

const PagesLayout = styled.div`
width: 100%;
height: 100%;
position: relative;
-webkit-overflow-scrolling: touch;
`


const FigureImg = styled.figure`
  position: relative;
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
  }
`

const MainContent = styled.section<Partial<Styled>>`
  ${Flex}
  position: absolute;
  top: 250px;
  width: 100%;
  padding: 30px;
  padding-bottom: 80px;
  min-height: calc(100% - 250px);
  background-color:white;
  border-radius:  20px 20px 0 0;
`

const CustomH1 = styled.h1`
  font-family: 'HakgyoansimGaeulsopungB';
  font-size: 4rem;
`

const CustomH2 = styled.h2`
  font-family: 'HakgyoansimGaeulsopungB';
  font-size: 1.5rem;
`

const MainBtn = styled.div<Partial<Styled>>`
${Flex}
${cursor}
width: 101px;
height: 26px;
border-radius: 10px;
font-family: 'HakgyoansimGaeulsopungB';
font-size: 1.5rem;
margin-bottom: 5px;
background: linear-gradient(104.73deg, #FDCB82 54.49%, #FF9859 80.95%);
`

const MainIntrodution = styled.article`
  font-family: "Pretendard";
  font-size: 1.25rem;
  text-align: justify;
	white-space: pre-line;
  span {
    font-family: 'HakgyoansimGaeulsopungB';
    font-size: 2rem;
  }
`

const ScrollDiv = styled.div<Partial<Styled>>`
  ${Flex}
  height: ${({$state})=> $state ? "30px" : "0px"};
  background: linear-gradient(#fff 0%, #FF9859 100%);
  opacity: 0.8;
  transition: all 0.2s linear;

  

  ${({$state}) => $state ? css`
  height: 30px;
  p {
    font-weight: 800;
    font-family: "Pretendard";
  }

  ` : css`
  height: 0px;
  border-top: 1px solid #FF9859;
  p {
    display: none
  }
  `}
`
const NavBottom = styled.div<Partial<Styled>>`
  ${Flex}
  width: 100%;
  height: 70px;
  background-color: #fff;
`

const NavIcon = styled.div<Partial<Styled>>`
  ${Flex}
  width: 70px;
  height: 70px;
`

export {
  PagesLayout,
  FigureImg,
  MainContent,
  CustomH1,
  CustomH2, 
  MainBtn,
  MainIntrodution, 
  ScrollDiv, 
  NavBottom,
  NavIcon
}