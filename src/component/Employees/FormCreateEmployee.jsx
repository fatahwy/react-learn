import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Fragment } from "react";
import { Button, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
  },
}));

const FormCreateEmployee = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h4" gutterBottom>
        Formulir Employee
      </Typography>
      <Paper className={classes.paper}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="first_name"
              name="first_name"
              label="Nama Depan"
              fullWidth
              value={props.data.first_name}
              autoComplete="first-name"
              autoFocus
              onChange={(e) => props.handleChange(e.target)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="last_name"
              name="last_name"
              label="Nama Belakang"
              fullWidth
              value={props.data.last_name}
              autoComplete="last-name"
              onChange={(e) => props.handleChange(e.target)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="E-Mail"
              fullWidth
              value={props.data.email}
              autoComplete="email"
              onChange={(e) => props.handleChange(e.target)}
            />
          </Grid>
          <Grid container item xs={12} justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleSubmit}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default FormCreateEmployee;
