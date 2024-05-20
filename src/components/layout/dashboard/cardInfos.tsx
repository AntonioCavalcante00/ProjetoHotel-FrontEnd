
import s from './cardInfo.module.css'
import { ReactNode } from 'react'

type PropsCardInfo = {
    Title: string,
    Number: string,
    Icon?: ReactNode,
}

export default function cardInfos(props: PropsCardInfo) {
    return (
        <div>
            <div className={s.cardInfos}>
                <div className={s.Infos}>
                    <h4 className={s.Info1}>{props.Title}</h4>
                    <h2 className={s.Info2}>{props.Number}</h2>
                </div>
                <div className={s.cardIcon}>
                    <div className={s.icon}>
                        {props.Icon}
                    </div>
                </div>
            </div>
        </div>
    )
}