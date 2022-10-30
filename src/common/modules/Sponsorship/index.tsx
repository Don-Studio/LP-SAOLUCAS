import * as S from './style';


export function Sponsorship () {
  return (
    <S.Container>
      <S.Content>

      <h3 className="subtitle"><i>patrocínio</i></h3>
      <div className="boxImg">
        <img src="/img/protech.png" alt="protech" className="protech" />
        <img src="/img/delca.png" alt="delca" className="protech" />
        <img src="/img/donstudio.png" alt="donstudio" className="protech" />
      </div>
      </S.Content>
    </S.Container>
  )
}