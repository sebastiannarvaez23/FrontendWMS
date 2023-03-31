import React from 'react';
import styled from "styled-components";

const style = styled.div`
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

const FooterAuth = () => {
  return (
    <div>
      <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Sugerencias y Recomendaciones</span> • <span>Privacidad y Seguridad</span>
    </div>
  )
}

export default FooterAuth;