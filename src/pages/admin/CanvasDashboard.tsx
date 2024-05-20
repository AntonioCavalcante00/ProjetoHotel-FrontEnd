import { NavLink } from "react-router-dom";

import { IoBedOutline } from "react-icons/io5";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoMenuOutline, IoHelp } from "react-icons/io5";

// import { MdCalendarMonth } from "react-icons/md"; *Calendeario

import { IoHomeOutline } from "react-icons/io5"; //Icon Inicio


import { CiSettings } from "react-icons/ci"; //Icon Configurações
import { IoExitOutline } from "react-icons/io5"; //Icon Sair



import img from '../../assets/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
import logo from '../../assets/public/logos/logo4.png'

import s from './CanvasDashboard.module.css'

export default function CanvasDashboard() {
    return (
        <div className={s.container}>
            <div className={s.navigation}>
                <ul>
                    <div className={s.toggle}>
                        <IoMenuOutline className={s.icontoggle} />
                    </div>
                    <li>
                        <NavLink to='/conta/dashboard'>
                            <span className={s.icon}>
                                <IoHomeOutline />
                            </span>
                            <span className={s.title}>Inicio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/conta/dashboard/funcionarios'>
                            <span className={s.icon}>
                                <BsSuitcaseLg />
                            </span>
                            <span className={s.title}>Funcionários</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/conta/dashboard/quartos'>
                            <span className={s.icon}>
                                <IoBedOutline />
                            </span>
                            <span className={s.title}>Quartos</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span className={s.icon}>
                                <IoHelp />
                            </span>
                            <span className={s.title}>Ajuda</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span className={s.icon}>
                                <CiSettings />
                            </span>
                            <span className={s.title}>Configurações</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span className={s.icon}>
                                <IoExitOutline />
                            </span>
                            <span className={s.title}>Sair</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className={s.main}>
                <div className={s.topbar}>
                    <div className={s.logo}>
                        <img src={logo} alt="" />
                    </div>

                    <div className={s.user}>
                        <img src={img} />
                    </div>
                </div>

            </div>
        </div>
    )
}