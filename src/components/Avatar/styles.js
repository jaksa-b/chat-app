import styled from "styled-components";

const Wrapper = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

const Active = styled.span`
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 100%;
  bottom: 4px;
  right: 2px;
  border: 1px solid white;
  background: ${(props) => (props.active ? "green" : "greey")};
`;

export { Wrapper, Image, Active };
