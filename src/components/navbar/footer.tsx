import { Link } from 'react-router-dom';

import { FiInstagram } from "react-icons/fi";
import { BsTwitterX, BsFacebook } from "react-icons/bs";

import { Box, Divider } from '@mui/material';

import s from './footer.module.css'


export default function Footer() {
    return (
        <>
            <div className={s.MainContainer}>


                <Box sx={{ width: '100', marginTop: 2, marginBottom: 2 }}>
                    <Divider sx={{ backgroundColor: '#808080 ', height: 2 }} />
                </Box>

                <div className={s.Container}>
                    <div className={s.Conect}>
                        <p>Conecte-se</p>
                    </div>
                    <div className={s.ContainerLinks}>
                        <Link className={s.Link} to='https://www.instagram.com/'>
                            <FiInstagram className={s.Icon} /></Link>
                        <Link className={s.Link} to='https://www.facebook.com/'>
                            <BsFacebook className={s.Icon} /></Link>
                        <Link className={s.Link} to='https://www.twitter.com/'>
                            <BsTwitterX className={s.Icon} /></Link>
                    </div>
                </div>

                <Box sx={{ width: '100', marginTop: 2, marginBottom: 2 }}>
                    <Divider sx={{ backgroundColor: '#899999 ', height: 2 }} />
                </Box>

                <div className={s.ContainerRight}>
                    <span>Hotel Urbano© 2023 </span>
                    <span>Todos os Direito Reservados</span>
                </div>
            </div>
        </>

    )
}