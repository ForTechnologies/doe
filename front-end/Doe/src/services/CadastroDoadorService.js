import api from "../api"

class CadastroDoadorService {

    constructor() {
        this.state = {
            res: [],
        };
    }

    cadastrar(DoadorFormatado, EnderecoFormato) {
        return api.post("/usuarios", DoadorFormatado)
            .then((res) => { 
                console.log("resposta obtida: ", res); 
                this.state.res = res;

                if (res.status === 201) {
                    this.cadastrarEndereco(EnderecoFormato);
                }
            })
            .catch((error) => {
                this.state.res = error.response;
                console.log("erro ocorrido: ", this.state.res)
            })
    }

    cadastrarEndereco(EnderecoFormato) {
        return api.post("/usuario/endereco", EnderecoFormato)
            .then((res) => {
                console.log("resposta obtida endereco: ", res)
                this.state.res = res;
            })
            .catch((error) => {
                this.state.res = error.response;
                console.log("erro ocorrido: ", this.state.res)
            })
    }
}

export default CadastroDoadorService;

