import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { always, cond, equals } from "ramda";
import { Parcours } from "../../constants/parcours";
import { coin, d10, d4 } from "../../helpers/dice";
import { inRange } from "../../helpers/inRange";



const Evenements = ({ character }) => {
  

  const decades = Math.floor(character.age / 10)
  const events = new Array(decades).fill(null).map((_, i) => {

    let event = null
    
    const type= cond([
      [inRange(1, 4), always("chance")],
      [inRange(5, 7), always("friends")],
      [inRange(8, 10), always("relationship")]
    ])(d10())

    switch (type) {
      case "chance":
        if (coin()) {
          event = cond([
            [equals(1), always(Parcours.Chance[1])],
            [equals(2), always(Parcours.Chance[2])],
            [equals(3), always(Parcours.Chance[3])],
            [equals(4), always(Parcours.Chance[4])],
            [equals(5), always(Parcours.Chance[5])],
            [equals(6), always(Parcours.Chance[6])],
            [equals(7), always(Parcours.Chance[7])],
            [equals(8), always(Parcours.Chance[8])],
            [equals(9), always(Parcours.Chance[9])],
            [equals(10), always(Parcours.Chance[10])]
          ])(d10())
        } else {
           event = cond([
            [equals(1), always(Parcours.BadLuck[1])],
            [equals(2), always(Parcours.BadLuck[2])],
            [equals(3), always(Parcours.BadLuck[3])],
            [equals(4), always(Parcours.BadLuck[4])],
            [equals(5), always(Parcours.BadLuck[5])],
            [equals(6), always(Parcours.BadLuck[6])],
            [equals(7), always(Parcours.BadLuck[7])],
            [equals(8), always(Parcours.BadLuck[8])],
            [equals(9), always(Parcours.BadLuck[9])],
            [equals(10), always(Parcours.BadLuck[10])]
          ])(d10())

        }
        break
      case "friends":
        if (coin()) {
           event = {
            Statut: cond([
              [equals(1), always(Parcours.Friends.statut[1])],
              [equals(2), always(Parcours.Friends.statut[2])],
              [equals(3), always(Parcours.Friends.statut[3])],
              [equals(4), always(Parcours.Friends.statut[4])],
              [equals(5), always(Parcours.Friends.statut[5])],
              [equals(6), always(Parcours.Friends.statut[6])],
              [equals(7), always(Parcours.Friends.statut[7])],
              [equals(8), always(Parcours.Friends.statut[8])],
              [equals(9), always(Parcours.Friends.statut[9])],
              [equals(10), always(Parcours.Friends.statut[10])]
            ])(d10()),
            CloseTo: cond([
              [equals(1), always(Parcours.Friends.closeTo[1])],
              [equals(2), always(Parcours.Friends.closeTo[2])],
              [equals(3), always(Parcours.Friends.closeTo[3])],
              [equals(4), always(Parcours.Friends.closeTo[4])],
              [equals(5), always(Parcours.Friends.closeTo[5])],
              [equals(6), always(Parcours.Friends.closeTo[6])],
              [equals(7), always(Parcours.Friends.closeTo[7])],
              [equals(8), always(Parcours.Friends.closeTo[8])],
              [equals(9), always(Parcours.Friends.closeTo[9])],
              [equals(10), always(Parcours.Friends.closeTo[10])]
            ])(d10())
          }
        } else {
           event = {
            Statut: cond([
              [equals(1), always(Parcours.Ennemies.statut[1])],
              [equals(2), always(Parcours.Ennemies.statut[2])],
              [equals(3), always(Parcours.Ennemies.statut[3])],
              [equals(4), always(Parcours.Ennemies.statut[4])],
              [equals(5), always(Parcours.Ennemies.statut[5])],
              [equals(6), always(Parcours.Ennemies.statut[6])],
              [equals(7), always(Parcours.Ennemies.statut[7])],
              [equals(8), always(Parcours.Ennemies.statut[8])],
              [equals(9), always(Parcours.Ennemies.statut[9])],
              [equals(10), always(Parcours.Ennemies.statut[10])]
            ])(d10()),
            DueTo: cond([
              [equals(1), always(Parcours.Ennemies.dueTo[1])],
              [equals(2), always(Parcours.Ennemies.dueTo[2])],
              [equals(3), always(Parcours.Ennemies.dueTo[3])],
              [equals(4), always(Parcours.Ennemies.dueTo[4])],
              [equals(5), always(Parcours.Ennemies.dueTo[5])],
              [equals(6), always(Parcours.Ennemies.dueTo[6])],
              [equals(7), always(Parcours.Ennemies.dueTo[7])],
              [equals(8), always(Parcours.Ennemies.dueTo[8])],
              [equals(9), always(Parcours.Ennemies.dueTo[9])],
              [equals(10), always(Parcours.Ennemies.dueTo[10])]
            ])(d10()),
            Influence: cond([
              [equals(1), always(Parcours.Ennemies.influence[1])],
              [equals(2), always(Parcours.Ennemies.influence[2])],
              [equals(3), always(Parcours.Ennemies.influence[3])],
              [equals(4), always(Parcours.Ennemies.influence[4])],
            ])(d4()),
            State: cond([
              [equals(1), always(Parcours.Ennemies.state[1])],
              [equals(2), always(Parcours.Ennemies.state[2])],
              [equals(3), always(Parcours.Ennemies.state[3])],
              [equals(4), always(Parcours.Ennemies.state[4])],
              [equals(5), always(Parcours.Ennemies.state[5])],
              [equals(6), always(Parcours.Ennemies.state[6])],
              [equals(7), always(Parcours.Ennemies.state[7])],
              [equals(8), always(Parcours.Ennemies.state[8])],
              [equals(9), always(Parcours.Ennemies.state[9])],
              [equals(10), always(Parcours.Ennemies.state[10])]
            ])(d10())
          }
        }
        break
      case "relationship":
        const relationType = cond([
          [equals(1), always("Histoire idyllique :")],
          [inRange(2, 4), always("Tragédie romantique :")],
          [inRange(5, 6), always("Relations compliquées :")],
          [inRange(7, 10), always("Débauche et prostituées :")]
        ])(d10())
         event = cond([
          [equals("Histoire idyllique :"), always({title: 'Histoire idyllique :',content:"Un couple heureux... pour l'instant"})],
          [equals("Tragédie romantique :"), always(Parcours.RelationShip.romanticTragedy[d10()])],
          [equals("Relations compliquées :"), always(Parcours.RelationShip.complicatedTragedy[d10()])],
          [equals("Débauche et prostituées"), always({title: "Débauche et prostituées :",content: "Vous avez passé votre temps a coucher a droite et a gauche... Qui sait, vous avez peut-etre semé une collection de bâtards dans votre sillage."})]
         ])(relationType)
        break
      default:
        break
    }
    return [(i + 1) * 10, event || {title: '', content: 'unknown'}]
  })
  
  return (
      <Card>
        <CardHeader title="Evènements" />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Age</TableCell>
                <TableCell>Evènement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {events.map(([year, { title, content }]) => (
                <TableRow>
                  <TableCell>{year }</TableCell>
                  <TableCell>{content}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  };


export default Evenements;



