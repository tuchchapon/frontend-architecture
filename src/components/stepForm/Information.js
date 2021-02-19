import React, { useState, Fragment } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ReactDOM from "react-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
export const Information = ({ formData, setForm, navigation }) => {
  const classes = useStyles();
  const {
    prename_th,
    firstName_th,
    lastName_th,
    firstName_en,
    lastName_en,
    birth_date,
    email,
    id_card_no,
    address,
    phone,
    BIB,
  } = formData;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper>
          <h1 style={{ textAlign: "center" }}>ข้อมูลส่วนตัว</h1>
          <FormGroup tag="fieldset" row >
          <Grid container direction="row" margin={(10, 10, 10, 10)} spacing={1}>
            <Grid item md={2} xs={2}>
              <FormGroup>
                <Input 
                  type="select"
                  name="select"
                  id="exampleSelect"
                  className={classes.dropdown}
                  style={{ height: 55 }}
                >
                  <option >นาย</option>
                  <option>นางสาว</option>
                  <option>นาง</option>
                </Input>
              </FormGroup>
            </Grid>
            <Grid item md={5} xs={5}>
              <TextField
                label="ชื่อ(ภาษาไทย)"
                name="firstName_th"
                value={firstName_th}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
              />
            </Grid>
            <Grid item md={5} xs={5}>
              <TextField
                label="นามสกุล(ภาษาไทย)"
                name="lastName_th"
                value={lastName_th}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                label="ชื่อ(ภาษาอังกฤษ)"
                name="firstName_en"
                value={firstName_en}
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
                label="นามสกุล(ภาษาอังกฤษ)"
                name="lastName_en"
                value={lastName_en}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={5}
              />
            </Grid>
            <Grid item md={2} xs={2}>
              <TextField
                label="วันเกิด"
                name="birth_date"
                value={birth_date}
                onChange={setForm}
                type="Date"
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={5}
              />
            </Grid>
            <Grid item md={5} xs={5}>
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={20}
              />
            </Grid>
            <Grid item md={3} xs={3}>
              <TextField
                label="เบอร์โทรศัพท์"
                name="phone"
                value={phone}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={10}
              />
            </Grid>
            <Grid item md={2} xs={2}>
              <TextField
                label="เลขบัตรประชาชน"
                name="id_card_no"
                value={id_card_no}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={13}
              />
            </Grid>
            <Grid item md={8} xs={8}>
              <TextField
                label="ที่อยู่"
                name="address"
                value={address}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={20}
              />
            </Grid>
            <Grid item md={4} xs={4}>
              <TextField
                label="ชื่อบนเบอร์วิ่ง (BIB)"
                name="BIB"
                value={BIB}
                onChange={setForm}
                className={classes.textField}
                variant="outlined"
                autoComplete="off"
                maxLength={10}
              />
            </Grid>
            <Grid item md={6} xs={6} textAlign>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={() => navigation.next()}
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
