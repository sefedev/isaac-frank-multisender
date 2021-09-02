import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export const useStyles = makeStyles(() => ({
  appbar: {
    padding: "5px 40px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  containerHeader: {
    width: 'auto',
    padding: "0",
  },

  gridMenu: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 0px",
    width: "auto",
    // width: "fit-content"
  },
  containerMenuIcon: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    // padding: '10px'
  },
  gridMenuButton: {
    width: "auto",
  },
  href: {
    textDecoration: 'none',
    color: 'inherit',
  }
}));




const AppBarComp = ({ menuItem, isMatch, openDrawer, setOpenDrawer }) => {
  const classes = useStyles(false);

  const [isDark, setIsDark] = useState(false);


  const onClickHandler = () => {
    setIsDark(!isDark);
  };

  let w = <WbSunnyIcon />;
  let b = <Brightness3Icon />;


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.containerHeader}>
            <Typography variant="h4">
            <Link to="/" className={classes.href}>Isaac Frank</Link>
            </Typography>
          </Grid>
          <Grid container spacing={2} className={classes.gridMenu}>
            {menuItem.map((menu, i) => (
              <Grid item key={i}>
                <Link to={menu.link} className={classes.href}>
                <IconButton>
                  <Typography>{menu.item}</Typography>
                  </IconButton>
                </Link>
              </Grid>
              
              
            ))}
          </Grid>
          <Grid className={classes.containerMenuIcon} spacing={4}>
            <Grid item style={{ paddingRight: "20px" }}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <TelegramIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container className={classes.gridMenuButton} spacing={3}>
            <Grid item gutter>
              <Button variant="outlined" color="secondary">
                <AttachMoneySharpIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Connect
              </Button>
            </Grid>
          </Grid>
          <IconButton onClick={onClickHandler}>
            {isDark === true ? w : b}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComp;
