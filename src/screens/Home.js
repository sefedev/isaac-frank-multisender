import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  InputAdornment,
  TextField
} from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import AdjustIcon from "@material-ui/icons/Adjust";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import MultiInput from "../components/MultiInput";
import CustomSwitch from "../utils/CustomSwitch"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "50px",
    paddingTop: "60px",
  },
  tokenLg: {
    display: "flex",
    flexDirection: "row",
    padding: '80px',
    height: "200px",
    justifyContent: "center",
    alignItems:'center'
  },
  tokenSm: {
    display: "flex",
    flexDirection: "column",
    height: "200px",
    justifyContent: "space-between",
  },
}));


const Home = ({ menuItem, isMatch }) => {
  const classes = useStyles();

  const lists = [
    { listIcon: <AdbIcon />, listName: "Ethereum" },
    { listIcon: <AdjustIcon />, listName: "Mainnet" },
    { listIcon: <ChangeHistoryIcon />, listName: "Binance Smart Chain" },
  ];

  const inputHead = "List of Addresses in CSV";

  

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
            marginBottom: "30px",
          }}
        >
          {lists.map((list) => (
            <>
              <span
                style={{
                  paddingLeft: "30px",
                }}
              >
                {list.listIcon}
              </span>
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

        <div className={isMatch ? classes.tokenSm : classes.tokenLg}>
          <TextField
            label="Token Address"
            variant={isMatch ? "filled" : "outlined" }
            style={
              isMatch
                ? { width: "100%", marginButtom: "20px" }
                : { width: "60%" }
            }
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
            variant={isMatch ? "filled" : "outlined" }
            style={isMatch ? { width: "100%" } : { width: "10%" }}
          />

          
          <CustomSwitch label="Deflationary" />
        </div>
        <MultiInput head={inputHead} isMatch={isMatch}/>
      </Container>
    </>
  );
};

export default Home;


