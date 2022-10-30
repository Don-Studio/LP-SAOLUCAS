import { Button } from "../Button";
import * as S from "./styles";

interface CardQRCodeProps {
  title: string;
  description: string;

  nameButton: string;
  linkQRCode: string;
  linkButton: string;
}

export function CardQRCode({
  title,
  description,
  nameButton,
  linkQRCode,
  linkButton,
}: CardQRCodeProps) {
  return (
    <S.Container>
      <div className="textTitle">
        <h4>{title}</h4>
        <h2>{description}</h2>
      </div>
      <img className="qrcode" src={linkQRCode} alt="qrcode indivudual" />
      <Button name={nameButton} link={linkButton} />
    </S.Container>
  );
}
