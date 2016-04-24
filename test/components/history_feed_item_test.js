import { renderComponent, expect } from '../test_helper';
import HistoryItem from '../../src/components/HistoryItem';

describe('HistoryItem', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HistoryItem);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows an avatar', () => {
    expect(component.find('.user-avatar')).to.exist;
  });
});
