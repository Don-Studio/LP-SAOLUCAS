import { Button } from "@/common/modules/Button";
import * as S from "./style";

export function BannerAshe() {
  return (
    <S.Container>
      <S.Content className="content">
        <div className="description">
          <div className="img">
            <img src="/img/verificado.png" alt="verificado" />
          </div>
          <p>1° Campeonato de League of Legends - UNISL 2022</p>
        </div>
        <h1 className="title">Liga das lendas</h1>

        <p className="info">
          Sejam bem-vindos a primeira Copa de{" "}
          <span className="lol">League Of Legends</span> da{" "}
          <a href={"#"}>@sistemasdeinformacaosaoluca</a> em parceria com a{" "}
          <a href="#">@saolucasjipa</a>. Inscrições no botão abaixo.
        </p>

        <div className="boxButton">
          <Button name="Inscreva-se" className={""} link="#" />
        </div>
      </S.Content>
    </S.Container>
  );
}
