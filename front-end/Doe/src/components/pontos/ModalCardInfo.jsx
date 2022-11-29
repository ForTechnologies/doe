import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CriticoImg from '../../assets/images/medidor-critico.png';
import AtencaoImg from '../../assets/images/medidor-atencao.png';
import EstavelImg from '../../assets/images/medidor-estavel.png';
import medidor from '../../assets/fecharModal.png';

import dadoUnico from './dadoUnico';

const ModalCardInfo = ({ onClose = () => { } }) => {

    return (
        <div className='modal'>
            <div className='box-modal-card'>

                <div style={{ padding: '20px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img src="/images/logo.png" alt="logo" style={{ height: '40px' }} />
                    <div onClick={onClose} style={{ cursor: 'pointer' }}><CloseIcon fontSize='medium' /></div>
                </div>

                {dadoUnico.map(item =>
                    <>
                        <div className='container-modal-card'>
                            <Typography variant="title" component="div" sx={{ mb: 1.5 }}>
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

                            <div className='niveis-card'>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>A+</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>B+</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>AB+</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>O+</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>A-</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>B-</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>AB-</span>
                                </div>
                                <div className='box-nivel-card'>
                                    <img src={medidor} alt="Nivel: Em Atenção" className='imagem-nivel-card' />
                                    <span variant='body'>O-</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className='legenda-card'>
                    <Typography variant='body' className='card-info' sx={{marginRight: 5}}>
                    <div className='cor-legenda-card' style={{backgroundColor: '#E2BCBC'}}></div>
                        Estável
                    </Typography>
                    <Typography variant='body' className='card-info' sx={{marginRight: 5}}>
                    <div className='cor-legenda-card' style={{backgroundColor: '#D36262'}}></div>
                        Em Atenção
                    </Typography>
                    <Typography variant='body' className='card-info'>
                    <div className='cor-legenda-card' style={{backgroundColor: '#AA1111'}}></div>
                        Crítico
                    </Typography>
                </div>
            </div>
        </div>
    )

}

export default ModalCardInfo;