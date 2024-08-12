import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Heading = styled.h1``;

export const ProductsContainer = styled.div`
  margin: 20px;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ProductCard = styled.span`
  height: 250px;
  padding: 20px;
  background-color: rgb(220, 220, 220);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 3px;
`;

export const ProductTitle = styled.span``;

export const PaginationContainer = styled.div`
  padding: 10px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.span`
  padding: 15px 20px;
  border: 1px solid gray;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0' : '1')};
  background-color: ${(props) => (props.selected ? 'rgb(220, 220, 220)' : 'transparent')};
`;
