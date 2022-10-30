import { NavbarMobilie } from "@/common/modules/NavbarMobile";
import { useState } from "react";
import * as S from "./style";

interface NavBarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function NavBar({ isOpen, toggle }: NavBarProps) {
  return (
    <S.Container className="content">
      <div className="boxNavbar">
        <div className="boxImg">
          <img src="/img/logoFaculdade.png" alt="logo são lucas" />
        </div>
        <div className="boxA">
          <S.A href="#">Regras</S.A>
          <S.A href="#">Cronograma</S.A>
          <S.A href="#">Contact Us</S.A>
        </div>
        <span className="barMobile">
          <NavbarMobilie isOpen={isOpen} toggle={toggle} />
        </span>
      </div>
    </S.Container>
  );
}
