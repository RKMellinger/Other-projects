import React, { useState } from "react";
import { Card, Col, Container } from "react-bootstrap";

// Card image https://images.squarespace-cdn.com/content/v1/56b390861d07c0e5348f61f6/1619023691162-OWBQ6X3XIH36IZOMGHFY/JRD02933_6.jpg?format=1500w

export default function Cannonball() {
  const [cannonBall, setCannonBall] = useState("");
  const randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber) {
    case (randomNumber = 0):
      setCannonBall = "Yar, It be certain...";
      break;
    case (randomNumber = 1):
      setCannonBall = "I feel it in me bones...";
      break;
    case (randomNumber = 2):
      setCannonBall = "There be treasure there";
      break;
    case (randomNumber = 3):
      setCannonBall = "ya, might walk da plank";
      break;
    case (randomNumber = 4):
      setCannonBall = "Deadmen tell no tales";
      break;
    case (randomNumber = 5):
      setCannonBall = "Set the sails and rigging";
      break;
    case (randomNumber = 6):
      setCannonBall = "Batten down the hatches!";
      break;
    default:
      setCannonBall = "The mists not be answering now, maybe later";
      break;
  }

  return (
    <Container>
      <Card className="eightball"></Card>
    </Container>
  );
}
