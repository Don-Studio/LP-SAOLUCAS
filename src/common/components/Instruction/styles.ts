import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/img/caitlyn.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: 100% 100%; */

  @media screen and (min-width: 767px) {
  }

  @media screen and (min-width: 1024px) {
    height: 83.3rem;
  }
`;

export const Content = styled.div`
  padding: 2.5rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color.title};
  padding-inline: 2rem;
  width: 100%;

  .description {
    color: ${(props) => props.theme.color.text};
    font-size: 1.6rem;
    line-height: 150%;
    font-weight: 500;

    margin-top: 2rem;
  }

  .boxButtons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    margin-top: 2rem;

    @media screen and (min-width: 767px) {
    }
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .box {
      width: 40%;
    }
  }
`;
