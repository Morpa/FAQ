import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap"
            rel="stylesheet"
          />
          {/* <link
            rel="preload"
            href="/fonts/poppins-v12-latin-300.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/poppins-v12-latin-regular.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/poppins-v12-latin-600.woff2"
            as="font"
            type="font/woff2"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
