import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    container: {
        margin: '100px 0 0 0',
        border: '1px solid red',
        width: '100vw',
        backgroundColor: 'blue' 
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <>
          <CssBaseline />
          <div className={classes.container}>
            <h1>Hi</h1>
          </div>

        </>
    )
}

export default Footer
