import { renderComponent, expect } from '../test_helper';
import CardSlideout from '../../scr/components/CardSlideout';

describe('CardSlideout', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CardSlideout);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('card-slideout');
  });

  it('has a heading', () => {
    expect(component.find('.card-slideout-heading')).to.exist;
  });

  it('has a graph', () => {
    expect(component.find('.card-slideout-graph')).to.exist;
  });
});
