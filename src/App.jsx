import { CssBaseline, styled, ThemeProvider } from "@material-ui/core";
import IMGBackground from "./assets/img/background.jpeg";
import theme from "./styles/theme";
import Home from "./views/Home/Home";

const Container = styled("div")({
  backgroundImage: `url(${IMGBackground})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  minHeight: "100vh",
  width: "100vw",
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
