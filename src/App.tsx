import { Outlet } from "react-router-dom"

import Header from "./components/navbar/header"

import s from './App.module.css'


export default function App() {
  return (
    <>
      <Header />
      <div className={s.Container}>
        <Outlet />
      </div>
    </>
  )
}