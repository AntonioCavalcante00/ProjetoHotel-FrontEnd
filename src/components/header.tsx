import { NavLink } from 'react-router-dom'

import s from './header.module.css'
import logo from '../../public/logo.png'

export default function Header() {
    return (
        <div className={s.MainContainer}>
            <div className={s.Container}>
                <div className={s.Logo}>
                    <NavLink to='/'><img src={logo}></img></NavLink>
                </div>
                <div className={s.Buttons}>
                    <NavLink to='/hospedagem' className={s.Nav}>
                        Hospedagem
                    </NavLink>
                    <NavLink to='/passeios' className={s.Nav}>
                        Passeios</NavLink>
                    <NavLink to='/preços' className={s.Nav}>
                        Preços</NavLink>
                    <NavLink to='/resort' className={s.Nav}>
                        Resort</NavLink>
                    <NavLink to='/informações' className={s.Nav}>
                        Informações</NavLink>
                </div>
            </div>
        </div>
    )
} 