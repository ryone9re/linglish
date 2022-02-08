import { Typography } from '@mui/material'

import type { NextPage } from 'next'

import Layout from '@src/components/layout/Layout'
import LayoutChild from '@src/components/layout/LayoutChild'

const Index: NextPage = () => {
  return (
    <Layout>
      <LayoutChild>
        <Typography variant='h1' component='div'>
          Hello world
        </Typography>
      </LayoutChild>
      <LayoutChild>
        <Typography variant='h1' component='div'>
          Hello world
        </Typography>
      </LayoutChild>
      <LayoutChild>
        <Typography variant='h1' component='div'>
          Hello world
        </Typography>
      </LayoutChild>
      <LayoutChild>
        <Typography variant='h1' component='div'>
          Hello world
        </Typography>
      </LayoutChild>
    </Layout>
  )
}

export default Index
