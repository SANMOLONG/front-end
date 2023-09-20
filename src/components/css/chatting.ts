import styled, { css, keyframes } from "styled-components"
import { Flex } from "../theme"
import { Styled } from "../../types/styled"

const ChattingHeader = styled.header<Partial<Styled>>`
  ${Flex}
  padding: 10px 30px;
  background-color: #FF9859;
  color: white;
  height: 80px;
`

const ChattingContent = styled.div`
  min-height: calc(100% - 80px);
  background: linear-gradient(180deg, #FF9859 8.85%, #fff 44.79%);
`

const SelectBtn = styled.div<Partial<Styled>>`
  ${Flex}
  padding: 0 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  font-size: 1.25rem;

  ${({ $type }) => $type === "gradientOrange" && css`
    width: 80px;
    background: linear-gradient(89deg, #FDCB82 2.48%, #FFD9C1 81.7%);
  `}
`

const UrgentMsgLayout = styled.article<Partial<Styled>>`
  ${Flex}
  width:100%;
  height: 30px;
  overflow:hidden;
  border-radius: 50px;
  background-color: #2E2E2E;
`

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: #F84E4E;
`

const UrgentTilte = styled.div`
  color: #F84E4E;
  font-weight: 800;
  span {
    color: #fff;
  }
`

const UrgentMsg = styled.div`
  color: #fff;
`


const moveRightToLeft = keyframes`
 0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MessageContainer = styled.div<Partial<Styled>>`
  ${Flex}
  gap: 30px;
  animation: ${moveRightToLeft} ${({ $length }) => $length && 20 * $length}s linear infinite;
`;

const Message = styled.div<Partial<Styled>>`
  ${Flex}
  gap: 5px;
  white-space: nowrap;
`

const ChattingLayout = styled.div<Partial<Styled>>`
  ${Flex}
  height: 200px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .nickname {
    font-weight: 800;
  }

  .content {
    max-width: 70%;
    padding: 6px;
    border-radius: 10px;
    background: #FFCD86;
  }
  .date {
    color: #757575;
    font-size: 10px;
  }
`

const MountSelectLayout = styled.div`
  position: absolute;
  bottom: -130px;
  background-color: #fff;
  z-index: 10;
  border-radius: 5px;
`

const MountSelectList = styled.div<Partial<Styled>>`
  ${Flex}
  width: 80px;
  height: 30px;

  &:hover {
    background-color:#FDCB82;
  }
`

const ChattingBottom = styled.div<Partial<Styled>>`
  position: fixed;
  bottom: 0;
  max-width: 700px;
  width: 100%;
  .chatInput {
    padding: 0 30px;
  }

  .urgnetImg {
    display: block;
    margin: 10px auto;
  }

  .inputLayout {
    display: grid;
    grid-template-columns: 1fr 60px;
    height: 45px;
    border: 3px solid #FF995A;
    margin-bottom: 10px;
    border-radius: 50px;
    padding: 0 10px;
    align-items: center;
  }

  .chattingInput{
    border-radius: 50px;
    height: 100%;
    outline-style: none;
  }

  .sendBtn {
    ${Flex}
     width: 60px;
      height: 32px;
       background-color: #FFCD86;
        border-radius: 20px;
  }
`

export {
  ChattingHeader,
  ChattingContent,
  SelectBtn,
  UrgentMsgLayout,
  Circle,
  UrgentTilte,
  UrgentMsg,
  MessageContainer,
  Message,
  ChattingLayout,
  MountSelectLayout,
  MountSelectList,
  ChattingBottom
}