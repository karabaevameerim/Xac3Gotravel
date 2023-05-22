import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import '../Navbar/Navbar.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../../contexts/CartContextProvider';
import { useLike } from '../../contexts/LikeContextProvider';
import { useFavorite } from '../../contexts/FavoriteContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider'; 
import { ADMIN } from '../../helpers/consts';
import { MenuList } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const {cart} = useCart();
  const {like} = useLike();
  const {favorite} = useFavorite();

  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  // search
  const { 
    handleLogout, 
    user: { email }, 
  } = useAuth(); 
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu 
    anchorEl={anchorEl} 
    anchorOrigin={{ 
      vertical: "top", 
      horizontal: "right", 
    }} 
    id={menuId} 
    keepMounted 
    transformOrigin={{ 
      vertical: "top", 
      horizontal: "right", 
    }} 
    open={isMenuOpen} 
    onClose={handleMenuClose} 
  > 
    {email ? ( 
      <MenuList> 
        <MenuItem>hello, {email}!</MenuItem> 
        <MenuItem 
          onClick={() => { 
            handleLogout(); 
            handleMenuClose(); 
          }} 
        > 
          Logout 
        </MenuItem> 
      </MenuList> 
    ) : ( 
      <MenuItem onClick={() => navigate("/auth")}>Login</MenuItem> 
    )} 
  </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
          <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <LocationOnIcon />
        </IconButton> */}
        <Link to="/"><p>Главная</p></Link>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <ManageSearchIcon />
        </IconButton> */}
        <p>Админ</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <ShopIcon />
        </IconButton> */}
        <Link to="/card"><p>Туры</p></Link>
      </MenuItem>
      <MenuItem>
        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton> */}
        <p>Контакты</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <Link to="/about"><p>Онас</p></Link>
      </MenuItem>
      <MenuItem>
      <Link to="/cart">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cart.products.length} color="error">
            <AddShoppingCart />
          </Badge>
        </IconButton>
        </Link> 
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
      <Link to="/favorites">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <BookmarkBorderIcon />
          </Badge>
        </IconButton>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             <Typography
            variant="h6"
            noWrap
            component="div"
          >
            GO
          </Typography>
          </IconButton>
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <button>
          <Link to="/">
                Главная
            </Link>
            </button>
            <button>
            {email === ADMIN ? (<Link to="/admin"> 
                Админ 
                </Link>) : null} 
                </button>
          
            <button>
                <Link to="/card">
                Туры
                </Link>
                </button>
            <button>
              <Link to="/contacts">
              Контакты
              </Link>
              </button>
            <button>
            <Link to="/about">
            Онас
            </Link>
            </button>
            <Link to="/cart">
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge color="error">
                <AddShoppingCart/>
                </Badge>
            </IconButton>
            </Link>
            <Link to="/likes">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            </Link>
            <Link to="/favorites">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <BookmarkBorderIcon />
              </Badge>
            </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}