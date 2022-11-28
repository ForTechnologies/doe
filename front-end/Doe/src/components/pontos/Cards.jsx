
import * as React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import dados from './dados';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", filter: "invert(1)" }}
            onClick={onClick}
        />
    );
}

/* onOpen é a função para abrir o modal do card */
const Cards = ({onOpen = () => {}}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='div-cards'>
            <Typography variant='subtitle' sx={{ borderBottom: '5px solid #C1272D', textAlign: 'left' }}>
                PONTOS MAIS PROXIMOS:
            </Typography>
            <div className='cards'>
                <div>
                    <Slider {...settings}>
                        {dados.map(item =>
                            <Box key={item.id} sx={{ maxWidth: 300, marginTop: 5 }}>
                                <Card variant="outlined" sx={{ borderRadius: 5, padding: 1, }}>
                                    <CardContent>
                                        <Typography variant="subtitle" component="div" sx={{ mb: 1.5 }}>
                                            {item.nome}
                                        </Typography>
                                        <Typography variant='body' className='card-info'>
                                            <LocationOnIcon color='primary' sx={{ marginRight: 1.5 }} />
                                            {item.endereco}
                                        </Typography>
                                        <Typography variant='body' className='card-info'>
                                            <PhoneIcon color='primary' sx={{ marginRight: 1.5 }} />
                                            {item.telefone}
                                        </Typography>
                                        <Typography variant='body' className='card-info'>
                                            <EmailIcon color='primary' sx={{ marginRight: 1.5 }} />
                                            {item.email}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={onOpen}>Ver mais</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        )}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Cards;