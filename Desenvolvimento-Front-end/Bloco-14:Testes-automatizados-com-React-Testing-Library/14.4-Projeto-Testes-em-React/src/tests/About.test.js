import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const inform = (
      /One can filter Pokémons by type, and see more details for each one of them/i);
    const infopqdx = screen.getByText(inform);
    expect(infopqdx).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const headingH2 = screen.getByRole('heading',
      { level: 2, name: /about Pokédex/i });
    expect(headingH2).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const tagFromText = (
      /this application simulates a Pokédex, a digital encyclopedia containing /i);
    const tagFromTextTwo = (
      /one can filter Pokémons by type, and see more details for each one of them/i);
    const textOne = screen.getByText(tagFromText);
    const textTwo = screen.getByText(tagFromTextTwo);
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    renderWithRouter(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', { name: /Pokédex/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(url);
  });
});
