import { render } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('HomeComponent Snapshot', () => {
  it('should match the snapshot', async () => {
    const { container } = await render(HomeComponent);
    expect(container).toMatchSnapshot();
  });
});
