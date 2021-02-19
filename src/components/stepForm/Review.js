import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import IconButton from  '@material-ui/core/Icon'

import ListItemText from '@material-ui/core/ListItemText';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    prename_th,
    firstName_th ,
    lastName_th ,
    firstName_en ,
    lastName_en ,
    birth_date ,
    email ,
    id_card_no ,
    address ,
    phone ,
    BIB ,
    expect_time,
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
    <Container maxWidth='sm'>
      <h3>Review</h3>
      <RenderAccordion summary="Information" go={ go } details={[
           { 'คำนำหน้าชื่อ': prename_th },
        { 'First Name': firstName_th },
        { 'Last Name': lastName_th },
        { 'ชื่อภาษาอังกฤษ': firstName_en },
        { 'นามสกุลภาษาอังกฤษ': lastName_en },
        { 'วันเกิด': birth_date },
        { 'เลขบัตรประชาชน': id_card_no },
         { 'ที่อยู่': address },
         { 'ชื่อบนเบอร์วิ่ง (BIB)': BIB },
         { 'Phone': phone },
         { 'Email': email },
      ]} />
      <RenderAccordion summary="MarathonData" go={ go } details={[
       { 'เวลาที่คาดหวัง': expect_time },

      ]} />
      <RenderAccordion summary="EmergencyContact" go={ go } details={[
         { 'ชื่อ': name1 },
         { 'นามสกุล': lastname2 },
          { 'ความสัมพันธ์': relation1 }, 
           { 'เบอร์ติดต่อ': phone1 },
          { 'ชื่อ': name2 },
         { 'นามสกุล': lastname2 }, 
         { 'ความสัมพันธ์': relation2 },
         { 'เบอร์ติดต่อ': phone2 },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
      >
        Submit
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><Button variant="contained" color="primary">แก้ไขข้อมูล</Button></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)