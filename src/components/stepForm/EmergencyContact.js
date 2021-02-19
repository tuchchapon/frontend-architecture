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
export const Contact = ({ formData, setForm, navigation }) => {
  const classes = useStyles();
  const {
    name1,
    lastname1,
    relation1,
    phone1,
    name2,
    lastname2,
    relation2,
    phone2,
  } = formData;

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper>
          <h1 style={{ textAlign: "center" }}>ข้อมูลผู้ติดต่อฉุกเฉิน</h1>
          <FormGroup tag="fieldset" row>
          <h4>ผู้ติดต่อฉุกเฉินคนที่ 1</h4>
            <Grid
              container
              direction="row"
              margin={(10, 10, 10, 10)}
              spacing={1}
            >
              <Grid item md={6} xs={6}>
                
                <TextField
                  label="ชื่อ"
                  name="name1"
                  value={name1}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={5}
                  erorText="Please enter only 12 digits number"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  label="นามสกุล"
                  name="lastname1"
                  value={lastname1}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={5}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  label="เบอร์โทรศัพท์"
                  name="phone1"
                  value={phone1}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={10}
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextField
                  label="ความสัมพันธ์"
                  name="relation1"
                  value={relation1}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={10}
                />
              </Grid>
              <Grid item md={12} xs={12}>
              <h4 >ผู้ติดต่อฉุกเฉินคนที่ 2</h4>
              </Grid>
              <Grid item md={6} xs={6}>
                
                <TextField
                  label="ชื่อ"
                  name="name2"
                  value={name2}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={5}
                  erorText="Please enter only 12 digits number"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  label="นามสกุล"
                  name="lastname2"
                  value={lastname2}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={5}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  label="เบอร์โทรศัพท์"
                  name="phone2"
                  value={phone2}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={10}
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextField
                  label="ความสัมพันธ์"
                  name="relation2"
                  value={relation2}
                  onChange={setForm}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
                  maxLength={10}
                />
              </Grid>
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
