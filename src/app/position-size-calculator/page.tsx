import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Position Size Calculator | Free Trading Tool — PosSize",
  description:
    "Free position size calculator for traders. Calculate the optimal number of shares based on your account balance, risk percentage, entry price and stop loss.",
  keywords: [
    "position size calculator",
    "trading position size",
    "risk management calculator",
    "stock position calculator",
    "forex position size",
  ],
  openGraph: {
    title: "Position Size Calculator — PosSize",
    description:
      "Calculate the optimal position size based on your account size and risk tolerance. Free trading tool.",
    url: "https://www.possize.com/position-size-calculator",
    siteName: "PosSize",
    type: "website",
  },
};

export default function Page() {
  return <Calculator />;
}