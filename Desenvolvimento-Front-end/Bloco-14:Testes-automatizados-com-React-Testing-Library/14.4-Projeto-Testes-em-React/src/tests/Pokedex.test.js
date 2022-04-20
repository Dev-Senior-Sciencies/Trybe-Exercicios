import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const headingH2 = screen.getByRole('heading',
      { level: 2, name: /encountered pokémons/i });
    expect(headingH2).toBeInTheDocument();
  });
  test(`Teste se é exibido o próximo Pokémon da
  lista quando o botão Próximo pokémon é clicado`, () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByRole('button',
      { name: /próximo pokémon/i });
    expect(btnNext).toBeInTheDocument(); // verifica se tem o texto texto //

    userEvent.click(btnNext);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/caterpie/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/ekans/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/alakazam/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/mew/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/rapidash/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/snorlax/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/dragonair/i)).toBeInTheDocument();

    userEvent.click(btnNext);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const namePoke = screen.getAllByTestId('pokemon-name');

    expect(namePoke).toHaveLength(1);
  });
  test('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);

    const typeNames = [/dragon/i, /all/i, /electric/i, /fire/i, /bug/i, /poison/i,
      /psychic/i, /normal/i];

    typeNames.forEach((typesBtnFilter) => {
      expect(screen.getByRole('button', { name: typesBtnFilter })).toBeInTheDocument();
    });
    const electric = screen.getByRole('button', { name: /electric/i });

    userEvent.click(electric);

    const textElectric = screen.getAllByText(/electric/i);

    expect(textElectric).toHaveLength(2);

    expect(textElectric[0]).toBeInTheDocument();

    const btnTypes = screen.getAllByTestId(/pokemon-type-button/i);

    expect(btnTypes).toBeDefined();

    const btnAllVisible = screen.getByRole('button', { name: 'All' });
    userEvent.click(btnAllVisible);
    expect(btnAllVisible).toBeDefined();
  });
  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(btnAll);

    const pokeReset = screen.getByText(/pikachu/i);
    expect(pokeReset).toBeInTheDocument();
  });
});
