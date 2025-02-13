import { render, screen } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('should render home page title', async () => {
    await render(HomeComponent);
    expect(screen.getByText('Welcome to the Home Page')).toBeTruthy();
  });
});
