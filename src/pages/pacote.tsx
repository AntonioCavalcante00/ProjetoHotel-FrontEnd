import CardPacote from "../components/layout/cardpacote"

import casamento from '../assets/public/pacotes/casados.png'

import s from './pacote.module.css'

export default function pacote() {
    return (
        <div className={s.MainContaienr}>
            <div className={s.Container}>
                <div className={s.Wallpaper}>
                    <img></img>
                    <h1></h1>
                </div>
                <div>
                    <CardPacote imageUrl={casamento} title="Pacote Núpcias" describtion="A Noite de Núpcias é o ponto de 
                partida para uma vida cheia de encantamento, onde cada dia é uma celebração de amor. Na Suíte Premium com hidromassagem, 
                encante-se com os detalhes, todos pensados para eternizar a data. Na manhã seguinte o café da manhã é 
                servido no conforto da suíte, e a permanência no hotel se estende até 18h. Que a felicidade,
                 agora apenas começando, se estenda para sempre Blue Tree Towers Joinville" />
                </div >
            </div>
        </div>
    )
}