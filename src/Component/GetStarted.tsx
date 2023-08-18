import React from "react";
import styled from "@emotion/styled";
// import Image from "../assets/get 1.png"
// import Image1 from "../assets/get2.png"


interface Iprops {
  icon: any;
  title: string;
  text: string;
  write: string;
}
const Container = styled.section`
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H2 = styled.h4``;

const H3 = styled.h4``;

const Box = styled.div``;

const P = styled.p`
  width: 300px;
`;

export const Get: React.FC<Iprops> = ({ title, text, write,  }) => {
  return (
    <Box>
      <H2>{title}</H2>
      <P>{text}</P>
      <H3>{write}</H3>
    </Box>
  );
};

export const GetStarted = () => {
  const title1: string = "Installation";

  const title2: string = "What's new";

  const text1: string = "Learn how to install the evergreen-ui package";
  const text2: string = "Check out the latest changes and updates";

  const write1: string = "Vist installation page";
  const write2: string = "Read latest updates";

  return (
    <Container>
      <h3>Get Started</h3>
      <Wrapper>
        <div>
          <Get title={title1} text={text1} write={write1} />
        </div>
        icon=""
        <div>
        <Get title={title2} text={text2} write={write2}/>
        </div>
         icon="" 
      </Wrapper>
    </Container>
  );
};

export default GetStarted;
