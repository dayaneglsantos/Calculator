import styled from "styled-components";
import colors from "../../Styles/colors";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.mainBg
      : props.theme === 2
      ? colors.theme2.mainBg
      : props.theme === 3
      ? colors.theme3.purple6
      : ""};
  width: 100vw;
  height: 100vh;
`;

export const CalculatorContainer = styled.div`
  width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  font-size: 42px;
  padding: 24px;
  text-align: end;
  width: 100%;
  margin: 32px 0 24px;
  border: none;
  border-radius: 12px;
  outline: none;
  color: ${(props) =>
    props.theme === 1
      ? colors.white
      : props.theme === 2
      ? colors.theme2.darkText
      : props.theme === 3
      ? colors.theme3.yellow
      : ""};
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.screenBg
      : props.theme === 2
      ? colors.theme2.screenBg
      : props.theme === 3
      ? colors.theme3.purple5
      : ""};
`;

export const InteractionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.toggleBg
      : props.theme === 2
      ? colors.theme2.toggleBg
      : props.theme === 3
      ? colors.theme3.purple5
      : ""};

  .lastRow {
    grid-template-columns: repeat(2, 2fr);
  }
`;

export const NormalButton = styled.button`
  grid-column: span 1;
  border: none;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 3px 0px 0
    ${(props) =>
      props.theme === 1
        ? colors.theme1.keyShadowOrange
        : props.theme === 2
        ? colors.theme2.lightOrange
        : props.theme === 3
        ? colors.theme3.purple
        : ""};
  color: ${(props) =>
    props.theme === 1
      ? colors.theme1.darkText
      : props.theme === 2
      ? colors.theme2.darkText
      : props.theme === 3
      ? colors.theme3.yellow
      : ""};
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.keyBgOrange
      : props.theme === 2
      ? colors.theme2.lightYellow
      : props.theme === 3
      ? colors.theme3.purple4
      : ""};

  &:hover {
    background-color: ${(props) =>
      props.theme === 1
        ? colors.white
        : props.theme === 2
        ? colors.white
        : props.theme === 3
        ? colors.theme3.purple2
        : ""};
  }
`;

export const DelButton = styled(NormalButton)`
  grid-column: span 1;
  font-size: 24px;
  box-shadow: 0px 3px 0px 0
    ${(props) =>
      props.theme === 1
        ? colors.theme1.keyShadowBlue
        : props.theme === 2
        ? colors.theme2.darkCyan
        : props.theme === 3
        ? colors.theme3.purple
        : ""};
  color: ${colors.white};
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.keyBgBlue
      : props.theme === 2
      ? colors.theme2.mediumCyan
      : props.theme === 3
      ? colors.theme3.purple3
      : ""};

  &:hover {
    background-color: ${(props) =>
      props.theme === 1
        ? "hsl(224, 28%, 60%)"
        : props.theme === 2
        ? "hsl(185, 58%, 40%)"
        : props.theme === 3
        ? colors.theme3.purple2
        : ""};
  }
`;

export const ResetButton = styled(NormalButton)`
  grid-column: span 2;
  font-size: 24px;
  box-shadow: 0px 3px 0px 0
    ${(props) =>
      props.theme === 1
        ? colors.theme1.keyShadowBlue
        : props.theme === 2
        ? colors.theme2.darkCyan
        : props.theme === 3
        ? colors.theme3.purple
        : ""};
  color: ${colors.white};
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.keyBgBlue
      : props.theme === 2
      ? colors.theme2.mediumCyan
      : props.theme === 3
      ? colors.theme3.purple3
      : ""};

  &:hover {
    background-color: ${(props) =>
      props.theme === 1
        ? "hsl(224, 28%, 60%)"
        : props.theme === 2
        ? "hsl(185, 58%, 40%)"
        : props.theme === 3
        ? colors.theme3.purple2
        : ""};
  }
`;

export const ResultButton = styled(NormalButton)`
  grid-column: span 2;
  box-shadow: 0px 3px 0px 0
    ${(props) =>
      props.theme === 1
        ? colors.theme1.darkRed
        : props.theme === 2
        ? colors.theme2.darkOrange
        : props.theme === 3
        ? colors.theme3.lightCyan
        : ""};
  color: ${(props) =>
    props.theme === 1
      ? colors.white
      : props.theme === 2
      ? colors.white
      : props.theme === 3
      ? colors.theme3.darkText
      : ""};
  background-color: ${(props) =>
    props.theme === 1
      ? colors.theme1.red
      : props.theme === 2
      ? colors.theme2.orange
      : props.theme === 3
      ? colors.theme3.cyan
      : ""};

  &:hover {
    background-color: ${(props) =>
      props.theme === 1
        ? "hsl(6, 63%, 65%)"
        : props.theme === 2
        ? "hsl(25, 98%, 60%)"
        : props.theme === 3
        ? "hsl(177, 92%, 80%)"
        : ""};
  }
`;
