import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";



const AppBarComp = ({ menuItem, isMatch, openDrawer, setOpenDrawer, onClickHandler, isDark }) => {
  const useStyles = makeStyles(() => ({
    appbar: {
      padding: "5px 40px",
    },
  
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    containerHeader: {
      width: "auto",
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
      textDecoration: "none",
      color: "#FFFAFF",
      "&:hover": {
        color: "#D8315B",
        transition: "0.3s ease-in-out",
      },
    },
  }));

  const classes = useStyles(false);

  
  let w = <WbSunnyIcon />;
  let b = <Brightness3Icon />;

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.containerHeader}>
            <Link to="/" className={classes.href}>
              <Typography variant="h4">Isaac Frank</Typography>
            </Link>
          </Grid>
          <Grid container spacing={3} className={classes.gridMenu}>
            {menuItem.map((menu, i) => (
              <Grid item key={i}>
                <Link to={menu.link} className={classes.href}>
                  <ButtonBase>
                    <Typography>{menu.item}</Typography>
                  </ButtonBase>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.containerMenuIcon} spacing={4}>
            <Grid item style={{ paddingRight: "20px" }}>
              <IconButton href="https://github.com/zikyfranky" target="_blank">
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <TelegramIcon href="https://t.me/zikyfranky" target="blank"/>
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
