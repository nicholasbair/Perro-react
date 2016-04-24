import { renderComponent, expect } from '../test_helper';
import HistoryFeed from '../../src/components/HistoryFeed';

describe('HistoryFeed', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HistoryFeed);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a history item', () => {
    expect(component.find('.history-item')).to.exist;
  });

  it('shows a history title', () => {
    expect(component.find('.history-feed-title')).to.exist;
  });
});
