import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test(`Teste se é exibido na tela a mensagem
  No favorite pokemon found, se a pessoa não tiver pokémons favoritos.`, () => {
    renderWithRouter(<FavoritePokemons />);
    const msg = screen.getByText(/No favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(
      <FavoritePokemons pokemons={ pokemons } />,
    );

    pokemons.forEach((element) => {
      const namePokemons = screen.getByText(element.name);
      expect(namePokemons).toBeInTheDocument();
    });
  });
});
