import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo.svg";

export default function ButtonAppBar() {
  return (
    <Box position="fixed" sx={{ maxHeight: "80px", width: "100%", top: 0 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "rgb(32, 32, 104)" }}
        elevation={0}
      >
        <Toolbar sx={{ height: "100%" }}>
          <Box
            component="img"
            sx={{
              height: "40px",
              width: "auto",
            }}
            alt="logo"
            src={logo}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ pt: 1, pl: 1, fontSize: "25px", color: "white" }}
          >
            Next Faucet
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
