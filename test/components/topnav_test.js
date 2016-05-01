import { renderComponent, expect } from '../test_helper';
import TopNav from '../../src/components/TopNav';

describe('Navbar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TopNav);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
