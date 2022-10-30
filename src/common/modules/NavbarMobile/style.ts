import styled from "styled-components";
import { NavbarMobileProps } from ".";

export const Container = styled.div``;

export const Wrapper = styled.div<NavbarMobileProps>`
  position: absolute;
  z-index: 99;
  right: 0;
  top: 0;

  padding: 1.5rem;

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  /* opacity: 95%; */
  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(18px);
  transition: all 300ms ease-in-out;

  width: 100vw;
  height: 100vh;

  .icon {
    float: right;
    right: 0;
  }

  svg {
    transition: all 300ms ease-in-out;
    transform: translateY(${(props) => (props.isOpen ? "100%" : "0%")});
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
`;

export const Icon = styled.div``;

export const MenuWrapper = styled.div<NavbarMobileProps>`
  width: 100;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  a {
    font-size: 2.6rem;
    font-weight: 500;
    color: ${(props) => props.theme.color.text};

    transition: all 300ms ease-in-out;
    transform: translateY(${(props) => (props.isOpen ? "100%" : "0%")});
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
`;

export const MobileIcon = styled.div<NavbarMobileProps>``;

export const Li = styled.li``;
