import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../input/Input';
import Select from '../input/SelectInput';

import estados from '../../assets/estados';
// import '../../assets/styles/global.scss'

const ModalEdtEndereco = ({ onClose = () => { } }) => {

    return (
        <div className='modal'>
            <div className='box-modal-endereco'>

                <div style={{ padding: '20px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img src="/images/logo.png" alt="logo" style={{ height: '40px' }} />
                    <div onClick={onClose} style={{ cursor: 'pointer' }}><CloseIcon fontSize='medium' /></div>
                </div>
                <div style={{ marginBottom: '20px', marginTop: '30px' }}>
                    <Typography variant='title'>Deseja atualizar o endereço?</Typography>
                </div>
                <form action="">
                    <Input name='rua' type='text' placeholder='Digite sua rua' label='Rua'></Input>
                    <Input name='numero' type='number' placeholder='Digite seu numero' label='Numero'></Input>
                    <Input name='cidade' type='text' placeholder='Digite sua cidade' label='Cidade'></Input>
                    <Select name='estado' placeholder='Digite sua estado' label='Estado' options={estados}></Select>
                    <Button variant='vermelho' sx={{ my: 2, color: 'white', display: 'block', marginBottom: '50px' }}>Confirmar</Button>
                </form>

            </div>

        </div>
    )
}

export default ModalEdtEndereco;