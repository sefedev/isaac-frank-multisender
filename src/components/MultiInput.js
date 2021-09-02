import React from 'react'
import { Button, Container, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    csv: {
        marginTop: "20px",
        marginBottom: "40px",
        padding: "5px 80px",
      }
}))

const MultiInput = ({ head }) => {
    const classes = useStyles()
    return (
        <>
        <Container className={classes.csv}>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>{head}</Typography>
          <Typography>Show Example CSV</Typography>
        </div>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={7}
        />
        <Button variant="contained" color="primary" fullWidth>Upload CSV file</Button>
      </Container>
        </>
    )
}

export default MultiInput;