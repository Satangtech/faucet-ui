import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoImg from "../../Firo-logo.svg.png";

export default function ButtonAppBar() {
  return (
    <Box position="fixed" sx={{ maxHeight: "80px", width: "100%", top: 0 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }} elevation={0}>
        <Toolbar sx={{ height: "100%" }}>
          <Box
            component="img"
            sx={{
              height: "50px",
              width: "auto",
            }}
            alt="logo"
            src={LogoImg}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ pt: 1, pl: 1, fontSize: "25px", color: "black" }}
          >
            Faucet
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
