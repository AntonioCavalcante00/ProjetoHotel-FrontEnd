import { useState } from 'react';

import { LuUser } from "react-icons/lu";

import { NavLink } from 'react-router-dom';

import s from './account.module.css'

type PropsAccount = {
    AccountSignIn?: string
    AccontSignUp?: string
}

export default function BasicMenu(props: PropsAccount) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={s.MenuAccount} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className={s.ButtonAccount}>
                    <LuUser className={s.IconAccount} />
                    <span className={s.MyAccount}>Minha Conta</span>

                </div>
            </button>
            <div className={s.DropDown}>
                <ul className={`${s.TableDropDown} dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    <NavLink to='conta/cadastra-se' className={s.NavDropDown}>
                        <li><button className={s.ButtonDropDown}>{props.AccontSignUp}</button></li>
                    </NavLink>

                    <NavLink to='conta/iniciar-sessao' className={s.NavDropDown}>
                        <li><button className={s.ButtonDropDown}>{props.AccountSignIn}</button></li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}
