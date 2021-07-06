import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import Carac from "./Carac";
import CaracDeriv from "./CaracDeriv";
import Evenements from "./Evenements";

const Home = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">The Witcher generator</Typography>
        </Toolbar>
        <Toolbar color="secondary">
          <Grid container justify="flex-start" alignItems="stretch" spacing={3}>
            <Grid item>
              <TextField label="Age" fullWidth />
            </Grid>
            <Grid item>
              <Select label="Race" fullWidth>
                <MenuItem value={10}>Humain</MenuItem>
                <MenuItem value={20}>Nain</MenuItem>
                <MenuItem value={30}>Sorcelleur</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Select label="profession" fullWidth>
                <MenuItem value={10}>Magicien</MenuItem>
                <MenuItem value={20}>Commercant</MenuItem>
                <MenuItem value={30}>Barde</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={3}>
            <Carac />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <CaracDeriv />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Evenements />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
