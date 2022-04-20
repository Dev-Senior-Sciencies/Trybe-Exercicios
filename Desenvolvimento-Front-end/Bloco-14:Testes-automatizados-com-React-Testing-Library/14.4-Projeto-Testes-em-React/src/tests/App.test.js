import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: /home/i });
      const about = screen.getByRole('link', { name: /About/i });
      const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });

      expect(home).toBeInTheDocument();

      expect(about).toBeInTheDocument();

      expect(favoritePokemons).toBeInTheDocument();
    });

  test(`Teste se a aplicação é redirecionada para a
  página inicial, na URL / ao clicar no link Home da
  barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });
  test(`Teste se a aplicação é redirecionada para a página de 
  About, na URL /about, ao clicar no link About da barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  test(`Teste se a aplicação é redirecionada para a página de Pokémons 
  Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons 
  da barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoritePokemons);
    expect(history.location.pathname).toBe('/favorites');
  });

  test(`Teste se a aplicação é redirecionada para a página Not Found ao 
  entrar em uma URL desconhecida.`,
  () => {
    const { history } = renderWithRouter(<App />);
    history.push('/dsadsadas');
    const notFound = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    userEvent.click(notFound);
    expect(notFound).toBeInTheDocument();
  });
});
