import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";

import s from './formulary.module.css'
import { useState } from "react";





const singinUserFormSchema = z.object({
    email: z.string()
        .nonempty('O E-mail é obrigátorio')
        .email('O Formato de E-mail invalido!')
        .toLowerCase(),
    senha: z.string()
        .nonempty('O Senha é obrigátorio')
})


type CreateUserFormData = z.infer<typeof singinUserFormSchema>

export function Formulary() {

    const [output, setOutPut] = useState('')
    const [isFilled, setIsFilled] = useState(true);

    const handleClick = () => {
        setIsFilled(!isFilled);
    };

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
        <form onSubmit={handleSubmit(handleSubmitFormulary)}>
            <div className={s.Container}>

                {isFilled ? (
                    <div className={s.ContainerInputs1} onClick={handleClick}>
                        <div className={s.Field}>
                            <label>E-mail:</label>
                            <input className={s.Input} type='text' {...register('email', {})} />
                            {errors.email && <span className={s.Erro}>*{errors.email?.message}</span>}
                        </div>
                        <div className={s.Field}>
                            <label>Senha:</label>
                            <input className={s.Input} type='password'  {...register('senha')} />
                            {errors.senha && <span className={s.Erro}>*{errors.senha.message}</span>}
                        </div>
                        <input className={s.Button} type="submit" />
                    </div>
                ) : (
                    <button onClick={handleClick}>Aaaa</button>
                )}

                {isFilled ? (
                    <button onClick={handleClick}>Fill</button>
                ) : (
                    <div className={s.ContainerInputs2}>
                        <div className={s.Field}>
                            <label>E-mail:</label>
                            <input className={s.Input} type='text' {...register('email', {})} />
                            {errors.email && <span className={s.Erro}>*{errors.email?.message}</span>}
                        </div>
                        <div className={s.Field} >
                            <label>Senha:</label>
                            <input className={s.Input} type='password'  {...register('senha')} />
                            {errors.senha && <span className={s.Erro}>*{errors.senha.message}</span>}
                        </div>
                        <input className={s.Button} type="submit" />
                    </div>
                )}
                <span>{output}</span>
            </div>
        </form>
    )
}