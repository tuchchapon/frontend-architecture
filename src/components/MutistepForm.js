import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Information } from "./stepForm/Information";
import { MarathonData } from "./stepForm/MarathonData";
import { Contact } from "./stepForm/EmergencyContact";
import { Medicalinfo } from "./stepForm/MedicalInfo";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/submit";

const defaultData = {
  prename_th: "",
  firstName_th: "",
  lastName_th: "",
  firstName_en: "",
  lastName_en: "",
  birth_date: "",
  email: "",
  id_card_no: "",
  address: "",
  phone: "",
  BIB: "",
  expect_time: "",
};

const steps = [
  { id: "information" },
  { id: "marathondata" },
  { id: "emergencycontact" },
  { id: "Medicalinfo" },
  { id: "Review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "information":
      return <Information {...props} />;
    case "marathondata":
      return <MarathonData {...props} />;
    case "emergencycontact":
      return <Contact {...props} />;
    case "Medicalinfo":
      return <Medicalinfo {...props} />;
    case "Review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
