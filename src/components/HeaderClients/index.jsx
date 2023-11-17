import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import ClientsIcon from '../../assets/clientes.svg';
import FilterSearchIcon from '../../assets/filtersearch-icon.svg';

import './style.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '200px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    border:'1px solid #FFF',
    boxShadow:'3px 4px 4px rgba(218, 1, 117, 0.08)',
    borderRadius:'8px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HeaderClients() {
  return (

    <Box sx={{ flexGrow: 1,  margin: '0 auto', height: '100px', marginTop:'30px'}}>
        <Toolbar>
          <img src={ClientsIcon} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', marginLeft:'10px' }}}
          >
            Clientes
          </Typography>

            <button className='add-client-btn'>Adicionar Cliente</button>

            <img className='img-filter' src={FilterSearchIcon} alt="" />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisa..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
    </Box>
  );
}
