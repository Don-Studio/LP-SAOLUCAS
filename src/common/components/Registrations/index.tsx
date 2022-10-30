import { CardQRCode } from "@/common/modules/CardQRCode";
import * as S from "./styles";

export function Registration() {
  return (
    <S.Container>
      <S.Content className="content">
        <h3 className="Title">Inscrições Abertas</h3>
        <div className="boxText">
          <p>Nesse campeonato você pode inscrever seu time ou individual.</p>
          <p>
            Os individuais vão ser gerenciados pelo organizadores do evento para
            gerenciar criação ou adição em times.
          </p>
        </div>
        <div className="boxCards">
          <CardQRCode
            title={"Inscrição única"}
            description={"Individual"}
            nameButton={"Inscreva-se"}
            linkQRCode={"/img/QR-Form-Individual.png"}
            linkButton={"#"}
          />
          <CardQRCode
            title={"Inscrição grupo"}
            description={"5 pessoas"}
            nameButton={"Inscreva-se"}
            linkQRCode={"/img/QR-Form-Time.png"}
            linkButton={"#"}
          />
        </div>
      </S.Content>
    </S.Container>
  );
}
