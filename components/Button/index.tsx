import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border-radius: 20px;
    background-color: #3d3b3b;
    color: #f3eef5;
    transition: .3s all;

    &:hover {
      cursor: pointer;
      -webkit-box-shadow: 0px 8px 19px -6px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 8px 19px -6px rgba(0,0,0,0.75);
      box-shadow: 0px 8px 19px -6px rgba(0,0,0,0.75);
      transition: .3s all;
    }
  `;

export default Button;