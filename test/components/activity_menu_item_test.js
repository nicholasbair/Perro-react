import { renderComponent, expect } from '../test_helper';
import ActivityItem from '../../src/components/ActivityItem';

describe('ActivityItem', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ActivityItem);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows an icon', () => {
    expect(component.find('.activity-icon')).to.exist;
  });
});
