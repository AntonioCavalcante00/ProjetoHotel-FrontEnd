import s from './acomodação.module.css'
export default function Acomodação() {
    return (
        <div className={s.Container}>
            <div className={s.ContainerTitle}>
                <h1 className={s.Welcome}>Bem-vindo ao</h1>
                <h1 className={s.Title}>Hotel Urbano</h1>
                <h2 className={s.SubTitle}>Resort & Spa Hotel</h2>
            </div>
        </div>
    )
}
