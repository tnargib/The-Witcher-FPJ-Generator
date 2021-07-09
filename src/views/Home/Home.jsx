import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { always, clamp, cond, equals, T } from "ramda";
import { useEffect, useState } from "react";
import { Jobs, Labels, Races } from "../../constants/constants";
import { d10, d6 } from "../../helpers/dice";
import { inRange } from "../../helpers/inRange";
import Carac from "./Carac";
import CaracDeriv from "./CaracDeriv";
import Evenements from "./Evenements";

const Home = () => {
  const [age, setAge] = useState(0);
  const [race, setRace] = useState(Races.DWARF);
  const [job, setJobs] = useState(Jobs.ARTISAN);

  const [character, setCharacter] = useState(null);
  const [caracs, setCaracs] = useState(null);
  const [derived, setDerived] = useState(null);

  useEffect(() => {
    setCharacter({ age, race, job });
  }, [age, race, job]);

  useEffect(() => {
    if (character)
      setCaracs({
        COR: d10(),
        REF: d10(),
        DEX: d10(),
        VIT: d10(),
        TECH: d10(),
        INT: d10(),
        VOL: d10(),
        EMP: character.race === Races.WITCHER ? d6() : d10(),
        CHA: d10(),
      });
  }, [character]);

  useEffect(() => {
    if (character && caracs) {
      const physic = (caracs.COR + caracs.VOL) / 2;
      setDerived({
        VIG: cond([
          [equals(Jobs.WIZARD), always(5)],
          [equals(Jobs.PRIEST), always(2)],
          [equals(Jobs.WITCHER), always(2)],
          [T, always(0)],
        ])(character.job),
        ETOU: clamp(2, 10, Math.floor(physic)),
        COU: caracs.VIT * 3,
        SAU: Math.floor((caracs.VIT * 3) / 5),
        PS: Math.floor(physic * 5),
        END: Math.floor(physic * 5),
        ENC: Math.floor(caracs.COR * 10),
        REC: Math.floor(physic),
        Poings: cond([
          [inRange(1, 2), always("1d6 - 4")],
          [inRange(3, 4), always("1d6 - 2")],
          [inRange(5, 6), always("1d6")],
          [inRange(7, 8), always("1d6 + 2")],
          [inRange(9, 10), always("1d6 + 4")],
          [inRange(11, 12), always("1d6 + 6")],
          [equals(13), always("1d6 + 8")],
        ])(caracs.COR),
        Pied: cond([
          [inRange(1, 2), always("1d6")],
          [inRange(3, 4), always("1d6 + 2")],
          [inRange(5, 6), always("1d6 + 4")],
          [inRange(7, 8), always("1d6 + 6")],
          [inRange(9, 10), always("1d6 + 8")],
          [inRange(11, 12), always("1d6 + 10")],
          [equals(13), always("1d6 + 12")],
        ])(caracs.COR),
      });
    }
  }, [character, caracs]);

  if (!character) return null;
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">The Witcher generator</Typography>
        </Toolbar>
        <Toolbar color="secondary">
          <Grid container justify="flex-start" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Age"
                type="number"
                size="small"
                fullWidth
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                select
                label="Race"
                size="small"
                fullWidth
                value={race}
                onChange={(e) => setRace(e.target.value)}
              >
                {Object.values(Races).map((val) => (
                  <MenuItem key={val} value={val}>
                    {Labels.Races[val]}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                select
                label="Profession"
                size="small"
                fullWidth
                value={job}
                onChange={(e) => setJobs(e.target.value)}
              >
                {Object.values(Jobs).map((val) => (
                  <MenuItem key={val} value={val}>
                    {Labels.Jobs[val]}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button onClick={() => setCharacter(Object.assign({}, character))}>Relancer</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box m={6}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={3}>
              {caracs && <Carac caracs={caracs} />}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              {derived && <CaracDeriv derived={derived} />}
            </Grid>
            <Grid item xs={12} lg={6}>
              <Evenements character={character} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
