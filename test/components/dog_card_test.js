import { renderComponent, expect } from '../test_helper';
import DogCard from '../../src/components/DogCard';

describe('DogCard', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(DogCard);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has a image', () => {
    expect(component.find('.dog-avatar')).to.exist;
  });

  it('has a name', () => {
    expect(component.find('.dog-name')).to.exist;
  });

  it('has a tagline', () => {
    expect(component.find('.dog-tagline')).to.exist;
  });

  it('has a graph', () => {
    expect(component.find('.dog-activity-graph')).to.exist;
  });
});
