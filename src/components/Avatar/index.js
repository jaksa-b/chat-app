import React from "react";
import { Wrapper, Image, Active } from "./styles";

const Avatar = ({ src, alt, active }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} data-testid="image" />
      <Active active={active} data-testid="isOnline" />
    </Wrapper>
  );
};

export default Avatar;
