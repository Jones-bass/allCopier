import imgCamisa from '../assets/camisa.png';
import imgCaneca from '../assets/copo.jpg';

import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import "../styles/Post.css";


const Post = () => {
  return (

    <section>
      <section>
        <div className="conteudo">
          <div className="intro">
            <span className="detail"></span>
            <h1>Camiseta Personalizada</h1>
            <p className="text">Crie sua CAMISA AGORA! Solte a sua imaginação. A gente faz o resto.</p>
            <a className="buttonRed" href="boto">PERSONALIZE!</a>
          </div>
          <img className="imgPersonalizados" src={imgCamisa} alt="Personalizados" />
        </div>

        <div className="conteudo">
          <div className="intro">
            <span className="detail"></span>
            <h1>Copos Personalizados</h1>
            <p className="text">Criamos sua caneca também! Solte a sua imaginação e vamos presentear aquela pessoal ESPECIAL.</p>
            <a className="buttonRed" href="boto">PERSONALIZE!</a>
          </div>
          <img className="imgPersonalizados" src={imgCaneca} alt="Personalizados" />
        </div>
      </section>

      <h2>Vantagens</h2>

      <div className="vantagens">
        <div className="vantagens-item">
          <img className="" src={icon1} alt="icon1" />

          <h3>Brindes para os Campeões</h3>
          <p>Experiências e conteúdos exclusivos para membros os da Nação.</p>
        </div>
        <div className="vantagens-item">
          <img className="" src={icon2} alt="icon2" />
          <h3>Acesso à rede de parceiros</h3>
          <p>Tem prioridade de desconto na compra de ingressos.</p>
        </div>
        <div className="vantagens-item">
          <img className="" src={icon3} alt="icon3" />
          <h3>Somos 70.551 sócios-torcedores</h3>
          <p>Vem com a gente e vamos deixar a nosso Mengão cada vez mais forte!.</p>
        </div>
      </div>
    </section>
  )
}

export default Post;