import React from "react";
import styled from "@emotion/styled";

const But = styled.button`
 padding: 7px 20px 7px 20px;
 background-color: #2952cc;
 color: white;
 font-family: CustomFont;
 border: 1px solid silver;
 border-radius: 3px;;
 cursor: pointer;
 `;

 const Button : React.FC = () =>{
  return<But>Get Started</But>
 };

 export default Button;