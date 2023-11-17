import styled from "styled-components";

import colors from "../../Styles/colors";

export const ThemeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  justify-content: end;
  width: 100%;

  span {
    text-transform: uppercase;
    color: ${(props) =>
      props.theme === 1
        ? colors.white
        : props.theme === 2
        ? colors.theme2.darkText
        : props.theme === 3
        ? colors.theme3.yellow
        : ""};
  }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;

  width: 60px;
  margin-left: 16px;

  .description {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    margin-bottom: 4px;
    color: ${(props) =>
      props.theme === 1
        ? colors.white
        : props.theme === 2
        ? colors.theme2.darkText
        : props.theme === 3
        ? colors.theme3.yellow
        : ""};
  }

  .select {
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    padding: 2px 3px;
    background-color: ${(props) =>
      props.theme === 1
        ? colors.theme1.screenBg
        : props.theme === 2
        ? colors.theme2.toggleBg
        : props.theme === 3
        ? colors.theme3.purple4
        : ""};

    .one,
    .two,
    .three {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      cursor: pointer;
    }

    .selected {
      background-color: ${(props) =>
        props.theme === 1
          ? "hsl(6, 70%, 60%)"
          : props.theme === 2
          ? "hsl(25, 99%, 60%)"
          : props.theme === 3
          ? colors.theme3.lightCyan
          : ""};
    }
  }
`;
