import "./App.css";
import BasicCard from "./components/Card";
import ButtonAppBar from "./components/Navber";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Typography component="div" className="App">
      <ButtonAppBar />
      <BasicCard />
    </Typography>
  );
}

export default App;
