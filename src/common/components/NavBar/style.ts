import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;

  right: 0;
  left: 0;

  @media screen and (max-width: 769px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 1.5rem;
  }

  .boxNavbar {
    width: min(144rem, 100%);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .boxA {
      display: flex;
      width: 40%;
      gap: 2rem;

      font-size: 1.6rem;
      font-weight: 500;
    }

    .boxImg {
      width: 80%;

      img {
        width: 40%;
      }

      @media screen and (max-width: 769px) {
        img {
          width: 50%;
        }
      }

      @media screen and (max-width: 500px) {
        img {
          width: 50%;
        }
      }
    }

    @media screen and (max-width: 769px) {
      padding-top: 3rem;
    }

    @media screen and (max-width: 1024px) {
      .boxA {
        display: none;
      }
    }

    @media screen and (min-width: 1024px) {
      padding-inline: 5.5rem;

      .barMobile {
        display: none;
      }
    }

    @media screen and (min-width: 144rem) {
      height: 8.8rem;
    }
  }
`;

export const A = styled.a`
  color: ${(props) => props.theme.color.text};
`;
