import React from 'react'
import TripList from '../components/Product/TripList'
import { Box, Grid } from '@mui/material'

const TripListPage = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <TripList />
      </Grid>
    </Box>
  )
}

export default TripListPage