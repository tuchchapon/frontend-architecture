import { React, useState, Fragment } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Col, Row, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
      hight: "100",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  },
}));

export const MarathonData = ({ formData, setForm, navigation }) => {
    
  const classes = useStyles();
    const {
        expect_time
    } = formData
  return (
    <Fragment>
      <div className={classes.root}>
        <Paper>
          <h1 style={{ textAlign: "center" }}>ข้อมูลการวิ่ง</h1>
          <FormGroup tag="fieldset" row>
            <Grid
              container
              direction="row"
              margin={(10, 10, 10, 10)}
              spacing={1}
            >
              <Grid item md={6} xs={6}>
                <h4>
                  เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon
                  มาก่อนหรือไม่
                </h4>

                <Row>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio2" /> เคย
                    </Label>
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio2" /> ไม่เคย
                    </Label>
                  </FormGroup>
                </Row>
              </Grid>
              <Grid item md={6} xs={6}>
                <h4>เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)</h4>
                <TextField
                  name="expect_time"
                  type="time"
                  onChange={setForm}
                value={expect_time}
                  className={classes.textField}
                  variant="outlined"
                  autoComplete="off"
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
