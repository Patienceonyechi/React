import React from "react";
import styled from "@emotion/styled";
import { AiFillBulb } from "react-icons/ai";
import {TiSpanner} from "react-icons/ti";
import {ImOffice} from "react-icons/im"

interface Iprops {
  icon: any
  title: string
  text: string
}
const Container = styled.section`
  background-color: white;
  padding: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H2 = styled.h4``;

const Box = styled.div``;

const IconBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: #ebf0ff;
  color: #386aff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
`;
const P = styled.p`
  width: 300px;
`;

export const CoreCard: React.FC<Iprops> = ({ icon, text, title }) => {
  return (
    <Box>
      <IconBox>{icon}</IconBox>
      <H2>{title}</H2>
      <P>{text}</P>
    </Box>
  );
};
export const CoreValue = () => {
  const title1: string = "Works out of the box";

  const title2: string = "Flexible and composable";

  const title3: string = "Enterprise-grade";

  const text1: string =
    "Evergreen contains a set of polished React components that work out of the box.";
  const text2: string =
    "Evergreen components are built on top of a React UI primitive for endless compositions.";
  const text3: string =
    "Evergreen features a UI design language for enterprise-grade web applications.";

  return (
    <Container>
      <h3>Core Value</h3>
      <Wrapper>
        <CoreCard icon={<AiFillBulb />} title={title1} text={text1} />
        <CoreCard icon={<TiSpanner />} title={title2} text={text2} />
        <CoreCard icon={<ImOffice />} title={title3} text={text3} />
      </Wrapper>
    </Container>
  );
};

export default CoreValue;
