const soma = require('../soma.js').soma;
const index = require('../index.js');


describe('Testes do Index.js no jest', function () {
    describe('Soma', function () {
        it('A soma de 1+1 é igual a 2', function(){
            let resultado = 1+1;
            expect(resultado).toBe(2);
        });

        it("A soma de 1+1 não é igual a 7", function(){
            let resultado = 1+1;
            expect(resultado).not.toBe(7);
        })
    });

    describe("Testes de Array", function () {
        let elemento = 3;
        it("O elemento " +  elemento +" está esta contido no array [1,2,3,4,5]", function(){
            expect(index.array1).toContain(elemento);
        })
        it("O elemento 'TDD é top' não está contido no array [6,7,8,9]", function(){
            expect(index.array2).not.toContain("TDD é top")
        })
    });

    describe("Testes de objeto", function () {
        it("O objeto {attr1: 13} possui o atributo attr1", function(){
           expect(index.obj1).toHaveProperty("attr1");
        })

        it("O objeto {attr3: 13} não possui o atributo attr1", function(){
            expect(index.obj2).not.toHaveProperty("attr1");
        })
    });

    describe("Teste das frases", function () {
        let frase1 = 'Não existe concorrente com a investtools para a melhor empresa para se estagiar'
        let frase2 = 'Investtools cuida melhor dos seus estagiários que a bloomberg.'
        let frase3 = "Somos parte do Programa de Formação da Investtools."
        it("A frase '"+ frase1 + "' contém a palavra Investtols", function () {
            expect(frase1).toMatch(/([Invesstools])/);
        });
        it("A frase '"+ frase2 + "' contém a palavra Investtols", function () {
            expect(frase2).toMatch(/([Invesstools])/);
        });
        it("A frase '"+ frase3 + "' contém a palavra Investtols", function () {
            expect(frase3).toMatch(/([Invesstools])/);
        });
    });

    describe("Teste da Função Soma", function () {
        it("A função soma retorna 2 para soma(1,1)", function () {
            expect(soma(1,1)).toBe(2);
        });
        it("A função soma retorna 4 para soma(2,2)", function () {
            expect(soma(2,2)).toBe(4);
        });
        it("A função soma retorna 9 para soma(4,5)", function () {
            expect(soma(4,5)).toBe(9);
        });
        it("A função soma retorna 13 para soma(6,7)", function () {
            expect(soma(6,7)).toBe(13);
        });
        it("A função soma retorna 18 para soma(9,9)", function () {
            expect(soma(9,9)).toBe(18);
        });
    });

    describe("Teste da página do Google", function () {
        let caminho = "https://www.google.com/";
    });
    
});