import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import s from './cardpromocao.module.css'

type PropsCardPromocao = {
    imageUrl: string,
    Title: string,
    Description: string,
    Price: string,
    Url: string,
    Link: string,
}

const CardPromocao = (props: PropsCardPromocao) => {
    return (
        <>
            <Card className={s.Container}>
                <Link className={s.MainCards} to={props.Url}>
                    <CardMedia
                        component="image"
                        image={props.imageUrl}
                        alt="Imagem do Card"
                        className={s.Cards} />
                </Link>
                <CardContent>
                    <Typography gutterBottom component="div">
                        <div className={s.Title}>
                            {props.Title}
                        </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <div className={s.Description}>
                            {props.Description}
                        </div>
                    </Typography>
                    <Typography marginTop='1em'>
                        <span>Pacotes a partir de</span>
                        <div className={s.Price}>
                            R$ {props.Price}
                        </div>
                    </Typography>
                    <div className={s.CardBuy}>
                        <Link className={s.NameButton} to='/pacotes'>{props.Link}</Link>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default CardPromocao;