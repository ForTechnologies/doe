import React, { useState } from "react";
import "./Inicio.css";
import Home from "../../assets/img-home/home.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const Inicio = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        paddingTop: "4rem",
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundColor: "#EFEFEF",
        backgroundImage: `url(${Home})`,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          width: "900px",
          height: "350px",
          borderLeft: "orange solid 2px",
          paddingLeft: "1.2rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <b
            style={{
              fontSize: "20px",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Voce pode mudar a vida de alguem
          </b>

          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Encontre pontos de <br />
              doações, ajude pessoas
            </h1>
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            No Doe! voce encontra as ongs mais proximas do seu
            <br />
            endereço. Venha fazer parte dessa grande rede de apoio <br />e ajude
            pessoas em situação de rua
          </div>

          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              className="btnCadastrar"
              onClick={() => navigate("/CadastroDoador")}
            >
              Cadastrar-se ➡{" "}
            </button>

            <Link
              to="sobre"
              spy={true}
              smooth={true}
              offset={-90}
              duration={600}
              onClick={closeMenu}
            >
              <button className="btnSaberMais"> ▶ Saiba Mais</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
