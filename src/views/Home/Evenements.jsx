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

const Evenements = ({ events }) => {
  return (
    <Card>
      <CardHeader title="Evènements" />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Evènement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(([year, { title, content }]) => (
              <TableRow>
                <TableCell>{year}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell style={{ whiteSpace: "break-spaces" }}>{content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Evenements;
