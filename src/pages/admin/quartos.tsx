import s from './quartos.module.css'

export default function quartos() {
    return (
        <div className={s.cardContainerMain}>
            <div className={s.cardContainer}>
                <div className={s.cardHeader}>
                    <h2>Quartos</h2>
                    <button className={s.cardBtn}>Cadastrar</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Código</td>
                            <td>Número</td>
                            <td>Preço</td>
                            <td>Status</td>
                            <td>N° Funcionário</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}