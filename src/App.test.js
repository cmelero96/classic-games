import { render } from '@testing-library/react';
import App from './App';

test('App exists', () => {
  const result = render(<App />);
  const app = result.container.querySelector('#App');
  expect(app).toBeInTheDocument();
});
