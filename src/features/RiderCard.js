import { Card, CardHeader, CardImg, CardBody, CardText } from "reactstrap";

const RiderCard = ({ name, image }) => {
  return (
    <Card className="card">
      <CardBody>
        <CardHeader>
          <h3>{name}</h3>
        </CardHeader>
        <CardImg src={image} style={{ borderRadius: "5%" }} />
        <CardText className="card-text">Click for more information</CardText>
      </CardBody>
    </Card>
  );
};

export default RiderCard;
