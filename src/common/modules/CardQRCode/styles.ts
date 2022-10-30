import styled from "styled-components";

export const Container = styled.div`
  max-width: 30rem;
  max-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background: rgba(255, 155, 255, 0.09);
  padding: 0.75rem;
  border-radius: 3rem;

  h4,
  h2 {
    color: ${(props) => props.theme.color.text};
  }

  .textTitle {
    text-align: center;
    h4 {
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }

  .qrcode {
    width: 20.9rem;
    height: 20.9rem;
    border-radius: 5rem;
  }
`;
