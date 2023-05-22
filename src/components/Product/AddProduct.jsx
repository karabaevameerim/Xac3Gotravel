import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTrip } from '../../contexts/TripContextProvider'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddProduct = () => {
  const {addTrip} = useTrip()
  const [trip, setTrip] = useState({
    picture:"",
    location:"",
    description:"",
    data:"",
    price:"",
  });

  const handleInput = (e)=>{
    if(e.target.name === "price"){
      let obj = {
        ...trip,
        [e.target.name]:Number(e.target.value),
      };
      setTrip(obj);
    }else{
      let obj = {
        ...trip,
        [e.target.name]:e.target.value,
      }
      setTrip(obj);
    }
  }

  console.log(trip);
  console.log(1234);

  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        {/* <Typography variant="h4">ADMIN PANEL</Typography> */}
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="picture"
          variant="outlined"
          size="small"
          name="picture"
          onChange={handleInput}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="location"
          variant="outlined"
          size="small"
          name="location"
          onChange={handleInput}
        />
         <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="description"
          variant="outlined"
          size="small"
          name="description"
          onChange={handleInput}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="data" 
          variant="outlined"
          size="small"
          name="data"
          onChange={handleInput}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="price"
          variant="outlined"
          size="small"
          name="price"
          onChange={handleInput}
        />
        {/* <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="type"
          variant="outlined"
          size="small"
          name="type"
          onChange={handleInput}
        /> */}
         <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="type"
          name="type"
          onChange={handleInput}
        >
           <MenuItem value="Конный тур">Конный тур</MenuItem>
          <MenuItem value="Поход">Поход</MenuItem>
          <MenuItem value="Экскурсионный">Экскурсионный</MenuItem>
          <MenuItem value="Комбинированный">Комбинированный</MenuItem>
          <MenuItem value="Пляжные">Пляжные</MenuItem>
          <MenuItem value="Познавательные">Познавательные</MenuItem>
          <MenuItem value="Зимний тур">Зимний тур</MenuItem>
          <MenuItem value="Велотур">Велотур</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <Button
          onClick={() => addTrip(trip)}
          fullWidth
          variant="outlined"
        >
          Add Trip
        </Button>
      </Box>
    </>
  )
}

export default AddProduct