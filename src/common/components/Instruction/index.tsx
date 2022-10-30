import { Button } from "@/common/modules/Button";
import * as S from "./styles";

export function Instruction() {
  return (
    <S.Container>
      <S.Content className="content">
        <div className="box">
          <h3 className="title">Regras e Cronogramas</h3>
          <p className="description">
            Acesse o regulamento e o cronograma dos jogos para saber mais.
          </p>
          <div className="boxButtons">
            <Button
              name={"Baixar regras"}
              className="capsLock"
              link="#"
              download
            />
            <Button
              name={"Baixar cronograma"}
              className="capsLock"
              link="#"
              download
            />
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
}
