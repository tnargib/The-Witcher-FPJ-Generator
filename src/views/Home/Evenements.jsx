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

const Evenements = () => {
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
            <TableRow>
              <TableCell>10</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>20</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>30</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>150</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Evenements;
