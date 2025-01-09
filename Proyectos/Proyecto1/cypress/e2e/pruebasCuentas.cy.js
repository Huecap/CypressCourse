
/* Para declarar un test case lo hacemos con:
    describe
        - Primer parametro = Nombre del test case
        - Segundo parametro corresponde a la secuencia de instrucciónes
        que tiene que desarrollar
*/
describe('Cuentas', function(){
    var a = 1+1;
    var b = 2;
    /* Para Declarar instrucciónes (Steps)
    utilizmaos la funcion
    it
        - Primer parametro nombre de la instruccióne en cuestion
        - Segundo parametro conjunto de instrucciónes a ejecutar
    */
    it('Verificaremos que la suma de a + b sea correcta', function(){
        expect(a==b).to.equal(true);
    });

    it('Verificamos que la resta de a y b sea correcta', function(){
        expect(a-b).to.equal(0);
    })

})