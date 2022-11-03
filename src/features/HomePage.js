import { Col, Row } from "reactstrap";
import { FEMALE_CYCLISTS_RANKING_2022 } from "../DATA/top5FemaleCyclists";
import RiderCard from "./RiderCard";
import { useState } from "react";
import Stats from "./Stats";

const HomePage = () => {
  const [stats, setStats] = useState(FEMALE_CYCLISTS_RANKING_2022);
  const [showStats, setShowStats] = useState(false);

  const displayStats = (rider) => {
    setStats(rider);
    setShowStats(true)
  };

  return (
    <>
      <h1 className="header-text">
        Top 5 Ranked Female Road Cyclists in the World, 2022
      </h1>
      <Row>
        {FEMALE_CYCLISTS_RANKING_2022.map((rider, id) => {
          return (
            <Col sm="4" onClick={() => displayStats(rider)}>
              <RiderCard name={`${rider.name}`} image={rider.image} />
            </Col>
          );
        })}
      </Row>
      {showStats ? (
        <Row className="mt-5 mx-auto ms-auto">
          <Col sm="8">
            <Stats
              name={stats.name}
              age={stats.age}
              ranking={stats.ranking}
              country={stats.country}
              team={stats.team}
              points={stats.points}
            />
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default HomePage;
