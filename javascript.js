function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if (valor === '=') {
            var valor_campo = document.getElementById('resultado').value;
            try {
                var resultado = new Function('return ' + valor_campo)();
                document.getElementById('resultado').value = resultado;
            } catch (e) {
                document.getElementById('resultado').value = 'Erro';
            }
        }
    } else if (tipo === 'valor'){
        document.getElementById('resultado').value += valor

    }
}