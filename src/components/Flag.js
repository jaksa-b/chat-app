import styled from "styled-components";

const Flag = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
`;

export default Flag;
