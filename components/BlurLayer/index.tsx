import React from 'react';
import styled from "styled-components";

const BlurLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin: 0;
  backdrop-filter: blur(5px);
`;

export default BlurLayer;