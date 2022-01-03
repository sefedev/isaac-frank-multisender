import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "./screens/Home";
import Verification from "./screens/Verification";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nft from "./screens/Nft";
import AppBarComp from "./components/AppBarComp";
import AppBarCompSm from "./components/AppBarCompSm";
import NotFound from "./screens/NotFound";
import DrawerComp from "./components/DrawerComp"
import Footer from "./components/Footer"
//import { purple } from "@material-ui/core/colors";


export default function App() {

  const menuItem = [
    { item: "NFT", link: "/nft" },
    { item: "Revoke", link: "/revoke" },
    { item: "Analytics", link: "/analytics" },
    { item: "Verification", link: "/verification" },
    { item: "Profile", link: "/profile" },
  ];

  //Dark Mode Theming
  const [isDark, setIsDark] = useState(false);

  const onClickHandler = () => {
    setIsDark(!isDark);
  };

  const lightTheme = createTheme({
    palette: {
      background: {
        default: '#d9d9d9'
      },
      primary: {
        main:  '#0E402D'
      },
      secondary: {
        main: "#9FCC2E",
      }
    },
    typography: {
      fontFamily: `'Noto Sans JP', 'sans-serif'`
    },
  });


  const darkTheme = createTheme({
    palette: {
      type: "dark",
      
      primary: {
        main: "#0E402D" 
      },
      secondary: {
        main: '#9FCC2E',
      }
    },
    
    typography: {
      fontFamily: `'Noto Sans JP', 'sans-serif'`,
      fontColor: '#000000'
    },
    
  });

  console.log(darkTheme)


  const myTheme = useTheme();
  const isMatch = useMediaQuery(myTheme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <BrowserRouter>
          {isMatch ? (
            <AppBarCompSm
              menuItem={menuItem}
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleHandler={toggleHandler}
            />
          ) : (
            <AppBarComp 
            onClickHandler={onClickHandler}
            isDark={isDark}
            menuItem={menuItem} />
          )}
          <Switch>
            <Route exact path="/">
              <Home
                menuItem={menuItem}
                isMatch={isMatch}
              />
            </Route>
            <Route exact path="/verification">
              <Verification
                menuItem={menuItem}
                isMatch={isMatch}
              />
            </Route>
            <Route path="/nft" component={Nft} />
            <Route component={() => <NotFound isMatch={isMatch}/>} />
          </Switch>
          <DrawerComp 
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        menuItem={menuItem}
      />
            <Footer />
        </BrowserRouter>
      </ThemeProvider>
      
    </>
  );
}
