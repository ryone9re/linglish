import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={1}
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ flexGrow: 1, height: '100vh', width: '100vw' }}
    >
      {children}
    </Grid>
  )
}

export default Layout
