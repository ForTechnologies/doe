import api from "../api"

class LogoutService {

    constructor() {
        this.state = {
            res: [],
        };
    }

    logout(email) {
        return api.delete(`/usuario/logoff?email=${email}`)
        .then((res) => { 
            console.log(res)
            this.state.res = res })
        .catch((error) => {
            this.state.res = error
            console.log("erro ocorrido: ", error)
        })
    }
}

export default LogoutService;

