import api from "../api"

class LoginService {

    constructor() {
        this.state = {
            res: [],
        };
    }

    login(LoginUsuario) {
        return api.post(`/login`, LoginUsuario)
        .then((res) => { 
            sessionStorage.setItem("idUsuario", res.data.idDoador);
            sessionStorage.setItem("nome", res.data.nome);
            sessionStorage.setItem("email", res.data.cpf);
            sessionStorage.setItem("sexo", res.data.sexo);
            sessionStorage.setItem("tipoSanguineo", res.data.tipoSanguineo);
            sessionStorage.setItem("doadorOrgao", res.data.doadorOrgao);
            sessionStorage.setItem("dtDoacao", res.data.dtDoacao);
            sessionStorage.setItem("dtNascimento", res.data.dtNascimento);
            console.log(res)
            this.state.res = res })
        .catch((error) => {
            console.log("erro ocorrido: ", error)
        })
    }
}

export default LoginService;

