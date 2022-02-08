import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'

const LayoutChild = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      columns={1}
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </Grid>
  )
}

export default LayoutChild
