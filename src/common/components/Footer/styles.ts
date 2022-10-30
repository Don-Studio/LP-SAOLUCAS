import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 20.5rem;

  background-image: url("/img/footer.png");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: 100%;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    padding-inline: 2rem;
  }

  .boxDescription {
    flex: 1;
    h2,
    p {
      color: ${(props) => props.theme.color.text};
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  a {
    color: ${(props) => props.theme.color.text};
    position: absolute;

    bottom: 0;

    padding: 2rem 0;

    font-size: 1.4rem;
  }
`;
