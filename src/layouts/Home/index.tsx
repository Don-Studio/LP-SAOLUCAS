import Head from "next/head";
import * as S from "./styles";

export function HomeLayout() {
  return (
    <>
      <Head>
        <title>Campeonato de League of legends São Lucas Ji-Paraná</title>
      </Head>

      <S.Container>
        <h1>Hello Word!</h1>
      </S.Container>
    </>
  );
}
