import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import fovaritedfromId from '../mocks/fovaritedfromId';
import PokemonDetails from '../components/PokemonDetails';
import match from '../mocks/match';
import pokemons from '../data';

describe(' Teste o componente <PokemonDetails.js />', () => {
  test(`Teste se as informações detalhadas
  do Pokémon selecionado são mostradas na tela.`, () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ fovaritedfromId }
        match={ match }
        pokemons={ pokemons }
        onUpdateFavoritePokemons={ () => {} }
      />,
    );
    const pikaDetails = screen.getByRole(
      'heading', { name: 'Pikachu Details', level: 2 },
    );

    const detailsLink = screen.queryByRole('link', { name: 'More details' });

    const headerH2 = screen.getByRole('heading', { name: 'Summary', level: 2 });

    const resuPokemon = screen.getByText(
      /This intelligent Pokémon roasts hard berries with electricity to make them/i,
    );

    expect(pikaDetails).toBeInTheDocument();

    expect(detailsLink).toBeFalsy();

    expect(headerH2).toBeInTheDocument();

    expect(resuPokemon).toBeInTheDocument();

    expect(resuPokemon.tagName).toBe('P');
  });
  test(`Teste se existe na página uma seção
  com os mapas contendo as localizações do pokémon`, () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ fovaritedfromId }
        match={ match }
        pokemons={ pokemons }
        onUpdateFavoritePokemons={ () => {} }
      />,
    );
    const titlePk = screen.getByRole(
      'heading', { name: 'Game Locations of Pikachu', level: 2 },

    );
    const txtLocation1 = screen.getByText('Kanto Viridian Forest');

    const txtLocation2 = screen.getByText('Kanto Power Plant');

    const pikaLocation = 'Pikachu location';

    const imgsLocation = screen.getAllByRole(
      'img', { name: pikaLocation },
    );

    expect(titlePk).toBeInTheDocument();

    expect(txtLocation1).toBeInTheDocument();

    expect(txtLocation2).toBeInTheDocument();

    expect(imgsLocation).toHaveLength(2);

    expect(imgsLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

    expect(imgsLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    expect(imgsLocation[0]).toHaveAttribute('alt', pikaLocation);

    expect(imgsLocation[1]).toHaveAttribute('alt', pikaLocation);
  });

  test(`Teste se o usuário pode favoritar um pokémon
  através da página de detalhes.`, () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ fovaritedfromId }
        match={ match }
        pokemons={ pokemons }
        onUpdateFavoritePokemons={ () => {} }
      />,
    );
    const pokeMFavoritado = 'Pokémon favoritado?';

    const checkbox = screen.getByRole(
      'checkbox', { name: pokeMFavoritado },
    );
    const labelCheck = screen.getByLabelText(pokeMFavoritado);
    expect(labelCheck.type).toBe('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});
