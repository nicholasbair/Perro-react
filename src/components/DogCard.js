import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class DogCard extends Component {
  render() {
    let name = 'Rocko';
    let color = '#f5f6f6';
    let values = this.props.durations;

    return (
      <div>
        <Col xs={4} className="dog-card">
          <Row>
            <Col xs={5}>
              <img className="dog-avatar" alt="dog avatar" src="./public/img/rocko.jpeg"></img>
            </Col>
            <Col xs={7}>
              <h2 className="dog-name">{name}</h2>
              <h5 className="dog-tagline">Badass Rescue</h5>
            </Col>
          </Row>
          <div className="dog-activity-graph">
            <Sparklines height={80} width={280} data={values}>
              <SparklinesLine color={color} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
        </Col>
        {/*<Col xs={4} className="dog-card">
          <Row>
            <Col xs={5}>
              <img className="dog-avatar" alt="dog avatar" src="./public/img/rocko.jpeg"></img>
            </Col>
            <Col xs={7}>
              <h2 className="dog-name">{name}</h2>
              <h5 className="dog-tagline">Badass Rescue</h5>
            </Col>
          </Row>
          <div className="dog-activity-graph">
            <Sparklines height={80} width={280} data={values}>
              <SparklinesLine color={color} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
        </Col>*/}
      </div>
    );
  }
}
