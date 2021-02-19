import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Col, Row, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "-1rem 0 2rem 0",
    padding: "0 7rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    marginTop: "auto",
  },
  textField: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  dropdown: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: 30,
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  },
}));
export const Medicalinfo = ({ formData, setForm, navigation }) => {
  const classes = useStyles();
  const {

  } = formData;

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper>
          <h1 style={{ textAlign: "center" }}>ข้อมูลทางการแพทย์</h1>
          <FormGroup tag="fieldset" row>
          <h4>ข้อมูลทางการแพทย์</h4>
            <Grid
              container
              direction="row"
              margin={(10, 10, 10, 10)}
              spacing={1}
            >
             
              <Grid item md={6} xs={6}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  onClick={() => navigation.previous()}
                  style={{ width: "100%" }}
                >
                  Back
                </Button>
              </Grid>
              <Grid item md={6} xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => navigation.next()}
                  style={{ width: "100%" }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
            
          </FormGroup>
        </Paper>
      </div>
    </Fragment>
  );
};
