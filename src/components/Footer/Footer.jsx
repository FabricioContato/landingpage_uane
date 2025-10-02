import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.png"
import youtube from "../../img/youtube.png"
import uane_colors_logo from "../../img/uane_colors_logo.png"

import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer_bg}>
      <div className="container">
      <div className="row justify-content-around py-3">
       <div className="col-12 col-lg-3 text-center text-lg-start my-3 my-lg-0">
        <img src={uane_colors_logo} alt="" />
       </div>

       <div className="col-md-4 col-lg-3 row text-center my-3 my-md-0">
        <h5 className="col-12">Informações</h5>
        <a className={"col-12 " + style.custom_a} href="#">Perguntas Frequentes</a>
        <a className={"col-12 " + style.custom_a} href="#">Politica de Privacidade</a>
       </div>
       <div className="col-md-4 col-lg-3 row text-center my-3 my-md-0">
        <h5 className="col-12" >Fale conosco</h5>
        <a className={"col-12 " + style.custom_a} href="#">(85) 99332-8888</a>
       </div>

       <div className="col-md-4 col-lg-3 text-center my-3 my-md-0">
        <h5>Nos acompanhe nas redes sociais</h5>
        <div className="row justify-content-center">
          <img className="col-3 img-fluid" src={facebook} alt="" />
          <img className="col-3 img-fluid" src={instagram} alt="" />
          <img className="col-3 img-fluid" src={youtube} alt="" />
        </div>
       </div>
     </div>
     </div>
     <div style={{backgroundColor: "#1F6482"}}>
      <div className="container">
        <div className="row py-3 justify-content-between">
          <h5 className="col-8  text-start text-white fw-light">Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402</h5>
          <h5 className="col-4  text-end text-white">Expediente</h5>
        </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
