const assert = require('chai').assert;
const soma = require('../soma.js').soma;
const index = require('../index.js');


describe('Testes do Index.js', function () {
    describe('Soma', function () {
        it('A soma de 1+1 é igual a 2', function(){
            let resultado = 1+1;
            assert.equal(resultado, 2);
        });

        it("A soma de 1+1 não é igual a 7", function(){
            let resultado = 1+1;
            assert.notEqual(resultado, 7)
        })
    });

    describe("Testes de Array", function () {
        let elemento = 3;
        it("O elemento " +  elemento +" está esta contido no array [1,2,3,4,5]", function(){
            assert.include(index.array1, elemento);
        })
        it("O elemento 'TDD é top' não está contido no array [6,7,8,9]", function(){
            assert.notInclude(index.array2, "TDD é Top");
        })
    });

    describe("Testes de objeto", function () {
        it("O objeto {attr1: 13} possui o atributo attr1", function(){
            assert.hasAnyKeys(index.obj1, ['attr1'])
        })

        it("O objeto {attr3: 13} não possui o atributo attr1", function(){
            assert.doesNotHaveAnyKeys(index.obj2, ['attr1'])
        })
    });

    describe("Teste das frases", function () {
        let frase1 = 'Não existe concorrente com a investtools para a melhor empresa para se estagiar'
        let frase2 = 'Investtools cuida melhor dos seus estagiários que a bloomberg.'
        let frase3 = "Somos parte do Programa de Formação da Investtools."
        it("A frase '"+ frase1 + "' contém a palavra Investtols", function () {
            assert.match(frase1, /([Invesstools])/);
        });
        it("A frase '"+ frase2 + "' contém a palavra Investtols", function () {
            assert.match(frase2, /([Invesstools])/);
        });
        it("A frase '"+ frase3 + "' contém a palavra Investtols", function () {
            assert.match(frase3, /([Invesstools])/);
        });
    });

    describe("Teste da Função Soma", function () {
        it("A função soma retorna 2 para soma(1,1)", function () {
            assert.equal(soma(1,1), 2);
        });
        it("A função soma retorna 4 para soma(2,2)", function () {
            assert.equal(soma(2,2), 4);
        });
        it("A função soma retorna 9 para soma(4,5)", function () {
            assert.equal(soma(4,5), 9);
        });
        it("A função soma retorna 13 para soma(6,7)", function () {
            assert.equal(soma(6,7), 13);
        });
        it("A função soma retorna 18 para soma(9,9)", function () {
            assert.equal(soma(9,9), 18);
        });
    });

    describe("Teste da página do Google", function () {
        let caminho = "https://www.google.com/";
    });
    
});