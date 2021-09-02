import React from "react";
import { Container, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import error from "../assets/error.png";

const useStyles = makeStyles(() => ({
  containerLg: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
    marginTop: "50px",
    paddingTop: "60px",
  },
  containerMd: {

  }
}));

// const style = {
//   width: "44vw",
//   height: "63vh",
// };

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container align="center" className={classes.containerLg}>
        <div>
          <Typography variant="h1">404 error</Typography>
          <Typography variant="h3" paragraph>
            Page Not Found!
          </Typography>
          <ErrorOutlineIcon />
        </div>
        <div>
          <img src={error} alt="" width="600px" height="400px" />
        </div>
      </Container>
    </>
  );
};
export default NotFound;
