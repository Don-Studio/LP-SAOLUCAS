import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/img/thresh.png");

  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: 140% 120%;
  background-position: 1rem;
  padding-bottom: 3.4rem;

  @media screen and (max-width: 500px) {
    padding-inline: 2rem;
  }

  @media screen and (min-width: 767px) {
    background-size: 100% 150%;
    background-position: 10rem;
  }
`;

export const Content = styled.div`
  padding-top: 2.5rem;

  @media screen and (min-width: 767px) {
    /* width: 50%; */
    text-align: center;
    margin-inline: 4.1rem;

    .description {
      margin-inline: auto;
      width: 50%;
    }
  }

  @media screen and (min-width: 1366px) {
    margin-inline: 0;
  }

  h3 {
    color: ${(props) => props.theme.color.title};
    font-size: 2rem;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 1024px) {
      font-size: 4.2rem;
    }
  }

  .description {
    font-size: 1.6rem;
    text-align: justify;

    color: ${(props) => props.theme.color.text};

    line-height: 150%;
  }

  .boxLogo {
    max-width: 70%;
    margin: 0.75rem 0;
    margin-inline: auto;

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }
  .subTitle,
  .subDescription {
    color: ${(props) => props.theme.color.text};

    text-align: center;
  }

  .subTitle {
    font-size: 1.2rem;
  }

  .subDescription {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
  }
`;
