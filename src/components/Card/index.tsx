import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import config from "../../config/app";
import { useState, useEffect } from "react";

interface Token {
  name: string;
  balance?: number;
  logo?: string;
  address?: string;
  symbol?: string;
  error?: string;
}

interface TokenName {
  tokenName: string | null;
  setTokenName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ComboBox = ({ tokenName, setTokenName }: TokenName) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    fetch(`${config.faucetApi}/assets`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setTokens(result);
        },
        (error) => {
          console.error("error", error);
        }
      );
  }, []);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={tokens.map((token) => token.name)}
      value={tokenName}
      onChange={(event: any, newValue) => {
        setTokenName(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
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
  const [tokenName, setTokenName] = React.useState<string | null>(null);
  const [walletAddress, setWalletAddress] = React.useState<string>("");
  const [response, setResponse] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTokenName("");
    setWalletAddress("");

    fetch(`${config.faucetApi}/request`, {
      method: "POST",
      body: JSON.stringify({ asset: tokenName, address: walletAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.reason);
        setTokenName(null);
        setWalletAddress("");
        setResponse(JSON.stringify(response));
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleWalletAddress = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWalletAddress(e.target.value);
  };

  return (
    <Card
      sx={{
        width: 500,
        height: "425px",
        p: "24px",
        background: "hsla(0,0%,100%,.24)",
        border: "1px solid #fff",
        borderRadius: "12px",
        boxShadow: "0 1px 4px rgba(0,0,0,.08)",
      }}
    >
      <CardContent
        component="form"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
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
        <ComboBox tokenName={tokenName} setTokenName={setTokenName} />
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
          onChange={handleWalletAddress}
          value={walletAddress}
          type="text"
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
          type="submit"
        >
          Submit
        </Button>
        {response ? (
          <Typography
            component="div"
            sx={{ fontSize: "10px", pb: 1, pt: 1, textAlign: "center" }}
          >
            {response}
          </Typography>
        ) : (
          <div></div>
        )}
      </CardContent>
    </Card>
  );
}
