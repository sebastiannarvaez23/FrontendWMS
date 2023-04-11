import React from 'react';
import {LinkSpan, ContainFooter} from './styled';


const FooterAuth = () => {
  return (
    <ContainFooter>
      <LinkSpan>Más información</LinkSpan> • <LinkSpan>API</LinkSpan> • <LinkSpan>Migraciones</LinkSpan> • <LinkSpan>Integraciones</LinkSpan> • <LinkSpan>Sugerencias y Recomendaciones</LinkSpan> • <LinkSpan>Privacidad y Seguridad</LinkSpan>
    </ContainFooter>
  )
}

export default FooterAuth;