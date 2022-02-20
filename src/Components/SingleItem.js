import React from "react";
import { Card,Button} from "react-bootstrap";

function SingleItem({ student }) {
  console.log(student);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
         {student.age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleItem;
