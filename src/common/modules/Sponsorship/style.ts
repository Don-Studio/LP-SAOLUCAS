import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #000;

  padding: 1rem 0.05rem;
`;

export const Content = styled.div`
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;

  .subtitle {
    width: fit-content;
    color: ${(props) => props.theme.color.text};
    text-transform: uppercase;
    font-weight: 600;

    @media screen and (max-width: 769px) {
      font-size: 1.6rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.6rem;
    }
  }

  .boxImg {
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;

    img {
      max-width: 12.5rem;
      max-height: 84.5rem;
      @media screen and (max-width: 769px) {
        width: 13.3%;
      }

      @media screen and (max-width: 500px) {
        width: 20%;
      }
    }
  }
`;
