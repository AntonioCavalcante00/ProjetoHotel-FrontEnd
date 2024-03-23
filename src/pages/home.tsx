import Slide from '../components/layout/slider'

import s from './home.module.css'

export default function Home() {
    return (
        <div className={s.Container}>
            <div className={s.ContainerTitle}>
                <h1 className={s.Welcome}>Bem-vindo ao</h1>
                <h1 className={s.Title}>Hotel Urbano</h1>
                <h2 className={s.SubTitle}>Resort & Spa Hotel</h2>
            </div>
            <Slide />
        </div>
    )
}
