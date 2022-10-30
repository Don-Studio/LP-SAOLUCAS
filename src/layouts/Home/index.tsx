import { BannerAshe } from "@/common/components/BannerAshe";
import { Description } from "@/common/components/Description";
import { Footer } from "@/common/components/Footer";
import { Instruction } from "@/common/components/Instruction";
import { NavBar } from "@/common/components/NavBar/index";
import { Registration } from "@/common/components/Registrations";
import { Sponsorship } from "@/common/modules/Sponsorship";
import Head from "next/head";
import { useState } from "react";
import * as S from "./styles";

export function HomeLayout() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Head>
        <title>Campeonato de League of legends São Lucas Ji-Paraná</title>
      </Head>

      <S.Container className="container">
        <header>
          <NavBar isOpen={isOpen} toggle={toggle} />
        </header>
        {isOpen ? (
          ""
        ) : (
          <>
            <section>
              <BannerAshe />
            </section>
            <section>
              <Sponsorship />
            </section>
            <section>
              <Description />
            </section>
            <section>
              <Instruction />
            </section>
            <section>
              <Registration />
            </section>
            <Footer />
          </>
        )}
      </S.Container>
    </>
  );
}
