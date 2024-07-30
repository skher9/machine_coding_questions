import React, { useRef, useState } from "react";
import Confetti from "react-confetti";
import {
  Container,
  Wrapper,
  Title,
  ResetButton,
  Table,
  Tbody,
  TR,
  TD,
  Button,
  WinnerAnnouncemnt,
  Header,
} from "./style";

const Home = () => {
  const [matrix, setmatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [winner, setWinner] = useState(null);

  const count = useRef(null);

  function checkWinner() {
    // Row
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][0] !== null
      ) {
        setWinner(matrix[i][0] + " is the Winner!!!!!!!!!!!");
      }
    }

    // Column
    for (let j = 0; j < 3; j++) {
      if (
        matrix[0][j] === matrix[1][j] &&
        matrix[1][j] === matrix[2][j] &&
        matrix[0][j] !== null
      ) {
        setWinner(matrix[0][j] + " is the Winner!!!!!!!!!!!");
      }
    }

    // Diagonal
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[0][0] !== null
    ) {
      setWinner(matrix[0][0] + " is the Winner!!!!!!!!!!!");
    }

    if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[0][2] !== null
    ) {
      setWinner(matrix[0][2] + " is the Winner!!!!!!!!!!!");
    }
  }

  const handleClick = (rowIndex, collIndex) => {
    count.current = count.current + 1;
    let XO = "";

    if (count.current % 2 === 0) {
      XO = "O";
    } else if (count.current % 2 !== 0) {
      XO = "X";
    }

    matrix[rowIndex][collIndex] = XO;
    setmatrix([...matrix]);
    checkWinner();
  };

  const handleResetClick = () => {
    setmatrix([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setWinner(null);
  };

  return (
    <Container>
      {winner && <Confetti />}
      <Wrapper>
        <Header>
          <Title>Tic Tac Toe Game!</Title>
          <ResetButton onClick={() => handleResetClick()}>Reset</ResetButton>
        </Header>
        <Table>
          <Tbody>
            {matrix.map((row, rowIndex) => (
              <TR key={rowIndex}>
                {row.map((coll, collIndex) => (
                  <TD>
                    <Button
                      onClick={(e) => {
                        handleClick(rowIndex, collIndex);
                      }}
                    >
                      {matrix[rowIndex][collIndex]}
                    </Button>
                  </TD>
                ))}
              </TR>
            ))}
          </Tbody>
        </Table>
        <WinnerAnnouncemnt>{winner}</WinnerAnnouncemnt>
      </Wrapper>
    </Container>
  );
};

export default Home;
