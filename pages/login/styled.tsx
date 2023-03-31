import styled from "styled-components";
import ContainFirstLevel from "../../components/ContainFirstLevel";
import Button from "../../components/Button";
import Input from "../../components/Input";

export const ExtContainFirstLevel = styled(ContainFirstLevel)`
    grid-template-rows: 20vh 48vh 20vh;
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
    margin-bottom: 10px;
  `;

export const ExtButton = styled(Button)`
    width: 50%;
    height: 35px;
    margin-top: 4px;
  `;

export const ExtInput = styled(Input)`
    width: 65%;
    height: 35px;
    margin-top: 8px;
  `;

export const ContainCheckRememberCredential = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 20px;
  `;

export const CheckRememberCredential = styled.input`
    width: 18px;
    margin-right: 8px;
  `;