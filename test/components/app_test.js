import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a navbar', () => {
    expect(component.find('.navbar')).to.exist;
  });

  it('shows a activity menu', () => {
    expect(component.find('.activity-menu')).to.exist;
  });

  it('shows a history feed', () => {
    expect(component.find('.history-feed')).to.exist;
  });

  it('shows a dog card', () => {
    expect(component.find('.dog-card')).to.exist;
  });
});
