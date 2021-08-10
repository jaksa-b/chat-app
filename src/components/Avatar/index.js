import React from "react";
import { Wrapper, Image, Active } from "./styles";

const Avatar = ({ src, active }) => {
  return (
    <Wrapper>
      <Image src={src} />
      <Active active={active} />
    </Wrapper>
  );
};

export default Avatar;
