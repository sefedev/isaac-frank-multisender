import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  InputAdornment,
  TextField,
  Switch
} from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import AdjustIcon from "@material-ui/icons/Adjust";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import MultiInput from "../components/MultiInput";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "50px",
    paddingTop: "60px",
  },
}));

const Home = ({ menuItem, isMatch }) => {
    
  const classes = useStyles();

  const lists = [
    { listIcon: <AdbIcon />, listName: "Ethereum" },
    { listIcon: <AdjustIcon />, listName: "Mainnet" },
    { listIcon: <ChangeHistoryIcon />, listName: "Binance Smart Chain" },
  ];

  const inputHead = "List of Addresses in CSV"

  return (
    <>
      <CssBaseline />
      <Container className={classes.container} fullWidth align="center">
        <Typography variant="h3">Welcome to Isaac Frank</Typography>
        <Typography variant="h6" gutterBottom>
          A tool that allows you to batch send ERC20 tokens
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px"
          }}
        >
          {lists.map((list) => (
            <>
              <span style={{
                paddingLeft: "30px",
              }}>{list.listIcon}</span>
              <span
                style={{
                  paddingRight: "30px",
                }}
              >
                {list.listName}
              </span>
            </>
          ))}
        </div>
        <div className={classes.token}>
        <form>
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
          <Switch
        name="checkedA"
        label="Hello"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
          </form>
        </div>
        <MultiInput head={inputHead} />
      </Container>
    </>
  );
};

export default Home;