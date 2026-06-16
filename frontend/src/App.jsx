import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRoute from "./Routes/AppRoute";

export default function App() {
  return (
    <>
      <SpeedInsights />
      <AppRoute />
    </>
  )
}
