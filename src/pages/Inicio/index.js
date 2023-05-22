import { useRef } from "react"; 


import { Link } from "react-router-dom"
import Imagem0 from "./fotos.inicio/Imagem0.png"
import Imagem2 from './fotos.inicio/Imagem2.jpg'
import Imagem3 from "./fotos.inicio/Imagem3.jpg"
import Imagem4 from "./fotos.inicio/Imagem4.png"
import Imagem5 from "./fotos.inicio/Imagem5.jpg"
import Imagem6 from "./fotos.inicio/Imagem6.jpg"
import Imagem7 from "./fotos.inicio/Imagem7.jpg"
import Imagem8 from "./fotos.inicio/Imagem8.png"
import Imagem9 from "./fotos.inicio/Imagem9.jpg"
import Imagem10 from './fotos.inicio/Imagem10.jpg'
import Imagem11 from "./fotos.inicio/Imagem11.jpg"
import Imagem12 from "./fotos.inicio/Imagem12.jpg"
import Imagem13 from "./fotos.inicio/Imagem13.jpg"
import Imagem14 from "./fotos.inicio/Imagem14.jpg"
import Imagem15 from "./fotos.inicio/Imagem15.jpg"
import Imagem16 from "./fotos.inicio/Imagem16.jpg"
import Imagem17 from "./fotos.inicio/Imagem17.png"
import Imagem18 from "./fotos.inicio/Imagem18.jpg"
import seta1 from "./setas/seta1.jpg"
import seta2 from "./setas/seta2.jpg"



import './inicio.css'

