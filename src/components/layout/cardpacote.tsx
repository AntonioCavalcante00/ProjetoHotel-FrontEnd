import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type PropsCardPacote = {
    title: string,
    describtion: string,
    imageUrl: string,
    imageDescribtion?: string,

}

export default function cardpacote(props: PropsCardPacote) {

    return (
        <Card sx={{ display: 'flex', justify: 'center', alignItens: 'center', width: 800 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 500, height: 300 }}
                    image={props.imageUrl}
                    alt={props.imageDescribtion}
                />

                <CardContent sx={{ flex: '1 0 auto', width: 800 }}>
                    <Typography sx={{ marginBottom: 3 }} component="div" color="InfoText" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.describtion}
                    </Typography>
                </CardContent>
            </Box>
        </Card >
    );
}