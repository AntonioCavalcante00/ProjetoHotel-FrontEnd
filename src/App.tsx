import { Outlet } from "react-router-dom"

import Header from "./components/navbar/header"


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}