import React from "react";
import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";

const Container = styled.header`
  height: 70px;
  width: 100%;
  background-color: white;
  display: flex;
  font-family: CustomFont;
  font-weight: 900;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.h2`
  margin-right: 60px;
  margin-left: 30px;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
`
const Nav = styled.nav`
  margin-right: 25px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    color: black;
  }
`
const Github = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 10px;
`
const Hold = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 3px;
  background-color: #bebebe;
  font-size: 13px;
`
const Icon = styled.div`
  font-size: 15px;
`
const Text = styled.div``;

const Header: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Logo</Logo>
          <Navigation>
            <Nav>Introductions</Nav>
            <Nav>Foundations</Nav>
            <Nav>Components</Nav>
            <Nav>Patterns</Nav>
            <Nav>Resources</Nav>
          </Navigation>
        </Wrapper>
        <Github>
          <Hold>
            <Icon>
              <AiFillGithub />
            </Icon>
            <Text>Start</Text>
          </Hold>
          <Hold>
            <Text>Hello</Text>
          </Hold>
        </Github>
      </Container>
    </div>
  );
};
export default Header;
