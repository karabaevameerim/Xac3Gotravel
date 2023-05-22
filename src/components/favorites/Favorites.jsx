import React, { useEffect } from 'react'
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

const Favorite = () => {
    const navigate = useNavigate();
    const {deleteTrip} =useTrip();
    const {addProductToCart,checkProductInCart}=useCart();
    const {addProductToLike, checkLike} = useLike()
    const {addProductToFavorite, checkFavorite} = useFavorite();
    const { 
      user : {email} 
    } = useAuth();
    const {getFavorite, favorite, deleteFavoriteProduct,} = useFavorite();
    useEffect(()=>{
        getFavorite();
    },[])
  return (<>
  <div style={{textAlign:"center", fontSize:"50px"}}>Избранные</div>
  <div style={{display:"flex", width:"95%", margin:"0 auto", justifyContent:"space-around", flexWrap:"wrap"}}>
   {favorite?.products.map((row,index)=>(
      <Card sx={{ maxWidth: 345, my: "20px",mx:"5px", width:300}} key={index}>
      <CardMedia
        sx={{ height: 220 }}
        image={row.item.picture}
        title="picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.item.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {row.item.price} som
        </Typography>
      </CardContent>
      <CardActions>
      { email === ADMIN ? (  <> 
            <Button size="small" onClick={() => navigate(`/edit/${row.item.id}`)}> 
              Edit 
            </Button> 
            <Button size="small" onClick={()=>{deleteTrip(row.item.id)}}> 
              Delete 
            </Button> 
          </>) : ( <IconButton onClick={()=>addProductToCart(row.item)}> 
            <AddShoppingCartIcon  
            color={checkProductInCart(row.item.id) ? "primary" : ""}/> 
          </IconButton>)}

        <Button size="small" onClick={()=>navigate(`/details/${row.item.id}`)}>Details</Button>
      </CardActions>
      <IconButton onClick={()=>addProductToLike(row.item)}>
            <FavoriteOutlinedIcon
            color={checkLike(row.item.id) ? "error" : ""}/>
          </IconButton>
          <IconButton onClick={()=>addProductToFavorite(row.item)}>
            <BookmarkOutlinedIcon
            color={checkFavorite(row.item.id) ? "primary" : ""}/>
          </IconButton>
    </Card>
   ))}
   </div>
   </>
  )
}

export default Favorite;