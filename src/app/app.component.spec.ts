import { render, fireEvent, screen } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  it('should navigate to About page when clicking the About button', async () => {
    await render(AppComponent, {
      imports: [RouterTestingModule.withRoutes(routes)]
    });

    fireEvent.click(screen.getByText('About'));

    expect(window.location.pathname).toBe('/about');
  });
});
