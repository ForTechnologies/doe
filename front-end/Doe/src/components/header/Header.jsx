import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../../assets/styles/header.css';

const pages = [{ label: 'Home', path: '/' }, { label: 'Como doar', path: '/' }, { label: 'Nossa proposta', path: '/' }];
const settings = [{ label: 'Perfil', path: '/doador/perfil' }, { label: 'Sair', path: '/logout' }];

const Header = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (

        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <a href="/"><img src="/images/logo.png" alt="logo plus life" className="header-logo" /></a>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} value={page} onClick={handleCloseNavMenu}>
                                    <Typography variant='body' textAlign="center"><a href={page.path}>{page.label}</a></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <a href=""><img src="/images/logo.png" alt="logo plus life" className="header-logo" /></a>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                value={page}
                                onClick={handleCloseNavMenu}
                                href={page.path}
                                sx={{
                                    my: 2, color: 'black',
                                    display: 'block',
                                    fontWeight: 'bold',
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Usuário - Perfil */}
                    {props.isLogado ?
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Opções">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Avatar" src="/images/user-avatar.svg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, index) => (
                                    <MenuItem key={index} value={setting} onClick={handleCloseUserMenu}>
                                        <a href={setting.path}><Typography variant='body' textAlign="center">{setting.label}</Typography></a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        :
                        <Button variant='outlined' onClick={() => window.location.href = '/login'}>Entrar</Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;