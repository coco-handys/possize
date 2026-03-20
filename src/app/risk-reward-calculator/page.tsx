import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Risk Reward Calculator | Free Trading Tool — PosSize",
  description:
    "Free risk/reward calculator for traders. Evaluate trade quality by calculating your risk/reward ratio and minimum win rate before entering a position.",
  keywords: [
    "risk reward calculator",
    "risk reward ratio",
    "trading risk calculator",
    "rr ratio calculator",
    "trade planning tool",
  ],
  openGraph: {
    title: "Risk Reward Calculator — PosSize",
    description:
      "Calculate your risk/reward ratio and minimum win rate. Free trading tool.",
    url: "https://www.possize.com/risk-reward-calculator",
    siteName: "PosSize",
    type: "website",
  },
};

export default function Page() {
  return <Calculator />;
}