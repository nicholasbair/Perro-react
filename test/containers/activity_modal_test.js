import { renderComponent, expect } from '../test_helper';
import ActivityModal from '../../src/containers/ActivityModal';

describe('ActivityModal', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ActivityModal);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('activity-modal');
  });

  it('shows activity letter', () => {
    expect(component.find('.modal-activity-letter')).to.exist;
  });

  it('shows a title', () => {
    expect(component.find('h3')).to.exist;
  });

  it('has a button group', () => {
    expect(component.find('.btn-group')).to.exist;
  });

  describe('entering length', () => {
    beforeEach(() => {
      component.find('.modal-input-length').simulate('change', '20');
    });

    it('shows that value in the input', () => {
      expect(component.find('.modal-input-length')).to.have.value('20');
    });
  });
});
