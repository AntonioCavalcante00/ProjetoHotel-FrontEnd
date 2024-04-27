import s from './register.module.css'

import logo from '../../assets/public/logos/logo4.png';
import { Formulary } from '../../components/layout/formulary';

export default function Register() {
    return (
        <>
            <div className={s.MainContainer}>
                <div className={s.Container}>
                    <div className={s.ContainerLogo}>
                        <img className={s.Logo} src={logo}></img>
                    </div>
                    <div className={s.Titles}>
                        <span>Crie sua Conta</span>
                        <span>Cadastre seus Dados</span>
                    </div>
                    <Formulary />
                </div>
            </div>
        </>
    )
}