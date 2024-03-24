import { NavLink } from 'react-router-dom'

import s from './header.module.css'
import logo from '../../public/logo.png'
import { IoMdMenu } from "react-icons/io";


export default function Header() {

    return (
        <>
            <header>
                <div className={s.MainContainer}>
                    <div className={s.Container}>
                        <div className={s.ToggleMenu}>
                            <button className={s.ButtonMenu}>
                                <IoMdMenu className={s.IconMenu} />
                            </button>
                        </div>
                        <div className={s.Logo}>
                            <NavLink to='/'><img src={logo}></img></NavLink>
                        </div>
                        <div className={s.Buttons}>
                            <NavLink to='/hospedagem' className={s.Nav}>
                                Hospedagem
                            </NavLink>
                            <NavLink to='/passeios' className={s.Nav}>
                                Passeios</NavLink>
                            <NavLink reloadDocument to='/preços' className={s.Nav}>
                                Preços</NavLink>
                            <NavLink to='/resort' className={s.Nav}>
                                Resort</NavLink>
                            <NavLink to='/informações' className={s.Nav}>
                                Informações</NavLink>

                        </div>
                    </div>
                </div >
            </header>
        </>
    )
} 