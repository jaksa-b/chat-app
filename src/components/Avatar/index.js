import React from "react";
import { Wrapper, Image, Active } from "./styles";

const Avatar = ({ src, alt, active }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} dataTestId="image" />
      <Active active={active} dataTestId="isOnline" />
    </Wrapper>
  );
};

export default Avatar;
