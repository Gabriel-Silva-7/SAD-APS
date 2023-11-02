import React from "react";
import logo from '../../../../assets/newlogo.png'
import * as S from './styles'

const Logo = () => {
  return (
    <S.logoContainer href="/">
      <S.logoIcon>
        <img src={logo} alt="logo" style={{width: 80, height: 40}}/>
      </S.logoIcon>
    </S.logoContainer>
  )
}

export default Logo