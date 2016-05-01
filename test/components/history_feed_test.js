import { renderComponent, expect } from '../test_helper';
import HistoryFeed from '../../src/components/HistoryFeed';

describe('HistoryFeed', () => {
  let component;

  beforeEach(() => {
    const props = {
      history: [
        {
          id: 1,
          type: 'walk',
          participant: 'Rocko',
          assessment: 'good',
          duration: 20,
          notes: ''
        },
        {
          id: 2,
          type: 'walk',
          participant: 'Rocko',
          assessment: 'good',
          duration: 15,
          notes: ''
        }
      ]
    };
    component = renderComponent(HistoryFeed, null, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('renders history feed parent', () => {
    expect(component.find('.history-feed-parent')).to.exist;
  });

  it('shows a history item', () => {
    expect(component.find('.history-item')).to.exist;
  });

  it('shows a history title', () => {
    expect(component.find('.history-feed-title')).to.exist;
  });
});
