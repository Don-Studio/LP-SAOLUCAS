import * as S from "./styles";

export function Description() {
  return (
    <S.Container>
      <S.Content className="content">
        <h3>Descrição do Evento</h3>

        <div className="contentDescription">
          <p className="description">
            A primeira copa de League Of Legends organizada pelo curso de
            Sistemas de Informações. Será presencial e contará com transmissão.
            16 times disputando a premiação de R$ 500,00 reais. O evento contará
            com transmissão e certificação.
          </p>
          <div className="boxLogo">
            <img src="/img/ligadaslendas.svg" alt="liga das lendas" />
          </div>
          <p className="subTitle">1° CAMPEONATO DE LEAGUE OF LEGENDS UNISL</p>
          <p className="subDescription">5 e 12 de Novembro - 14h</p>
        </div>
      </S.Content>
    </S.Container>
  );
}
