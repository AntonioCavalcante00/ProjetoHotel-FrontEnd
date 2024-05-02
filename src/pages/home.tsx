import CardPromocao from '../components/layout/cardpromocao'
// import Slide from '../components/layout/slider'

// import banner1 from '../assets/public/slider/banner1.png'
// import banner2 from '../assets/public/slider/banner2.png'
// import banner3 from '../assets/public/slider/banner3.png'

import imgcard1 from '../assets/public/img_promocao/img1.jpg'
import imgcardnupicias from '../assets/public/img_promocao/imgnupicias.png'

import video from '../assets/video.mp4'

import s from './home.module.css'

export default function Home() {
    return (
        <div className={s.Container}>
            <div className={s.Video}>
                <video src={video} autoPlay loop muted />
            </div>
            <div className={s.CardPromocaoTitle}>
                <h1>Pacotes</h1>
            </div>
            <div className={s.CardPromocao}>
                <CardPromocao Url='/pacotes' Title='Pacote Núpcias' Description='Desfrutem de uma noite de núpcias inesquecível. Amenities e impressos especiais, espumante, chocolates finos, roupões para uso interno, pantufas, 
                café da manhã servido no apartamento e estacionamento incluso.' Price='749,90' imageUrl={imgcardnupicias} Link='Veja todas as ofertas' />
                <CardPromocao Url='/pacotes' Title='Diária de 32 Horas' Description='Café da manha cortesia no restaurante; 
                Livre acesso a área de lazer fitness do hotel; 
                Cortesia para crianças de até 6 anos incompletos no mesmo quarto que os pais; Internet cortesia' Price='395,00' imageUrl={imgcard1} Link='Veja todas as ofertas' />
                <CardPromocao Url='/pacotes' Title='Diária de 32 Horas' Description='Café da manha cortesia no restaurante; 
                Livre acesso a área de lazer fitness do hotel; 
                Cortesia para crianças de até 6 anos incompletos no mesmo quarto que os pais; Internet cortesia' Price='395,00' imageUrl={imgcard1} Link='Veja todas as ofertas' />
            </div>
            <div className={s.ContainerAtactchmen}>

            </div>
            <div className={s.CardPromocao}>
                <CardPromocao Url='/pacotes' Title='Pacote Núpcias' Description='Desfrutem de uma noite de núpcias inesquecível. Amenities e impressos especiais, espumante, chocolates finos, roupões para uso interno, pantufas, 
                café da manhã servido no apartamento e estacionamento incluso.' Price='749,90' imageUrl={imgcardnupicias} Link='Veja todas as ofertas' />
                <CardPromocao Url='/pacotes' Title='Diária de 32 Horas' Description='Café da manha cortesia no restaurante; 
                Livre acesso a área de lazer fitness do hotel; 
                Cortesia para crianças de até 6 anos incompletos no mesmo quarto que os pais; Internet cortesia' Price='395,00' imageUrl={imgcard1} Link='Veja todas as ofertas' />
                <CardPromocao Url='/pacotes' Title='Diária de 32 Horas' Description='Café da manha cortesia no restaurante; 
                Livre acesso a área de lazer fitness do hotel; 
                Cortesia para crianças de até 6 anos incompletos no mesmo quarto que os pais; Internet cortesia' Price='395,00' imageUrl={imgcard1} Link='Veja todas as ofertas' />
            </div>
        </div>
    )
}
