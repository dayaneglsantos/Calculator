import { useState } from "react";
import Theme from "../Theme";

import * as S from "./styles";

const Calculator = () => {
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [inputValue, setInputValue] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");

  const showOnScreen = (e) => {
    const value = e.target.value;
    if (inputValue === 0) {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const reset = () => {
    setInputValue(0);
  };

  const del = () => {
    const inputString = inputValue.toString();
    if (inputValue.length === 1) {
      setInputValue(0);
      return;
    }
    setInputValue(inputString.slice(0, -1));
  };

  const defineOperator = (operator) => {
    setOperator(operator);
    setFirstNumber(parseFloat(inputValue));
    setInputValue(0);
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        setInputValue(firstNumber + parseFloat(inputValue));

        break;
      case "-":
        setInputValue(firstNumber - parseFloat(inputValue));
        break;
      case "*":
        setInputValue(firstNumber * parseFloat(inputValue));
        break;
      case "/":
        setInputValue(firstNumber / parseFloat(inputValue));
        break;
      default:
        break;
    }
  };

  return (
    <S.Container theme={selectedTheme}>
      <S.CalculatorContainer>
        <Theme onChangeTheme={setSelectedTheme} theme={selectedTheme} />
        <S.Input
          theme={selectedTheme}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled
        />
        <S.InteractionBox theme={selectedTheme}>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={7}
          >
            7
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={8}
          >
            8
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={9}
          >
            9
          </S.NormalButton>
          <S.DelButton theme={selectedTheme} onClick={del}>
            Del
          </S.DelButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={4}
          >
            4
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={5}
          >
            5
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={6}
          >
            6
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={() => defineOperator("+")}
          >
            +
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={1}
          >
            1
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={2}
          >
            2
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={3}
          >
            3
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={() => defineOperator("-")}
          >
            -
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value="."
          >
            .
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={showOnScreen}
            value={0}
          >
            0
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={() => defineOperator("/")}
          >
            /
          </S.NormalButton>
          <S.NormalButton
            theme={selectedTheme}
            onClick={() => defineOperator("*")}
          >
            x
          </S.NormalButton>
          <S.ResetButton
            className="lastRow"
            theme={selectedTheme}
            onClick={reset}
          >
            Reset
          </S.ResetButton>
          <S.ResultButton
            className="lastRow"
            theme={selectedTheme}
            onClick={calculate}
          >
            =
          </S.ResultButton>
        </S.InteractionBox>
      </S.CalculatorContainer>
    </S.Container>
  );
};
export default Calculator;
