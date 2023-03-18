import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import Home from "../Components/Home";
import store from "../redux/store";
import thunk from "redux-thunk";

import '@testing-library/jest-dom'

const mockStore = configureMockStore([thunk]);

describe('Test suit for Home Component', () => {
    const initialState = {
        types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }, { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
        error: false,
        isLoading: false,
        filteresType: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }, { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
    }

    const pokemonsTypeReducer = createSlice({
        name: 'types',
        initialState,
    })

    const store = configureStore({
        reducer: {
            types: pokemonsTypeReducer.reducer
        }
    })
    const wrapper = (component) => (
        <Provider store={store}>
            <BrowserRouter>
                {component}
            </BrowserRouter>
        </Provider>
    );

    it('Should return pokemons by type', () => {
        render(wrapper(<Home />));
        expect(screen.getByText(/POKEMONS BY TYPE/i)).toBeInTheDocument();
    });
    it('Should display the correct number of types', () => {
        render(wrapper(<Home />));
        expect(screen.getByText(/2 types/i)).toBeInTheDocument();
    });
    it('Should display the types correctly', () => {
        render(wrapper(<Home />));
        const typeLinks = screen.getAllByRole('link');
        expect(typeLinks).toHaveLength(2);
    
        const normalType = typeLinks[0];
        expect(normalType).toHaveAttribute('href', '/pokemons/normal');
        expect(normalType).toHaveTextContent('NORMAL');
        expect(normalType).toHaveTextContent('10');
    
        const fightingType = typeLinks[1];
        expect(fightingType).toHaveAttribute('href', '/pokemons/fighting');
        expect(fightingType).toHaveTextContent('FIGHTING');
        expect(fightingType).toHaveTextContent('10');
    });
})