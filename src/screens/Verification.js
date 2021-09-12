import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import MultiInput from "../components/MultiInput";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "50px",
    paddingTop: "60px",
  },
  token: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px",
  },
}));

const Verification = ({ menuItem, isMatch }) => {
  const classes = useStyles();
  
  return (
    <>
      <CssBaseline />
  
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center">
              Batch Verification
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              If you have a list of recipients and a list of transactions from
              your previous multi-send, you can check which recipients received
              their tokens.
            </Typography>
            <form noValidate autoComplete="off">
              <div className={classes.token}>
                <TextField
                  label="Token Address"
                  variant="outlined"
                  style={{ width: "60%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Decimal"
                  variant="outlined"
                  style={{ width: "10%" }}
                />
              </div>
              <MultiInput head="Your TX's hashes" isMatch={isMatch}/>
              <MultiInput head="Original list of recipient" isMatch={isMatch}/>
              <Container align="center">
                <Button variant="contained" color="primary" size="large">
                  Check
                </Button>
              </Container>
            </form>
          </Container>
        </div>
      </main>
      
    </>
  );
};

export default Verification;
