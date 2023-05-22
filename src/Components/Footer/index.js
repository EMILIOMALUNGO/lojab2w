
import { Link } from 'react-router-dom';

import {SiFacebook} from "react-icons/si"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"


import Image from "./Image.png"
import Imag from "./Imag.png"
import Imagemloja from "./Imagemloja.jpg"



import "./footer.css";

const Footer = () => {

    return (
        <footer className="footer">

            <div className='container11'>

                <div className='container3'>

                    <div className='container2'>
                        <div className='imagemtotal'>
                            <img src={Image}  alt={Image} className="img-fluid"/>
                        </div>
                        <div className='testo1'>
                            <h1>Loja B2W <br/> Loja de componentes <br/> eletronicos </h1>
                        </div>
                    <div  className="redes1">
                        <a href=""><SiFacebook size={35} color="#fff"/></a>
                     
                       <a href="https://www.instagram.com/emilio_shopee/"><BsInstagram  size={35} color="#fff"/></a>
                        </div>
  
                        
                    </div>

                    <div className='testo2'>
                        <p>
                            A B2W se compromete em utilizar todos os seu recursos para <br/>
                            atender melhor os seus clientes.Estamos trabalhando para <br/>
                            garantir essa transição até 2025.As imagens expostas neste <br/>
                            site são meramente ilustrativas.Preços apresentados na loja <br/>
                            virtual podem variar de acordo com a região. Informações sobre<br/>
                            preços,prazos de validade, estoque e podem ser obtidas  <br/>diretamente
                            nas lojas.Consulte a loja para verificar disponibilidade.  <br/> Preços,
                            estoques, informações e condições disponíveis  <br/>no site estão sujeitos
                            alterações sem aviso prévio.  <br/>*Preços e produtos da interbras são
                            válidos somente para <br/>compras realizadas na loja virtual sujeito a
                            disponibilidade de estoque.</p>
                    </div>

                </div>


                <div className="container4">
                
                    <div className='container5'>
                        <div className='fotoimagem'>
                            <img src={Imag} alt={Imag} className="img-fluid"/>
                            <p>Tudo sobre B2W</p>
                        </div>

                        <div className='fotoimagem'>
                         <img src={Imagemloja} alt={Imagemloja} className="img-fluid"/>
                         <p>Endereço da loja fisica: <br/>
                         Bauru s/p - Av. Nações Unidas, 40-40 <br/> Telf: (14) 3245-3818 </p>
                        </div>

                    </div>
                         <div className='cnpj'>
                            <p>© Copyright 2021. Todos os direitos reservados.<br/> B2W Comércio Eletrônico 
                             LTDA CNPJ 32.143.933/0001-24.</p>
                         </div>

                         <div className='colocarlink'>

                         <div className="link">
                         <Link className='link1' to="/Termodeuso">Termos de Uso</Link><br/>
                         <Link className='link1' to="/Regulamentos">Regulamentos</Link><br/>
                        <Link className='link1' to="/FAQ">FAQ</Link><br/>
                        </div>
                
                        <div className="link">
                        <Link className='link1'>Política de Privacidade </Link><br/>
                        <Link className='link1' to="/Politicatroca">Política de Trocas </Link><br/>
                         </div>

                         </div>


                      
                       
                </div>
            </div>


            <div className='comeco'>

                <div id="funcionamento">
                    <center>
                        <p className="testo">Horario de Funcionamento:<br />
                            Segunda á Sexta | 8:00 ás 18:00 </p>
                    </center>
                </div>

            </div>


        </footer>
    )
};
export default Footer;