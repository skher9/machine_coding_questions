import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const Header = styled.div`
  margin-left: 10px;
`;

export const Title = styled.h1``;

export const Table = styled.table`
  border: 3px solid;
  align-items: center;
  margin-top: 40px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.7);
`;

export const Tbody = styled.tbody``;

export const TR = styled.tr``;

export const TD = styled.td``;

export const Button = styled.button`
  height: 100px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  font-size: 50px;
  border: 2px solid black;
  background-color: transparent;
`;

export const ResetButton = styled.button`
  background-color: transparent;
  border: 2px solid;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  font-size: large;
  cursor: pointer;
  margin-left: 100px;
`;

export const WinnerAnnouncemnt = styled.h2`
  margin-top: 50px;
`;
