import React from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    container: {
        margin: '100px 0 0 0',
        width: '100vw',
        backgroundColor: '#0A2463' 
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <>
          <CssBaseline />
          <Container fullWidth align="center" gutter>
            <Typography variant="h6">
              &copy; Copyright 2021
            </Typography>
            <Typography>
              Isaac Frank
            </Typography>
          </Container>
          

        </>
    )
}

export default Footer

const div = (
  <div>
            <h1>Hi</h1>
          </div>
)
