import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTrip } from '../../contexts/TripContextProvider';

const EditProduct = () => {
  const {saveEditedTrip, getTripDetails, tripDetails} = useTrip();
  console.log(tripDetails)

  const {id} = useParams();

  React.useEffect(()=>{
    getTripDetails(id)
  },[])
   
  React.useEffect(()=>{
    setTrip(tripDetails);
  },[tripDetails])

  const [trip, setTrip] = useState(tripDetails);

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

  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        {/* <Typography variant="h4">EDIT PANEL</Typography> */}
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="picture"
          variant="outlined"
          size="small"
          name="picture"
          onChange={handleInput}
          value={trip.picture || ""}
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
          value={trip.location || ""}
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
          value={trip.description || ""}
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
          value={trip.data || ""}
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
          value={trip.price || ""}
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
          value={trip.type || ""}
        /> */}
          <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Тип"
          name="Тип"
          onChange={handleInput}
          value={trip.type || ""}
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
          onClick={() => saveEditedTrip(trip)}
          fullWidth
          variant="outlined"
        >
          Save Changes
        </Button>
      </Box>
    </>
  )
}

export default EditProduct