import "@/styles/globals.css";
import {useSession} from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
     <SessionProvider session={pageProps.session}>
      <Component {...pageProps} /> 
      </SessionProvider>
      {/* // dynamic page rendering given by next.js */}
      {/* example of dynamic route: https://www.instagram.com/amanchoudhary8755/ */}
    </>
  );
}
