import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/img/registration.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 95% 50%;
`;

export const Content = styled.div`
  padding-block: 3rem;
  padding-inline: 2rem;
  .Title {
    font-size: 2rem;
    color: ${(props) => props.theme.color.title};
    margin-bottom: 1.2rem;
  }

  .boxText {
    p {
      color: ${(props) => props.theme.color.text};
      font-size: 1.6rem;
      line-height: 150%;
      font-weight: 500;
      text-align: justify;
    }
  }

  .boxCards {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (min-width: 1200px) {
      width: 70%;
      gap: 2.5rem;

      justify-content: space-around;
    }
  }

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .Title {
      font-size: 4.2rem;
      margin: 2.5rem 0;
    }

    .boxText {
      p {
        font-size: 2rem;
      }
    }

    .boxCards {
      margin-top: 6rem;
    }
  }
`;
