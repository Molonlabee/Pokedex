import React from 'react'
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event ';
import { Searchbar } from './Searchbar';

test('Can get pokemon name on submit', () => {
    let pokemonName = '';
    const {getByRole} = render(<Searchbar onSearch={name => pokemonName = name}/>)
    userEvent.type(getByRole('textbox'), 'pikachu');
    userEvent.click(getByRole('button'));
    expect(pokemonName).toBe('pikachu');
})
