import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalEdtEndereco from './ModalEdtEndereco';

const Mapa = ({onOpen = () => {}}) => {

    return (
        <div className='div-mapa'>
            <Typography variant='body' onClick={onOpen} style={
                {
                    float: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    mb: 10,
                    mr: 10
                }}>
                Rua Haddok Lobo, 351
                <KeyboardArrowDownIcon color='primary' />
            </Typography>
            <img src="/images/mapa.png" alt="mapa.png" className="mapa" />
        </div>
    )
}

export default Mapa;