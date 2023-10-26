import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App/> component', () => {

  // Prompt 1: The component Renders
  it('renders', () => {
    render(<App />);
  });

  // Prompt 2: h1 tag for the site title
  it('contains a h1 tag for the site title', () => {
    render(<App />);

    const titleHeading = screen.getByRole('heading', { level: 1 });
    expect(titleHeading).toBeDefined();
  });

  // Prompt 3: The site-title h1's textContent should be`A Song of Fire and Ice`
  it('site-title h1\'s innerText should be A Song of Fire and Ice', () => {
    render(<App />);

    const titleHeading = screen.getByRole('heading', { level: 1 });
    expect(titleHeading.textContent).toBe('A Song of Fire and Ice');
  });

  // Prompt 4: The App component should render a single instance of the`CharacterGallery`
  it('should render a list of characters', () => {
    render(<App />);

    const characterHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(characterHeadings.length).toBeGreaterThan(1);
  });

});
