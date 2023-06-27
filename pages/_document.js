import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
        rel="preload" 
        href="/fonts/DMSans-Regular.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
         <link 
        rel="preload" 
        href="/fonts/DMSans-Medium.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
         <link 
        rel="preload" 
        href="/fonts/DMSans-Bold.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
         <link 
        rel="preload" 
        href="/fonts/Poppins-Regular.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
         <link 
        rel="preload" 
        href="/fonts/Poppins-Medium.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
         <link 
        rel="preload" 
        href="/fonts/Poppins-Bold.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="/fonts/Lora-Regular.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="/fonts/Lora-Medium.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="/fonts/Lora-Bold.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="\fonts\SignikaNegative-Regular.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="/fonts/SignikaNegative-Medium.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
          <link 
        rel="preload" 
        href="/fonts/SignikaNegative-Bold.ttf" 
        as='font'
        crossOrigin='anonymous'
        />
       
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
