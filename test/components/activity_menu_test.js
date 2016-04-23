import { renderComponent, expect } from '../test_helper';
import ActivityMenu from '../../src/components/ActivityMenu';

describe('ActivityMenu', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ActivityMenu);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a activity item', () => {
    expect(component.find('.activity-item')).to.exist;
  });
});
