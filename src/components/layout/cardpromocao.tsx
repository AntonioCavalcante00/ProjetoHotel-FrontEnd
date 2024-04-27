import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './cardpromocao.module.css'

type PropsCardPromocao = {
    imageUrl: string,
    Title: string,
    Description: string,
    Price: string,
    Url: string
}

const CardPromocao = (props: PropsCardPromocao) => {

    const [isFilled, setIsFilled] = useState(true);

    const handleClick = () => {
        setIsFilled(!isFilled);
    };


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
                        <span>Diária a partir de</span>
                        <div className={s.Price}>
                            R$ {props.Price}
                        </div>
                    </Typography>
                    <div className={s.CardBuy}>
                        <button className={s.Button}>
                            <Link className={s.NameButton} to='/vinhos'>Comprar</Link>
                        </button>
                        <CardActions onClick={handleClick}>
                            {isFilled ? (
                                <button className={s.Favorite}><FavoriteBorderIcon /></button>
                            ) : (
                                <button className={s.Favorite}><FavoriteIcon /></button>
                            )}
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default CardPromocao;