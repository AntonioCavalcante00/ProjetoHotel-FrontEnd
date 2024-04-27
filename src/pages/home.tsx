import CardPromocao from '../components/layout/cardpromocao'
import Slide from '../components/layout/slider'

import banner1 from '../assets/public/slider/banner1.png'
import banner2 from '../assets/public/slider/banner2.png'
import banner3 from '../assets/public/slider/banner3.png'

import imgcard1 from '../assets/public/img_promocao/img1.jpg'

import s from './home.module.css'

export default function Home() {
    return (
        <div className={s.Container}>
            <div className={s.ContainerTitle}>
                <h1 className={s.Welcome}>Bem-vindo ao</h1>
                <h1 className={s.Title}>Hotel Urbano</h1>
                <h2 className={s.SubTitle}>Resort & Spa Hotel</h2>
            </div>
            <div>
                <Slide Banners={[banner1, banner2, banner3]} />
            </div>
            <div>
                <CardPromocao Url='/pacotes' Title='Diária de 32 Horas' Description='Café da manha cortesia no restaurante; 
                Livre acesso a área de lazer fitness do hotel; 
                Cortesia para crianças de até 6 anos incompletos no mesmo quarto que os pais; Internet cortesia' Price='395,00' imageUrl={imgcard1} />
            </div>
        </div>
    )
}
