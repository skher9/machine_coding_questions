import React, { useState } from "react";
import { Container,BoxContainer,Box,Header,Note } from "./style";

const GridLights = () => {
  const [place, setPlace] = useState(0);
  const [boxArray, setBoxArray] = useState([
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
  ]);

  const handleBoxClick = (e, index) => {
    if (place === 5) {
      const newArray = [...boxArray];
      newArray[index].isColored = true;
      newArray[index].position = place;
      setPlace(place + 1);
      setBoxArray(newArray);
      resetButton();
    } else {
      const newArray = [...boxArray];
      newArray[index].isColored = true;
      newArray[index].position = place;
      setPlace(place + 1);
      setBoxArray(newArray);
    }
  };

  const resetButton = () => {
    console.log("reset Called");
    let count = 0;

    const intervalId = setInterval(() => {
      const newArray = [...boxArray];
      // eslint-disable-next-line array-callback-return
      newArray.map((ele) => {
        if (ele.position === count) {
          ele.isColored = false;
          ele.position = null;
        }
      });
      setBoxArray(newArray);

      count++;

      if (count === 6) {
        setPlace(0);
        clearInterval(intervalId);
      }
    }, 2000);
  };

  return (
    <Container>
      <Header>Grid Lights</Header>
      <BoxContainer>
        {boxArray.map((ele, index) => {
          return (
            <Box
              style={{ backgroundColor: ele.isColored ? "green" : "initial" }}
              onClick={(e) => handleBoxClick(e, index)}
            ></Box>
          );
        })}
      </BoxContainer>
      <Note><b>Note:</b>The grid color will go back to default in the same sequence it was clicked.</Note>
    </Container>
  );
};

export default GridLights;
