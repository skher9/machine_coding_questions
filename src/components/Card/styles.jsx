import styled from "styled-components";

export const Container = styled.div`
	border: 2px solid;
	height: 150px;
	width: 250px;
	margin: 20px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
`;

export const Name = styled.h2``;

