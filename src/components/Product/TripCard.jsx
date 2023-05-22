import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton } from '@mui/material';
import { useTrip } from '../../contexts/TripContextProvider';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from '../../contexts/CartContextProvider';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useLike } from '../../contexts/LikeContextProvider';
import { useFavorite } from '../../contexts/FavoriteContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider'; 
import { ADMIN } from "../../helpers/consts";

export default function TripCard({ item }) {
  const navigate = useNavigate();
  const {deleteTrip} =useTrip();
  const {addProductToCart,checkProductInCart}=useCart();
  const {addProductToLike, checkLike} = useLike()
  const {addProductToFavorite, checkFavorite} = useFavorite();
  const { 
    user : {email} 
  } = useAuth();
    return (<>
      
      <Card sx={{ maxWidth: 345, my: "20px",mx:"5px", width:300}} key={item.id}>
        <CardMedia
          sx={{ height: 220 }}
          image={item.picture}
          title="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price} som
          </Typography>
        </CardContent>
        <CardActions>
        { email === ADMIN ? (  <> 
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}> 
                Edit 
              </Button> 
              <Button size="small" onClick={()=>{deleteTrip(item.id)}}> 
                Delete 
              </Button> 
            </>) :null} 

          <Button size="small" onClick={()=>navigate(`/details/${item.id}`)}>Details</Button>
        </CardActions>
        { email ? (<>
        <IconButton onClick={()=>addProductToLike(item)}>
              <FavoriteOutlinedIcon
              color={checkLike(item.id) ? "error" : ""}/>
            </IconButton>
            <IconButton onClick={()=>addProductToFavorite(item)}>
              <BookmarkOutlinedIcon
              color={checkFavorite(item.id) ? "primary" : ""}/>
            </IconButton>
            <IconButton onClick={()=>addProductToCart(item)}> 
              <AddShoppingCartIcon  
              color={checkProductInCart(item.id) ? "primary" : ""}/> 
            </IconButton>
            </>):null}
      </Card>
      </>
    );
  }
  