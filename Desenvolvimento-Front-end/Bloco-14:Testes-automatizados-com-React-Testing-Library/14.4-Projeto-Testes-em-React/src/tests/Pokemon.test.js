import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test(`Teste se é renderizado um card com as
  informações de determinado pokémon.`, () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByTestId('pokemon-name');
    const typePokemon = screen.getByTestId('pokemon-type');
    const weightPokemon = screen.getByTestId('pokemon-weight');
    const imgpika = screen.getByRole('img', { name: /pikachu sprite/i });
    const linkImage = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(namePokemon).toBeInTheDocument('Pikachu');
    expect(typePokemon).toHaveTextContent('Electric');
    expect(weightPokemon).toBeInTheDocument('Average weight: 6.0 kg');
    expect(imgpika).toHaveAttribute('src', linkImage);
  });
  test(`Teste se o card do Pokémon
  indicado na Pokédex contém um link
  de navegação para exibir detalhes
  deste Pokémon. O link deve possuir
  a URL /pokemons/<id>, onde <id> é o
  id do Pokémon exibido;`, () => {
    renderWithRouter(<App />);
    const linkNavegation = screen.getByRole('link', { name: /more details/i });
    expect(linkNavegation).toHaveAttribute('href', '/pokemons/25');
  });
  test(`Teste se ao clicar no link de
  navegação do Pokémon, é feito o redirecionamento
  da aplicação para a página de detalhes de Pokémon.`, () => {
    renderWithRouter(<App />);
    const linkNavegation = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkNavegation);
    screen.logTestingPlaygroundURL();
  });
  test(`Teste se existe um ícone de estrela nos
  Pokémons favoritados.`, () => {
    renderWithRouter(<App />);
    const linkN = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkN);
    const poKeMoFavorit = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(poKeMoFavorit);
    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
