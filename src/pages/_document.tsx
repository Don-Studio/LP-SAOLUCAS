import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="shortcut icon"
            href="./icon/iconDLsquare.svg"
            type="image/svg"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          {/* tag de SEO */}
          {/* <base href="https://www.diegodev.com.br" />
          <link rel="canonical" href="https://www.diegodev.com.br" /> */}

          {/*
          #All: Valor default, significa vazio, o robô de busca não recebe nenhuma informação.
          #Index: Os robôs de busca podem incluir a páginanormalmente.
          #Follow: Robôs podem indexar a página e ainda seguir os links para outras páginas que ela contém.
          #NoIndex:Os links podem ser seguidos, mas a página não é indexada.
          #NoFollow: A página é indexada, mas os links não são seguidos.
          #None: Os robôs podem ignorar a página.
          #NoArchive (Apenas Google): A página não é arquivada.
          */}
          <meta name="robots" content="index, follow" />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPS4GPF');
              `,
            }}
          /> */}

          {/* <meta
            name="google-site-verification"
            content="n6b0or3UqwMLa2qpy3Q_c1MvsMp5ORnoGmPnPPIW_5g"
          /> */}
        </Head>
        <body>
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MPS4GPF"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
