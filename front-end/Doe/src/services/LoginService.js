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
            console.log(res)
            this.state.res = res })
        .catch((error) => {
            console.log("erro ocorrido: ", error)
        })
    }
}

export default LoginService;