export default function Inicio() {
    const carousel = useRef(null);
    

    return (
        <div className="contaiconergeral2">

            <div>
                <div className="iniciogeral">

                    <div className="inicio11">
                        <div>
                            <h1>Linha IZY</h1>
                            <p>Energia</p>
                            <p>Iluminação</p>
                            <p>Lar e Entretenimento</p>
                            <p>Segurança</p>
                        </div>

                        <div >
                            <h2>Segurança Eletrônica</h2>
                            <p>CFTV</p>
                            <p>Linha future</p>
                            <p>CFTV Multi HD</p>
                            <p>CFTV HDCVI</p>
                            <p>Softwares</p>
                            <p>Acessores</p>
                        </div>
                        <div>
                            <h2>Instrusão</h2>
                            <p>Centrais de Alarmes</p>
                            <p>Eletrificadores</p>
                            <p>Sensores de abertura magnética</p>
                            <p>Sensor de movimento passivo</p>
                            <p>Sensor de barreira</p>
                            <p>Acessores</p>
                        </div>


                    </div>


                    <div className="ladoesquero">

                        <h1 className="testo4">Busque os produtos na B2W<p className="testo5"> Encha o seu ambiente com os produtos Interbras</p></h1>

                        <div className="foto1">

                            <div className="tema">
                                <h2>Ambiente Tecnológico</h2>
                            </div>

                            <div className="foto2">

                                <div>
                                    <img src={Imagem0} alt={Imagem0} className="img-fluid" />
                                </div>

                                <div className="foto3">
                                    <div className="foto4">
                                        <img src={Imagem2} alt={Imagem2} className="img-fluid" />
                                    </div>
                                    <div className="foto5">
                                        <img src={Imagem3} alt={Imagem3} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="preco1">
                <Link className="icon" to="/EWS440">
                    <div className="preco2">
          
                        <h1> EWS 440</h1>
                        <img src={Imagem6} alt={Imagem6} className="img-fluid" />
                        <p>Lampada LED sport smart Wi-fi</p>

                        <p4>R$ 82,71</p4>

                        <p>Por</p>    
                        <h2>R$ 78,76</h2>
                        <p3>(5% de desconto)</p3>
                        <p>à vista no boleto ou transferência.<br />  
                            ou 82,90 a prazo 3x de R$ 27,63 <br/> sem juros</p>
                    </div>
                </Link>
             

                <Link className="icon" to="/ISS1001">
                    <div className="preco2">
                        <h1>ISS 1001</h1>
                        <img src={Imagem9} alt={Imagem9} className="img-fluid" />
                        <p>Sistema de segurança smart</p>

                        <p4>R$ 893,50</p4>

                        <p>Por</p>  
                        <h2>R$ 850,92 </h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                            ou 5x de R$ 179,14 <br/> sem juros  ou 12x de 83,09</p>
                    </div>
                </Link>

                <Link className="icon" to="/VIP7250BIA">
                    <div className="preco2">
                        <h1>VIP 7250 B IA</h1>
                        <img src={Imagem10} alt={Imagem10} className="img-fluid" />
                        <p>Câmera IP minibullet com inteligencia artificial</p>
                            
                        <p4>R$ 1584,90</p4>

                        <p>Por</p>  
                        <h2>R$ 1.505,66</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 1584,90 a prazo ou 8x de R$ 198,11 sem juros </p>
                      </div>
                </Link>


                <Link className="icon" to="/VIP72504G">
                    <div className="preco2">
                        <h1>VIP 7250 4G IA FT</h1>
                        <img src={Imagem11} alt={Imagem11} className="img-fluid" />
                        <p>Câmera IP de video bullet 4G</p>

                        <p4>R$ 1.320,81</p4>

                        <p>Por</p>  
                        <h2>R$ 1.257,92</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 5x de R$ 252 sem juros ou 12x de 100</p>
                      </div>
                </Link>
            </div>

            <div className="preco1">
                <Link className="icon" to="/FX2000AJ">
                    <div className="preco2">
                        <h1 >FX 2000 AJ</h1>
                        <img src={Imagem5} alt={Imagem5} className="img-fluid" />
                        <p>Fechadura elétrica para portões abertura <br /> para dentro
                            e para fora com ou sem batente</p>
       
                        <p4>R$ 248,90</p4>

                        <p>Por</p>  
                        <h2>R$ 226,25</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         Em até 10x de R$ 25,13 com juros no cartão<br />
                         Ou em 1x no cartão com 10% OFF </p>
                      </div>


                </Link>

                <Link className="icon" to="/IFR1001">
                    <div className="preco2">
                        <h1>IFR 1001</h1>
                        <img src={Imagem7} alt={Imagem7} className="img-fluid" />
                        <p>Fechadura smart de sobre por</p>

                        <p4>R$ 787,41</p4>

                        <p>Por</p>  
                        <h2>R$ 715,83</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         Em até 10x de R$ 79,53 com juros no cartão<br />
                         Ou em 1x no cartão com 10% OFF </p>
                      </div>
                </Link>   

                <Link className="icon" to="/VIP9425">
                    <div className="preco2">
                        <h1 >VIP 9425 Dual SD IA FT</h1>
                        <img src={Imagem15} alt={Imagem15} className="img-fluid" />
                        <p>Câmera IP com 2 PTZ e 25x de zoom</p>

                        <p4>R$ 4.584,316</p4>

                        <p>Por</p>  
                        <h2>R$ 4.167,56</h2>
                         <p3> (10% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 4.386,90 à prazo <br /> 8x de R$ 548,36 sem juros</p>
                      </div>
                </Link>


                <Link className="icon" to="/VIP7200">
                    <div className="preco2">
                        <h1>VIP 7200 TH FT</h1>
                        <img src={Imagem14} alt={Imagem14} className="img-fluid" />
                        <p>Câmera bullet IP térmica</p>
                        
                        <p4>R$ 2.730</p4>

                        <p>Por</p>  
                        <h2>R$ 2.660</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         10x R$ 266 reais sem juros</p>
                      </div>
                </Link>
            </div>

            <div className="preco1">

                <Link className="icon" to="/Moduloexterno">
                    <div className="preco2">
                        <h1 >Módulo externo wT7</h1>
                        <img src={Imagem18} alt={Imagem18} className="img-fluid" />
                        <p>Linha Allo - módulo externo para <br />
                            Videoporteiro wT7 W wT7 Lite </p>

                            <p4>R$ 680,81</p4>

                        <p>Por</p>  
                        <h2>R$ 639,90</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 10x de R$ 68,81 sem juro </p>
                      </div>      
                </Link>


                <Link className="icon" to="/IV710">
                    <div className="preco2">
                        <h1>IV 7010 HF HD</h1>
                        <img src={Imagem16} alt={Imagem16} className="img-fluid" />
                        <p>Videoporteiro Multi HD</p><br />
                        
                        <p4>R$ 1.440,50</p4>

                        <p>Por</p>  
                        <h2>R$ 1.371,90</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 5X de R$ 274,38 no Cartão sem juros</p>
                      </div>
                </Link>


                <Link className="ico" to="/IV710HS">
                    <div className="preco2">
                        <h1>IV 7010 HS</h1>
                        <img src={Imagem17} alt={Imagem17} className="img-fluid" />
                        <p>Videoporteiro</p><br />

                        <p4>R$ 1.440,50</p4>

                        <p>Por</p>  
                        <h2>R$ 1.371,90</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 5X de R$ 274,38 no Cartão sem juros</p>
                      </div>
                </Link>
                
            </div>
            

           <div className="todoscarrossel">

         <div className="carousel" ref={carousel} >
            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem6} alt={Imagem6} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Lampada LED sport smart Wi-fi</span>
                <span className="oldprince">R$ 82,71</span>
                <span className="prince">R$ 78,76</span>
             </div>
            </div>



            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem17} alt={Imagem17} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Interfone do tipo Video porteiro</span>
                <span className="oldprince">R$ 1.440,50</span>
                <span className="prince">R$ 1.371,90</span>
             </div>
            </div>
            

            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem14} alt={Imagem14} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Câmera do tipo bullet IP térmica</span>
                <span className="oldprince">R$ 2.730</span>
                <span className="prince">R$ 2.660</span>
             </div>
            </div>
          
            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem15} alt={Imagem15} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Câmera do tipo VIP 9360 PAN IA</span>
                <span className="oldprince">R$ 670,99 </span>
                <span className="prince">R$ 670,99 </span>
             </div>
            </div>
       
            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem7} alt={Imagem7} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Fechadura smart de sobre por IFR</span>
                <span className="oldprince">R$ 787,41</span>
                <span className="prince">R$ 715,83</span>
             </div>
             </div>   
                    
            <div className="item">
             <div className="fotocarousel">
             <img src={Imagem10} alt={Imagem10} className="img-fluid" />
             </div>
             <div className="info">
                <span className="name">Câmera minibullet com inteligencia</span>
                <span className="oldprince">R$ 1584,90</span>
                <span className="prince">R$ 1.505,66</span>
             </div>
             </div>

            </div>
           

           </div>   
                        
        </div>


    )
}