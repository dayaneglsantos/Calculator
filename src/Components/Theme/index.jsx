import { useState } from "react";
import P from "prop-types";
import { Options, ThemeContainer } from "./styles";

const Theme = ({ onChangeTheme, theme }) => {
  const [oneSelected, setOneSelected] = useState(true);
  const [twoSelected, setTwoSelected] = useState(false);
  const [threeSelected, setThreeSelected] = useState(false);

  const themeOne = () => {
    setOneSelected(true);
    setTwoSelected(false);
    setThreeSelected(false);
    onChangeTheme(1);
  };
  const themeTwo = () => {
    setOneSelected(false);
    setTwoSelected(true);
    setThreeSelected(false);
    onChangeTheme(2);
  };
  const themeThree = () => {
    setOneSelected(false);
    setTwoSelected(false);
    setThreeSelected(true);
    onChangeTheme(3);
  };

  return (
    <ThemeContainer theme={theme}>
      <span>Theme</span>
      <Options theme={theme}>
        <div className="description">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="select">
          <div
            className={`one ${oneSelected ? "selected" : ""}`}
            onClick={themeOne}
          />
          <div
            className={`two ${twoSelected ? "selected" : ""}`}
            onClick={themeTwo}
          />
          <div
            className={`three ${threeSelected ? "selected" : ""}`}
            onClick={themeThree}
          />
        </div>
      </Options>
    </ThemeContainer>
  );
};
export default Theme;

Theme.propTypes = {
  onChangeTheme: P.func,
  theme: P.number,
};
