import NavBar from "../components/nav-bar/nav-bar.component";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Antonio } from "next/font/google";
import { League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${antonio.className}  ${leagueSpartan.className}`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
