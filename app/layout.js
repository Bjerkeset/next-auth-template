import "./globals.css";
import {Inter} from "next/font/google";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import {getServerSession} from "next-auth";
import Navbar from "./components/Navbar";
import {authOptions} from "./api/auth/[...nextauth]/route";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({children}) {
  // Server rendered session data for use in components.
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToasterContext />
          <Navbar session={session} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
