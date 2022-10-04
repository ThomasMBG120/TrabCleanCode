
const Cerveja = 1;

 const Paises = {
    Libia: 1,
    Sudão: 2,
    EUA: 3,
    Egito: 4,
    Brasil: 5
 }

function PodeOuNãoBeber(TipoBebida, AnoNascimento, AnoAtual, Pais) {
    if (Pais === Paises.Libia)
        return false;
    else if (Pais === Paises.Sudão)
        return (AnoAtual - AnoNascimento) >= 16;
    else if (Pais === Paises.Egito)
        return (AnoAtual - AnoNascimento) >= 21;
    else if (Pais === Paises.EUA) {
        if (TipoBebida === Cerveja)
            return (AnoAtual - AnoNascimento) >= 21;
    }
    else if (Pais === Paises.Brasil) {
        return (AnoAtual - AnoNascimento) >= 18;
    }


}

export { PodeOuNãoBeber }; 