import styled from "styled-components";

const Col = styled.div`
  margin: 0px 5px;
  flex-grow: ${(props) => props.grow};
`;

export default Col;
