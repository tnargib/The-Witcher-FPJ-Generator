import { CssBaseline, styled, ThemeProvider } from "@material-ui/core";
import IMGBackground from "./assets/img/background.jpg";
import theme from "./styles/theme";
import Home from "./views/Home/Home";

const Container = styled("div")({
  backgroundImage: `url(${IMGBackground})`,
  backgroundSize: `cover`,
  backgroundAttachment: `fixed`,
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
