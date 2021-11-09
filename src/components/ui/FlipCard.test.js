import { render, screen } from '@testing-library/react';
import FlipCard from './FlipCard';

describe('FlipCard Component', () => {
  test('wraps the two first direct children and their respective children', () => {
    render(
      <FlipCard>
        <div>1</div>
        <div>
          <span>2</span>
        </div>
      </FlipCard>
    );

    const cardFront = screen.queryByText('1');
    const cardBack = screen.queryByText('2');

    expect(cardFront).toBeInTheDocument();
    expect(cardBack).toBeInTheDocument();
  });

  test('discards any direct children beyond the second one', () => {
    render(
      <FlipCard>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </FlipCard>
    );

    const leftOutElements = [
      screen.queryByText('3'),
      screen.queryByText('4'),
      screen.queryByText('5'),
    ];

    leftOutElements.forEach((leftOutElement) =>
      expect(leftOutElement).not.toBeInTheDocument()
    );
  });

  // TODO: Investigate Enzyme to be able to do these skipped-for-now tests
  test.skip('leaves the back side empty when wrapping only one direct children', () => {});

  test.skip('renders nothing if wrapping no children', () => {});

  // TODO: I hate this double quote. There sure is a way to fix Prettier trolling me on this
  test.skip("changes size if 'height' and 'width' props are passed", () => {});

  test.skip('applies the .flipped class when clicked on', () => {});
});
