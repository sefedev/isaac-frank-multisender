import React from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'


export default function Footer() {
  return (
      <AppBar position="static" color="primary" style={{ marginTop: "50px"}}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2019 Isaac Frank
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

// const Footer = () => {
//     return (
//         <>
//           <CssBaseline />
//           <Container fullWidth align="center" gutter>
//             <Typography variant="h6">
//               &copy; Copyright 2021
//             </Typography>
//             <Typography>
//               Isaac Frank
//             </Typography>
//           </Container>
          

//         </>
//     )
// }

//export default Footer

