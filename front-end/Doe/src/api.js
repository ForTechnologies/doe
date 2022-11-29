import axios from 'axios'; // importando biblioteca axios das dependências do projeto


// declarando constante com instância do axios que recebe objeto de configuração com a URL base para realizar as requisições
const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        client_id: process.env.CLIENT_ID,

    },
});


api.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const access_token = localStorage.getItem("access_token");
      if (error.response.status === 401 && access_token) {
        const response = await refreshToken(error);
        return response;
      }
      return Promise.reject(error);
    }
  );


  async function refreshToken(error) {
    return new Promise((resolve, reject) => {
      try {
        const refresh_token = localStorage.getItem("refresh_token");
        const header = {
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION,
        };
        const parameters = {
          method: "POST",
          headers: header,
        };
        const body = {
          grant_type: "refresh_token",
          refresh_token,
        };
        axios
          .post(
            process.env.API_URL + "/refreshtoken",
            body,
            parameters
          )
          .then(async (res) => {
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("refresh_token", res.data.refresh_token);
            // Fazer algo caso seja feito o refresh token
            return resolve(res);
          })
          .catch((err) => {
            // Fazer algo caso não seja feito o refresh token
            return reject(error);
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

export default api; // exportando a constante api para que possa ser acessada por outros componentes