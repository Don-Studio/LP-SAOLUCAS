import { List, X } from "phosphor-react";
import * as S from "./style";

export type NavbarMobileProps = {
  isOpen: boolean;
  toggle?: () => void;
};

export function NavbarMobilie({ isOpen, toggle }: NavbarMobileProps) {
  return (
    <S.Container>
      <S.Wrapper isOpen={isOpen} onClick={toggle}>
        <X
          className="icon"
          size={32}
          weight="bold"
          color="white"
          onClick={toggle}
        />
        {/* <S.Icon onClick={toggle}>
            <X size={32} weight="bold" onClick={toggle}/>
          </S.Icon> */}

        <S.MenuWrapper isOpen={isOpen}>
          <a href="#">Regras</a>
          <a href="#">Cronograma</a>
          <a href="https://netfamilia.diegodev.com.br/">Contact Us</a>
        </S.MenuWrapper>
      </S.Wrapper>
      <S.MobileIcon onClick={toggle} isOpen={isOpen}>
        <List size="32" weight="bold" color="white" />
      </S.MobileIcon>
    </S.Container>
  );
}
