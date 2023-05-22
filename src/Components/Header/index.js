import { Link } from "react-router-dom"



import { FaTruck } from "react-icons/fa"
import { SiFacebook } from "react-icons/si"
import { BsInstagram } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { FiShoppingCart } from "react-icons/fi"
import { BiUser } from "react-icons/bi"

import Image from "./Image.png"



import "./header.css"

export default function Header() {
  return (
    <div className="contaiconergeral">
      <div className="container113">

        <div className="superior1">
          <div className="car">
          <FaTruck size={25} color="#fff" />
          </div>
      
          <p>Frete grates a partir de R$ 99,00</p>
        </div>

        <div className="superior2">
          <div className="redessocias">
            <a href=""><SiFacebook size={25} color="#fff" /></a>
            <a href="https://www.instagram.com/emilio_shopee/"><BsInstagram size={25} color="#fff" /></a>
          </div>

          <div className="superior3">
            <div className="imagem">
              <img src={Image} alt={Image} className="img-fluid" />
            </div>
            <div className="titulo">
              <h1 className="testo1">Loja B2W<p className="testo">Loja de componentes eletronicos </p></h1>
            </div>

            <form>
              <div className="pesquisar">
                <input type="text" placeholder="Olá, o que procuras hoje?" />

                <button className="botao" type="submit"><FiSearch size={25} color="#fff" /></button>
              </div>
            </form>

            <div className="redessocias1">

              <Link to="/IconCarrinho" className="redessocias2"><FiShoppingCart size={25} color="#fff" />
                <span className="redessocias3">0</span>
              </Link>

              <Link to="/IconCadastrar"><BiUser size={25} color="#fff" /></Link>

            </div>
          </div>
        </div>
        <div>
        
          <div className="Cameras">
            <Link to="/"></Link>
            <div>
              <Link to="/Tipos"></Link>              
            </div>

            <div id="Sensores">
              <Link to="/Sensorestipos"></Link>
            </div>
            
            <div id="Roteador">
              <Link className="link" to="/Rotiador1"></Link>
             
            </div>
            <div>
          
              <Link to="/EWS440"></Link>
              <Link to="/ISS1001"></Link>
              <Link to="/IconCadastrar"></Link>
              <Link to="/IconCarrinho"></Link>
              <Link to="/VIP7250BIA"></Link>
              <Link to="/VIP72504G"></Link>
              <Link to="/FX2000AJ"></Link>
              <Link to="/IFR1001"></Link>
              <Link to="/VIP9425"></Link>
              <Link to="/VIP7200"></Link>
              <Link to="/Moduloexterno"></Link>
              <Link to="/IV710"></Link>
              <Link to="/IV710HS"></Link>
              <Link to="/Termodeuso"></Link>
              <Link to="/Regulamentos"></Link>
              <Link to="/Politicatroca"></Link>
              <Link to="/FAQ"></Link>
             
            </div>

            <div id="container1">
              <div id="superior">
                <div className="dropdown">
                  <button className="dropbtn"><a href="/" target="_self">Início</a><i className="fa fa-caret-down"></i></button>  
                </div>

                <div className="dropdown">
                  <button className="dropbtn"> Câmera<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Tipos" target="_self">Modelos de Câmeras</a>
                  </div>
                </div>


                <div className="dropdown">
                  <button className="dropbtn">Sensores<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Sensorestipos" target="_self">Tipos de Sensor</a>
                  </div>
                </div>


                <div className="dropdown">
                  <button className="dropbtn">Roteador <i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Roteador1" target="_self">Tipos de Roteador</a>
                  
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        
      </div>
    </div>

  )
}