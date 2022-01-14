import Document, { Html, Head, Main, NextScript,DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <body>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>
            AOS.init();
          </script>
          <Main />
          <NextScript />
         
        </body>
      </Html>
    )
  }
}

export default MyDocument