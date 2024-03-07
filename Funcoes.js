const textoCript = document.querySelector(".Cripto")
const textoDescript = document.querySelector(".Resultado")
function Criptografia(string) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let index = 0; index < matriz.length; index++) {
        if (string.includes(matriz[index][0])) {
            string = string.replaceAll(matriz[index][0], matriz[index][1]);
        }
    }
    return string;
    
}
function resultadoCriptografia() {
    const resultadoCript = Criptografia(textoCript.value);
    textoDescript.value = resultadoCript;
    textoCript.value = "";
}
function descriptografia(string) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let index = 0; index < matriz.length; index++) {
        if (string.includes(matriz[index][1])) {
            string = string.replaceAll(matriz[index][1], matriz[index][0]);
        }
    }
    return string;
    
}
function resultadoDescriptografia() {
    const resultadoCript = descriptografia(textoCript.value);
    textoDescript.value = resultadoCript;
    textoCript.value = "";
}

function copiando() {
    let textArea = document.querySelector(".Resultado");
    textArea.select();
    document.execCommand("copy");
    
}