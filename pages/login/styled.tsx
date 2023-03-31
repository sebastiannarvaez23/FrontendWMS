import styled from "styled-components";
import ContainFirstLevel from "../../components/ContainFirstLevel";

export const ExtContainFirstLevel = styled(ContainFirstLevel)`
    grid-template-rows: 17vh 35vh 10vh;
    width: 45%;
    height: 75vh;
    padding: 40px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 50px;
    text-align: center;

    -webkit-box-shadow: -2px 1px 26px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 1px 26px -4px rgba(0,0,0,0.75);
    box-shadow: -2px 1px 26px -4px rgba(0,0,0,0.75);
  `;

export const Title = styled.h1`
    font-size: 40px;
  `;