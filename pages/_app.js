import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
       <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favi.png"/>
          <title>HOME | Martech Record</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
