import {render, queryByAltText} from '@testing-library/react';
import React from 'react';
import {SearchResult} from './components/SearchResult';

test('Show Pokemon Name', () => {
    const {queryByText} = render(<SearchResult pokemon={ditto} />);
    expect (queryByText(ditto.name)).toBeInTheDocument();
});

test('Show Pokemon Image', () => {
    const {queryByAltText } = render(<SearchResult pokemon={ditto} />);
    expect (queryByAltText(ditto.name)).toBeInTheDocument();
});

test('Show Pokemon Abilities', () => {
    const {queryByText} = render(<SearchResult pokemon={ditto} />);
    expect (queryByText(ditto.abilities[0].ability.name)).toBeInTheDocument();
});

test('Pokemon Not Found', () => {
    const {queryByText} = render(<SearchResult pokemon={null} />);
    expect(queryByText('No Pokemon Found'));
});