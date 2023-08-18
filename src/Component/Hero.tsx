import React from "react";
import styled from "@emotion/styled";
import image from "../assets/image.png";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: CustomFont;
  font-weight: bolder;
`;

const Left = styled.div`
  margin-right: 30px;

  h4 {
    font-size: 30px;
    margin-bottom: 10px;
    line-height: 40px;
  }
`;
const Right = styled.div``;

const Img = styled.img``;
const Para = styled.p`
  width: 450px;
`;

const Hero: React.FC = () => {
  return (
    <div>
      <Container>
        <Left>
          <h4>
            Meet Evergreen, <br /> Segments design system
          </h4>
          <Para>
            Evergreen is a React UI framework for building ambitious product on
            the web. Brought to you by segment.
          </Para>
          <Button />
        </Left>
        <Right>
          <Img src={image} />
        </Right>
      </Container>
    </div>
  );
};

export default Hero;
