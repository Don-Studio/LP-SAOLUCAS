import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img/ashe.png");

  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 1366px) {
    height: 80.3rem;
  }

  @media screen and (max-width: 1025px) {
    /* height:50.8rem ; */
  }

  @media screen and (max-width: 500px) {
    background-size: 150% 100%;
    background-position: 50%;
  }
`;

export const Content = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 767px) {
    width: 80%;
    margin-inline: 4.1rem;
  }

  @media screen and (min-width: 1366px) {
    width: 100%;
    margin-inline: 0;
  }

  .description {
    margin-top: 3.8rem;

    display: flex;
    align-items: center;

    p {
      color: ${(props) => props.theme.color.text};
      font-size: 1.2rem;
    }

    .img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      img {
        width: 100%;
      }
    }
  }

  .title {
    margin-top: 1rem;
    color: ${(props) => props.theme.color.title};
    line-height: 4rem;
    letter-spacing: 0.02rem;
    font-size: 2.8rem;
    text-transform: uppercase;
  }

  .info {
    text-align: justify;
    margin-top: 2.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 120%;

    color: ${(props) => props.theme.color.text};

    .lol,
    a {
      color: #00fafb;
    }

    a {
      text-decoration: underline;
    }

    @media screen and (max-width: 769px) {
      width: 60%;
    }

    @media screen and (max-width: 500px) {
      width: 80%;
    }

    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }

  .boxButton {
    margin-top: 5.7rem;
  }

  @media screen and (max-width: 769px) {
    width: 90%;
    padding-top: 7rem;
  }
  @media screen and (max-width: 500px) {
    /* padding-inline: 2rem; */
  }

  @media screen and (min-width: 1024px) {
    padding-top: 7.8rem;
    padding-bottom: 10rem;

    .description {
      p {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
    .title {
      font-size: 5.8rem;
      margin: 4.5rem 0;
    }

    .info {
      font-size: 2.2rem;
      line-height: 150%;
    }

    .boxButton {
      button {
        padding: 2.4rem 5.4rem;
        border-radius: 3.5rem;
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }
`;
