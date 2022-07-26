import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top3Tokens = [
  { label: "FVM", address: "0xxxxxxxxxxxxxxxxxxxxxxxxxxx" },
  { label: "USDT", address: "0xxxxxxxxxxxxxxxxxxxxxxxxxxx" },
  { label: "NXC", address: "0xxxxxxxxxxxxxxxxxxxxxxxxxxx" },
];

export const ComboBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top3Tokens}
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: "1px solid #dddfe0",
        borderRadius: ".4rem",
      }}
      renderInput={(params) => <TextField {...params} label="Token" />}
    />
  );
};

export default function BasicCard() {
  return (
    <Card
      sx={{
        width: 500,
        height: "400px",
        p: "24px",
        background: "hsla(0,0%,100%,.24)",
        border: "1px solid #fff",
        borderRadius: "12px",
        boxShadow: "0 1px 4px rgba(0,0,0,.08)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 800, fontSize: "24px" }}
        >
          Get Test Tokens
        </Typography>
        <Typography
          component="p"
          sx={{
            pt: 1,
            pb: 4,
            fontSize: "12px",
            fontWeight: "400px",
            width: 300,
          }}
        >
          This faucet transfers TestToken on Firo testnets and parent chain.
          Confirm details before submitting.
        </Typography>
        <Typography
          component="div"
          sx={{ fontWeight: 800, fontSize: "1rem", pb: 1 }}
        >
          Select Token
        </Typography>
        <ComboBox />
        <Typography
          component="div"
          sx={{ fontWeight: 800, fontSize: "1rem", pt: 2, pb: 1 }}
        >
          Wallet Address
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxx"
          variant="outlined"
          sx={{ width: "100%", backgroundColor: "white", mb: 3 }}
        />
        <Button
          variant="contained"
          style={{
            borderRadius: "8px",
            backgroundColor: "#854ce6",
            padding: "10px 14px",
            fontSize: "1rem",
            width: "100%",
            textTransform: "none",
            height: "56px",
          }}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
