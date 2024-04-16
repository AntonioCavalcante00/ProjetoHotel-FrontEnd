import { NavLink } from 'react-router-dom';

import s from './header.module.css';
import logo from '../../assets/public/logo4.png';

import Offcanvas from '../layout/offcanvas';

import Account from '../layout/account'


export default function Header() {

    return (
        <>
            <header>
                <div className={s.MainContainer}>
                    <div className={s.Container}>
                        <div className={s.ToggleMenu}>
                            <button className={s.ButtonMenu}>
                                <Offcanvas />
                            </button>
                        </div>
                        <div className={s.Logo}>
                            <NavLink to='/'><img src={logo}></img></NavLink>
                        </div>
                        <div className={s.Buttons}>
                            <NavLink to='/' className={s.Nav}>
                                Inicio
                            </NavLink>
                            <NavLink to='/acomodacao' className={s.Nav}>
                                Acomodações
                            </NavLink>
                            <NavLink reloadDocument to='/pacotes' className={s.Nav}>
                                Pacotes
                            </NavLink>
                            <NavLink to='/sobre' className={s.Nav}>
                                Sobre
                            </NavLink>
                            <NavLink to='/fale-conosco' className={s.Nav}>
                                Fale Conosco
                            </NavLink>
                            <NavLink to='' className={s.Nav}>
                                <Account AccountSignIn='Iniciar Sessão' AccontSignUp='Criar Uma Conta' />
                            </NavLink>
                            <NavLink to='/reservar' className={s.NavButtonReserve}>
                                Reservar
                            </NavLink>
                        </div>
                    </div>
                </div >
            </header>
        </>
    )
} 