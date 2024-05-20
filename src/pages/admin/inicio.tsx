import s from './inicio.module.css'

import { FaHome, FaUser } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoBed } from "react-icons/io5";
import { IoCalendarSharp } from "react-icons/io5";




import CardInfos from "../../components/layout/dashboard/cardInfos";

export default function inicio() {
    return (
        <div className={s.cardContainerMain}>
            <div className={s.cardContainer}>
                <div className={s.cardHeader}>
                    <div className={s.GroupInfo}>
                        <FaHome className={s.icon} />
                        <h2>Inicio</h2>
                    </div>
                </div>
                <div className={s.Cards}>
                    <CardInfos Title='Funcionários' Number='XXX' Icon={<BsSuitcaseLgFill />} />
                    <CardInfos Title='Quartos' Number='XXX' Icon={<IoBed />} />
                    <CardInfos Title='Clientes' Number='XXX' Icon={<FaUser />} />
                    <CardInfos Title='Reservas' Number='XXX' Icon={<IoCalendarSharp />} />
                </div>
            </div>
        </div>
    )
}