import { Card, CardBody, CardTitle } from "reactstrap";

const Stats = ({ name, ranking, age, country, team, points }) => {
  return (
    <Card className="stats-styling">
      <CardBody>
        <div id="name">
          <h3>{name}</h3>
          <hr />
        </div>
        <div>{`Ranking: ${ranking}`}</div>
        <div>{`Age: ${age}`}</div>
        <div>{`Home Country: ${country}`}</div>
        <div>{`Team: ${team}`}</div>
        <div>{`points: ${points}`}</div>
      </CardBody>
    </Card>
  );
};

export default Stats;
