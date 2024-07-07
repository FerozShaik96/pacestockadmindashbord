import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "PaceStock",
  description: "Pace Stock admin page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-full bg-light-blue ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
