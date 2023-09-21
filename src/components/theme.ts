import styled, { createGlobalStyle, css } from "styled-components";
import { Styled } from "../types/styled";

export const theme = {

}

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

    // 전역 스타일링 리셋 CSS
  html, body, div, span,
  h1, h2, h3, h4, h5, h6,
  p, a, img, ol, ul, li, fieldset,
  form, label, legend, article,figure,
  input,textarea,
  figcaption, footer, header,nav, section {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    font-size: 12px;
    word-break: break-word;
  }
`

/* About css styled ---------------------------------------------- */
const Flex = css<Partial<Styled>>`
  display: flex;
  flex-direction: ${({ $fd }) => ($fd ? $fd : "row")};
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
  align-items: ${({ $ai }) => ($ai ? $ai : "center")};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
`;

const Grid = css<Partial<Styled>>`
  display: grid;
  grid-template-columns: ${({ $gtc }) => ($gtc ? $gtc : "repeat(2, 1fr)")};
  // repeat(7, 1fr) || repeat(auto-fill, minmax(20%, auto));
  grid-template-rows: ${({ $gtr }) => ($gtr ? $gtr : "none")};
  // 구체적인 row를 알고 있을 때 // auto || repeat(3, minmax(100px, auto));
  grid-auto-rows: ${({ $gar }) => ($gar ? $gar : "none")};
  // 구체적인 row를 모를 때 // //minmax(100px, auto);
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
  column-gap: ${({ $cgap }) => ($cgap ? `${$cgap}px` : "none")};
  row-gap: ${({ $rgap }) => ($rgap ? `${$rgap}px` : "none")};
`;

const cursor = css`
  cursor: pointer;
`;


const FlexBox = styled.div<Partial<Styled>>`
  ${Flex}
  width: 100%;
`

export { Flex, Grid, cursor, FlexBox }