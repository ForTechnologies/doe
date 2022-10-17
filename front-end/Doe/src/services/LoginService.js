import api from "../api"

class LoginService {

    constructor() {
        this.state = {
            res: [],
        };
    }

    login(email, senha) {
        return api.post(`/usuario/login?email=${email}&senha=${senha}`)
        .then((res) => { 
            console.log(res)
            this.state.res = res })
        .catch((error) => {
            console.log("erro ocorrido: ", error)
        })
    }
}

export default LoginService;

