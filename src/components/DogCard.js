import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

export default class DogCard extends Component {
  render() {
    let color = '#f5f6f6';
    let img = `./public/img/${this.props.img}`;

    return (
      <div onClick={() => this.props.fetchDog(this.props.dogId, 'update')}>
        <Col xs={4} className="dog-card">
          <Row>
            <Col xs={5}>
              <img
                className="dog-avatar"
                alt="dog avatar"
                src={img}
              >
              </img>
            </Col>
            <Col xs={7}>
              <h2 className="dog-name">{this.props.name}</h2>
              <h5 className="dog-tagline">{this.props.tagline}</h5>
            </Col>
          </Row>
          <div className="dog-activity-graph">
            <Sparklines height={80} width={280} data={this.props.durations}>
              <SparklinesLine color={color} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
        </Col>
      </div>
    );
  }
}

DogCard.propTypes = {
  fetchDog: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
