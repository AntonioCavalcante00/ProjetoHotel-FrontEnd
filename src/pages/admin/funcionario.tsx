import s from './funcionario.module.css'

export default function funcionario() {
    return (
        <div className={s.cardContainerMain}>
            <div className={s.cardContainer}>
                <div className={s.cardHeader}>
                    <h2>Funcionário</h2>
                    <button className={s.cardBtn}>Cadastrar</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Código</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}