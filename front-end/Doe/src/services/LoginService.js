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
            localStorage.setItem('dados do usuario', JSON.stringify(res.data.LoginUsuario))
            sessionStorage.setItem("idUsuario", res.data.usuario);
            sessionStorage.setItem("authenticado", res.data.autenticado);
            sessionStorage.setItem("autorizacoes", res.data.autorizacoes);
            sessionStorage.setItem("ong", res.data.ong);
            sessionStorage.setItem("endereco", res.data.endereco);
        
            console.log(res)
            this.state.res = res })
        .catch((error) => {
            console.log("erro ocorrido: ", error)
        })
    }
}

export default LoginService;

