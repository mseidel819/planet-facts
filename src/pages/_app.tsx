import NavBar from "../components/nav-bar/nav-bar.component";

import type { AppProps } from "next/app";

import { Antonio } from "next/font/google";
import { League_Spartan } from "next/font/google";
import "../styles/globals.scss";

const antonio = Antonio({
  variable: "--header-font",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const leagueSpartan = League_Spartan({
  variable: "--body-font",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${antonio.variable}  ${leagueSpartan.variable}`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
