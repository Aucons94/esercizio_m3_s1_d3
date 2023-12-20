import React from "react";
import { Alert } from "react-bootstrap";

const NewWelcome = (props) => {
  return (
    <>
      <p className="text-center">BELLI I LIBRI </p>
      <Alert variant={props.color}>
        <Alert.Heading>Caricamento in corso...</Alert.Heading>
        <p>Il tuo contenuto sta per essere visualizzato.</p>
      </Alert>
    </>
  );
};

export default NewWelcome;
