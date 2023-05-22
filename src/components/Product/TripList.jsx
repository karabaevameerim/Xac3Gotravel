import React, { useEffect, useState } from 'react'
import { useTrip } from '../../contexts/TripContextProvider'
import TripCard from './TripCard'
import { useSearchParams } from 'react-router-dom';
import NativeSelect from '@mui/material/NativeSelect';
import { Box, FormControl, Grid, InputLabel, Pagination} from '@mui/material';
const TripList = () => {
    const {trips, getTrips, fetchByType}= useTrip();
    const [searchParams, setSearchParams]= useSearchParams();
      useEffect(()=>{
        getTrips()
    },[])
    console.log(trips);

    useEffect(()=>{
      getTrips();
      setPage(1)
    },[searchParams])

    const [page , setPage] = useState(1);
    const itemsPerPage = 12;
    const count = Math.ceil(trips?.length / itemsPerPage)

    const handleChange = (e, p) => {
      setPage(p);
    };

    function currentData(){
      const begin = (page-1)*itemsPerPage;
      const end = begin + itemsPerPage;
      return  trips.slice(begin, end);
    }
    
      return (
     <Grid item md={12}>
     <Box sx={{ minWidth: 120, textAlign:"center"}}>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Тип
        </InputLabel>
        <NativeSelect
          defaultValue="Все"
          inputProps={{
            name: 'type',
            id: 'uncontrolled-native',
          }}
          onChange={(e)=>fetchByType("type", e.target.value)}
        >
          <option value="Все">Все</option>
          <option value="Конный тур">Конный тур</option>
          <option value="Поход">Поход</option>
          <option value="Экскурсионный">Экскурсионный</option>
          <option value="Комбинированный">Комбинированный</option>
          <option value="Пляжные">Пляжные</option>
          <option value="Познавательные">Познавательные</option>
          <option value="Зимний тур">Зимний тур</option>
          <option value="Велотур">Велотур</option>
       
        </NativeSelect>
      </FormControl>
    </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {currentData().map((item) => (
            console.log(item),
            <TripCard key={item.id} item={item} />
          ))}
        </Box>
        <Box 
         sx={{
          display: "flex",
          my: "2rem",
          justifyContent: "center",
        }}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
        </Box>
      </Grid>
  )
}

export default TripList