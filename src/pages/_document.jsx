import Document, { Html, Head, Main, NextScript } from 'next/document';  //TUdo que eu colocar nessa página só executa uma vez;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}