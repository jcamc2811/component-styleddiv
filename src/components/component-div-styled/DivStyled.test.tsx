import React from 'react';
import { render, screen } from '@testing-library/react';
import DivStyled from './DivStyled';

describe("DivStyled Component", () => {
    test("Verificar se o componente está rodando normalmente", () => {
        render(
            <DivStyled>
                <p>Hello</p>
            </DivStyled>
        );

        const result = screen.getByTestId("div-test");

        expect(result).toBeDefined();
    });

    test("Verifica se o componente está rodando normalmente apenas com o atributo ConfigTitle", () => {
        render(
            <DivStyled configTitle={{tagTitle: "h1", colorTitle: "red", sizeTitle: "50px", paddingTitle: "0px 50px"}}>
                <h1>Hello World!</h1>
            </DivStyled>
        );

        const result = screen.getByTestId("div-test");

        expect(result).toBeDefined();
        expect(result).toHaveTextContent("Hello World");
    });

    test("Verifica se o componente está rodando normalmente apenas com o atributo ConfigText", () => {
        render(
            <DivStyled configText={{tagText: "p", colorText: "blue", sizeText: "50px", paddingText: "0px 50px"}}>
                <p>Hello World!</p>
            </DivStyled>
        );

        const result = screen.getByTestId("div-test");

        expect(result).toBeDefined();
        expect(result).toHaveTextContent("Hello World");
    });

    test("Verifica se o componente está rodando normalmente apenas com o atributo ConfigDiv", () => {
        render(
            <DivStyled configDiv={{colorDiv: "green", marginDiv: "10px 50px", paddingDiv: "0px 50px", widthDiv: "100%", heightDiv: "500px"}}>
                <h1>Hello World!</h1>
                <p>Hello World!</p>
            </DivStyled>
        );

        const result = screen.getByTestId("div-test");

        expect(result).toBeDefined();
        expect(result).toHaveTextContent("Hello World");
    });

    test("Verifica se o componente está rodando normalmente com todos os atributos setados", () => {
        render(
            <DivStyled configTitle={{tagTitle: "h1", colorTitle: "red", sizeTitle: "50px", paddingTitle: "0px 50px"}}
                       configText={{tagText: "p", colorText: "blue", sizeText: "50px", paddingText: "0px 50px"}}
                       configDiv={{colorDiv: "green", marginDiv: "10px 50px", paddingDiv: "0px 50px", widthDiv: "100%", heightDiv: "500px"}}>
                <h1>Hello World!</h1>
                <p>Hello World!</p>
            </DivStyled>
        );

        const result = screen.getByTestId("div-test");

        expect(result).toBeDefined();
        expect(result).toHaveTextContent("Hello World");
    });
});