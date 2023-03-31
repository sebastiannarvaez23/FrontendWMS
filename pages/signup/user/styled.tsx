import styled from "styled-components";
import ContainFirstLevel from "../../../components/ContainFirstLevel";
import Input from "../../../components/_elements/Input";
import Button from "../../../components/_elements/Button";

export const ExtContainFirstLevel = styled(ContainFirstLevel)`
    grid-template-rows: 12vh 58vh 10vh;
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

export const ExtInput = styled(Input)`
    width: 65%;
    height: 35px;
    margin-top: 8px;
  `;

export const ExtButton = styled(Button)`
    width: 50%;
    height: 35px;
    margin-top: 16px;
  `;