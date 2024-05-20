import s from './login.module.css'


import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useState } from "react";

import { useForm } from "react-hook-form"

import logo from '../../assets/public/logos/logo4.png'

const singinUserFormSchema = z.object({
    email: z.string()
        .nonempty('O E-mail é obrigátorio')
        .email('O Formato de E-mail invalido!')
        .toLowerCase(),
    senha: z.string()
        .nonempty('O Senha é obrigátorio')
})


type CreateUserFormData = z.infer<typeof singinUserFormSchema>

export default function Login() {

    const [output, setOutPut] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(singinUserFormSchema)
    });


    function handleSubmitFormulary(data: unknown) {
        setOutPut(JSON.stringify(data, null, 2))
    }

    return (
        <div className={s.MainContainer}>
            <div className={s.Container}>
                <div className={s.SessionTop}>
                    <div className={s.LogoDivision}>
                        <img className={s.Logo} src={logo}></img>
                    </div>
                    <h2>Iniciar Sessão</h2>
                </div>
                <form onSubmit={handleSubmit(handleSubmitFormulary)}>
                    <div className={s.ContainerInputs}>
                        <div className={s.Field}>
                            <label>Seu E-mail:</label>
                            <input className={s.Input} placeholder='usuario123@gmail.com' type='text' {...register('email', {})} />
                            {errors.email && <span className={s.Erro}>*{errors.email?.message}</span>}
                        </div>
                        <div className={s.Field}>
                            <label>Sua Senha:</label>
                            <input className={s.Input} placeholder='RdaWs27Ç' type='password'  {...register('senha')} />
                            {errors.senha && <span className={s.Erro}>*{errors.senha.message}</span>}
                        </div>
                        <input className={s.Button} type="submit" />
                    </div>
                    <span>{output}</span>
                </form>
            </div>
        </div>
    )
}