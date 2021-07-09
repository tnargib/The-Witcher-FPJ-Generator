import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";

const CaracDeriv = ({ derived }) => {
  return (
    <Card>
      <CardHeader title="Dérivées" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            Vigueur (VIG)
          </Grid>
          <Grid item xs={2}>
            {derived.VIG}
          </Grid>

          <Grid item xs={10}>
            Etourdissement (ETOU)
          </Grid>
          <Grid item xs={2}>
            {derived.ETOU}
          </Grid>

          <Grid item xs={10}>
            Course (COU)
          </Grid>
          <Grid item xs={2}>
            {derived.COU}
          </Grid>

          <Grid item xs={10}>
            Saut (SAU)
          </Grid>
          <Grid item xs={2}>
            {derived.SAU}
          </Grid>

          <Grid item xs={10}>
            Points de Santé (PS)
          </Grid>
          <Grid item xs={2}>
            {derived.PS}
          </Grid>

          <Grid item xs={10}>
            Endurance (END)
          </Grid>
          <Grid item xs={2}>
            {derived.END}
          </Grid>

          <Grid item xs={10}>
            Encombrement (ENC)
          </Grid>
          <Grid item xs={2}>
            {derived.ENC}
          </Grid>

          <Grid item xs={10}>
            Récupération (REC)
          </Grid>
          <Grid item xs={2}>
            {derived.REC}
          </Grid>

          <Grid item xs={10}>
            Poings
          </Grid>
          <Grid item xs={2}>
            {derived.Poings}
          </Grid>

          <Grid item xs={10}>
            Pieds
          </Grid>
          <Grid item xs={2}>
            {derived.Pied}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CaracDeriv;
