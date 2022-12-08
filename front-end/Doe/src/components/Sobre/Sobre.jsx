import React from "react";
import "./Sobre.css";
import Morador from "../../assets/img-home/morador.png";
import Star from "../../assets/img-home/star.png";
import Cube from "../../assets/img-home/cube.png";
import Quadrado from "../../assets/img-home/quadrado.png";
import Homem from "../../assets/img-home/homem.png";
import Mulher from "../../assets/img-home/mulher.png";

export const Sobre = () => {
  return (
    <div className="sobreAll" id="sobre">
      <div className="sobrepor">
        <div className="sobre">
          <div className="homeless">
            <img src={Morador} alt="" className="morador" />
          </div>
          <div className="plataforma">
            <span className="doe">DOE!</span>
            <h1 className="online">
              Plataforma Online Que <br />
              Une Ongs E Doadores!
            </h1>
            <div className="estrela">
              <img src={Star} alt="" />
              <span className="encontre">Encontre as ongs mais proximas</span>
            </div>
            <span className="campanha">
              No doe! voce encontra ongs e campanhas mais proximas de <br />
              sua localização, sem precisar sair pela cidade. com facilidade e{" "}
              <br />
              acesso!
            </span>
            <div className="participe">
              <img src={Cube} alt="" />
              <span className="parte">Participe da comunidade</span>
            </div>
            <span className="comunidade">
              Comunidades voltada as ongs, permite a entrada de milhares <br />
              de membros doadores. Voce, ong! crie sua comunidade, <br />
              conecte-se e atraia doadores.
            </span>
            <div className="rede">
              <img src={Quadrado} alt="" />
              <span className="apoio">Entre na rede de apoio </span>
            </div>
            <span className="pessoas">
              Encontre pessoas que tem muito em comum: empatia e intenção <br />
              de ajudar pessoas em situação de rua.
            </span>
          </div>
        </div>
        <div className="comentarios">
          <div className="comentOne">
            <img src={Homem} alt="" />
            <div className="com">
              <span className="coment">
                “Eu estava com muitas coisas em casa <br />
                como roupas, comida etc... acabava <br />
                disperdiçando e jogando fora. Mas <br />
                depois que conheci essa plataforma, <br />
                achei varias ongs perto que eu nao <br />
                conhecia. Com essa facilidade pude <br />
                que e judar muitas pessoas com doações.”
              </span>
            </div>
            <span className="aroba">@Henry silva</span>
          </div>
          <div className="comentTwo">
            <img src={Mulher} alt="" />
            <div className="com">
              <span className="coment">
                “Sou voluntaria em uma ong que ajuda <br />
                pessoas em situação de rua. Esses dias <br />
                estavamos pensando como nao temos <br />
                divulgação e alcance para trazer mais <br />
                doadores. Foi então que conheci o Doe! <br />
                Arrecadamos mais nas campanhas e <br />
                mais doadores”
              </span>
            </div>
            <span className="aroba">@Laisis pereira</span>
          </div>
        </div>
      </div>
    </div>
  );
};
