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
import { always, clamp, cond, equals, T, times } from "ramda";
import { useEffect, useState } from "react";
import { Jobs, Labels, Races } from "../../constants/constants";
import { Parcours } from "../../constants/parcours";
import { coin, d10, d4, d6 } from "../../helpers/dice";
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
  const [events, setEvents] = useState(null);

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

  useEffect(() => {
    if (character) {
      const decades = Math.floor(character.age / 10);
      setEvents(
        times((i) => (i + 1) * 10, decades).map((decade) => {
          let event = null;

          const debug = [];

          const type = cond([
            [inRange(1, 4), always("chance")],
            [inRange(5, 7), always("friends")],
            [inRange(8, 10), always("relationship")],
          ])(d10());

          debug.push(type);

          switch (type) {
            case "chance":
              if (coin()) {
                event = cond([
                  [equals(1), always(Parcours.Chance["1"])],
                  [equals(2), always(Parcours.Chance["2"])],
                  [equals(3), always(Parcours.Chance["3"])],
                  [equals(4), always(Parcours.Chance["4"])],
                  [equals(5), always(Parcours.Chance["5"])],
                  [equals(6), always(Parcours.Chance["6"])],
                  [equals(7), always(Parcours.Chance["7"])],
                  [equals(8), always(Parcours.Chance["8"])],
                  [equals(9), always(Parcours.Chance["9"])],
                  [equals(10), always(Parcours.Chance["10"])],
                ])(d10());
              } else {
                event = cond([
                  [equals(1), always(Parcours.BadLuck["1"])],
                  [equals(2), always(Parcours.BadLuck["2"])],
                  [equals(3), always(Parcours.BadLuck["3"])],
                  [equals(4), always(Parcours.BadLuck["4"])],
                  [equals(5), always(Parcours.BadLuck["5"])],
                  [equals(6), always(Parcours.BadLuck["6"])],
                  [equals(7), always(Parcours.BadLuck["7"])],
                  [equals(8), always(Parcours.BadLuck["8"])],
                  [equals(9), always(Parcours.BadLuck["9"])],
                  [equals(10), always(Parcours.BadLuck["10"])],
                ])(d10());
              }
              break;
            case "friends":
              if (coin()) {
                event = {
                  title: "Ami",
                  content:
                    "- Relation: " +
                    Parcours.Friends.statut[d10()] +
                    "\n- Affinité: " +
                    Parcours.Friends.closeTo[d10()],
                };
              } else {
                event = {
                  title: "Ennemie",
                  content:
                    "- Relation: " +
                    Parcours.Ennemies.statut[d10()] +
                    "\n- Cause: " +
                    Parcours.Ennemies.dueTo[d10()] +
                    "\n- Influence: " +
                    Parcours.Ennemies.influence[d4()] +
                    "\n- Etat: " +
                    Parcours.Ennemies.state[d10()],
                };
              }
              break;
            case "relationship":
              const relationType = cond([
                [equals(1), always("Histoire idyllique")],
                [inRange(2, 4), always("Tragédie romantique")],
                [inRange(5, 6), always("Relations compliquées")],
                [inRange(7, 10), always("Débauche et prostituées")],
              ])(d10());
              debug.push(relationType);
              event = cond([
                [
                  equals("Histoire idyllique"),
                  always({
                    title: "Histoire idyllique",
                    content: "Un couple heureux... pour l'instant",
                  }),
                ],
                [
                  equals("Tragédie romantique"),
                  always({
                    title: "Tragédie romantique",
                    content: Parcours.RelationShip.romanticTragedy[d10()],
                  }),
                ],
                [
                  equals("Relations compliquées"),
                  always({
                    title: "Relations compliquées",
                    content: Parcours.RelationShip.complicatedTragedy[d10()],
                  }),
                ],
                [
                  equals("Débauche et prostituées"),
                  always({
                    title: "Débauche et prostituées",
                    content:
                      "Vous avez passé votre temps a coucher a droite et a gauche... Qui sait, vous avez peut-etre semé une collection de bâtards dans votre sillage.",
                  }),
                ],
              ])(relationType);
              break;
            default:
              break;
          }

          if (!event) console.error(debug);
          return [decade, event || { title: "", content: "unknown" }];
        }),
      );
    }
  }, [character]);

  if (!character) return null;
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">The Witcher Generator</Typography>
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
              {events && <Evenements events={events} />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
