import Document, {Head, Html, Main, NextScript, DocumentContext} from "next/document";
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document {
/*
* Prevents FOUC on load. Styles are added only once on the front side
* without creating a custom document
* */
    static async getInitialProps(context: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = context.renderPage
        try {
            /* rendering runs synchronously */
            context.renderPage = () =>
                originalRenderPage({
                    /* wrap the react app tree */
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            // returns the initial props of the parent
            const initialProps = await Document.getInitialProps(context)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
            <Head>
                <link rel="preload" href="/fonts/Candara-Regular.ttf" as="font" crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/Candara-Bold.ttf" as="font" crossOrigin="anonymous"/>
            </Head>
            <body>
            {/** Firefox hack for avoiding FOUC */}
            <script>0</script>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        );
    }
}

export default MyDocument;