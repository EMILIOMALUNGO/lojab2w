
import { Link } from "react-router-dom"



import { useState,useEffect} from "react"

import Imagem from "./foto.interfone/Imagem.jpg"
import Imagem1 from "./foto.interfone/Imagem1.jpg"
import Imagem2 from "./foto.interfone/Imagem2.jpg"
import Imagem3 from "./foto.interfone/Imagem3.jpg"
import Imagem4 from "./foto.interfone/Imagem4.jpg"

import Imagem16 from "./foto.interfone/Imagem16.jpg"


import "./IV710.css"

export default function IV710(){
    const [valor, setValor] = useState(1)
    const [mult, setMut] = useState()
  
    function aumentar() {
        setValor(valor + 1)
    }
    function diminuir() {
        if (valor === 1) {
            return
        }
        setValor(valor - 1)
    }
  
    useEffect(() => {
  
        let multi = valor * 2660.00
  
        setMut(multi)
  
  
    }, [valor])
    return (
        <div className="Interfone">
          

            <div className="InterfoneIV710">
                <div className="margemIV710">

                    <div className="foto1IV710">
                   <img src={Imagem16} alt={Imagem16}/>
                    </div>
             
                <div className="fotoIV710">
                    <img src={Imagem1} alt={Imagem1}/>
                    <img src={Imagem2} alt={Imagem2}/>
                    <img src={Imagem3} alt={Imagem3}/>
                    <img src={Imagem16} alt={Imagem16}/>  
                </div>
                </div>

                <div className="precoIV710">
                <div className="testoIV710">      
               <h1 >Módulo externo wT7</h1>
               <p>Linha Allo - módulo externo para <br/>
               Videoporteiro wT7 W wT7 Lite </p><br/>
              </div>
                    
              <div className='oldprince'>
                        <p2>R$ 671,89</p2>
                     </div>
                        <p>Por</p> 

                <h2>R$ 639,90</h2>
                    <p>no boleto ou tranferência PIX (5% de desconto)</p>
                  <p>ou 10x de R$ 68,81 sem juro </p>
                
                 <div className="botao12">
                  <Link className="icon" to="/IconCadastrar">COMPRAR AGORA</Link>
                  </div>
                  <div className="botao134">
                  <Link className="icon" to="/IconCarrinho">ADICIONAR NO CARRINHO</Link>
                  </div>
                
                </div>

            </div>
            <div className='legend10'>
                      <legend>Informações do produtos</legend>
                        <ul>
                            <li>Wi-Fi:atendimento e visualização via app <br/>
                             de qualquer lugar do mundo</li>
                            <li>Abertura DE Fechadura via app</li>
                            <li>Tela de 7"</li>
                            <li>Integração com até 3 Câmera Multi HD </li>
                        </ul> 
                    </div>

        </div>
    )
}