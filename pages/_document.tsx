import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='icon' href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta charSet="UTF-8" />
                <meta name="author" content="ankit628792" />
            
                <meta name='theme-color' content='#f22952' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Montez&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
                <script src='/gsap.min.js' integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" />
                <script src="/TweenMax.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}