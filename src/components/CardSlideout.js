import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

export default class CardSlideout extends Component {
  render() {
    return (
      <div className="card-slideout">
        <Row>
          <Col xs={12}>
            <h4 className="card-slideout-heading">Card Heading</h4>
            <Sparklines className="card-slideout-graph">
              <SparklinesLine />
              <SparklinesReferenceLine />
            </Sparklines>
          </Col>
        </Row>
      </div>
    );
  }
}
