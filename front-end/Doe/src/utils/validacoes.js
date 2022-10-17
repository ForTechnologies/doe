

//----------------- validar nome ------------//


// export function ValidarNome() {

//     return (
//         <>
        
//         const nome = document.getElementById('idNome');

// if (nome.value.length < 8) {
//     idNome.style.borderColor = 'red';
//     validacao_nome.style.visibility = 'visible';

// } else {
//     idNome.style.borderColor = 'white';
//     validacao_nome.style.visibility = 'hidden';
// }

// // sumir mensagem ao apagar
// if (idNome.value == '') {
//     idNome.style.borderColor = 'white';
//     validacao_nome.style.visibility = 'hidden';
// }


        
        
//         </>
//     )

// }
   
//----------------- comparar email´s ------------//

// export function compara() {

//     var primeiroEmail = document.getElementById('email');
//     var segundoEmail = document.getElementById('comparaEmail');

//     if (primeiroEmail.value != segundoEmail.value) {
//         comparaEmail.style.borderColor = 'red';
//         validacao_comparaEmail.style.visibility = 'visible';
//     } else {
//         comparaEmail.style.borderColor = 'white';
//         validacao_comparaEmail.style.visibility = 'hidden';
//     }

//     // sumir mensagem ao apagar
//     if (primeiroEmail.value == '' || segundoEmail.value == '') {
//         comparaEmail.style.borderColor = 'white';
//         validacao_comparaEmail.style.visibility = 'hidden';
//     }
// }

// //--------- validação do email ----------- //

// export function validarEmail() {

//     var email = document.querySelector('#email');

//     if (!email.checkValidity()) {
//         // alert("deu errado");
//         email.style.borderColor = 'red';
//         div_msg1.style.visibility = 'visible';
//     } else {
//         email.style.borderColor = 'white';
//         div_msg1.style.visibility = 'hidden';
//     }

// }




// //-------------------------------mascara CNPJ ---------------------- //

// // Ressaltando que a validação é realizada conforme o algoritmo do CNPJ, o que significa que
// // um número válido não necessariamente é um número existente e com situação cadastral 
// //regular perante a Receita Federal do Brasil.


// export function mascaraCnpj() {


//     var cnpj = document.getElementById('idCnpj');


//     if (cnpj.value.length == 2 || cnpj.value.length == 6) {
//         cnpj.value += ".";

//     } else if (cnpj.value.length == 10) {
//         cnpj.value += "/";

//     } else if (cnpj.value.length == 15) {
//         cnpj.value += "-";
//     }


// }

// //função que compara
// export function validarCNPJ(el) {

//     if (!_cnpj(el.value)) {

//         idCnpj.style.borderColor = 'red';
//         validacao_CNPJ.style.visibility = 'visible';
//     } else {
//         // apaga o valor
//         //  el.value = "";
//         idCnpj.style.borderColor = 'white';
//         validacao_CNPJ.style.visibility = 'hidden';
//     }



//     // sumir mensagem ao apagar
//     if (idCnpj.value == '') {
//         idCnpj.style.borderColor = 'white';
//         validacao_CNPJ.style.visibility = 'hidden';
//     }

// }


// //------------------------------- função da validação do CNPJ ---------------------- //

// export function _cnpj(cnpj) {


//     // substituindo valores invalidos, para campo vazio (depois da virgula)
//     cnpj = cnpj.replace(/[^\d]+/g, '');

//     if (cnpj == '') return false; // se cnpj for igual a nada, retorna fals0

//     if (cnpj.length != 14)
//         return false; // se o tamanho for diferente de 14 retorna zero


//     if (cnpj == "00000000000000" ||
//         cnpj == "11111111111111" ||
//         cnpj == "22222222222222" ||
//         cnpj == "33333333333333" ||
//         cnpj == "44444444444444" ||
//         cnpj == "55555555555555" ||
//         cnpj == "66666666666666" ||
//         cnpj == "77777777777777" ||
//         cnpj == "88888888888888" ||
//         cnpj == "99999999999999")
//         return false; // eliminando numeros invalidos conhecidos 

//     //valida dvs
//     tamanho = cnpj.length - 2
//     numeros = cnpj.substring(0, tamanho);
//     digitos = cnpj.substring(tamanho);
//     soma = 0;
//     pos = tamanho - 7;

//     //A declaração for começa declarando a variável i e inicializando-a como o valor do tamanho.
//     // Ela verifica se i é maior ou igual que 1, executa as duas instruções subsequentes e decrementra 1 da variável i
//     // diminui e retorna o valor antes de diminuir. após cada passagem pelo loop.
//     for (i = tamanho; i >= 1; i--) {
//         soma += numeros.charAt(tamanho - i) * pos--; //valor de soma é reatribuido por numero, retorna o tamanho - o indice do i
//         if (pos < 2)
//             pos = 9;
//     }

//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11; // resultado, é a soma é subtraido de 11.
//     // e se for menor que 2, seu resultado é zero.


//     //segundo numero do dvs
//     if (resultado != digitos.charAt(0)) return false;
//     tamanho = tamanho + 1;
//     numeros = cnpj.substring(0, tamanho);
//     soma = 0;
//     pos = tamanho - 7;
//     for (i = tamanho; i >= 1; i--) {
//         soma += numeros.charAt(tamanho - i) * pos--;
//         if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(1))
//         return false;

//     return true;

// }

// //Na linha 3, eliminamos todos os caracteres não númericos do CNPJ passado como parâmetro, 
// //considerando que quem invocou a função pode ter utilizado-se de uma possível máscara no campo.

// //A instrução if da linha 7 verifica se a quantidade de numerais da string
// // (considerando-a já limpa) é igual a quantidade correta - 14.

// //As linha 10 à 21 checam se a string é formado apenas por valores iguais. 
// //Esta verificação é necessária uma vez que se aplicarmos o algoritmo do CNPJ.

// //As linha 23 à 49 checam os dois dígitos verificadores, 
// //verificando sua validade de acordo com o algoritmo do CNPJ. Caso negativo, a validação retorna false encerrando a função.

// //Caso o algoritmo alcance a linha 51 temos um CNPJ válido e o valor true é retornado.