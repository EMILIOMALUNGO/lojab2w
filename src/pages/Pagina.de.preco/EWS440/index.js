import { useEffect,useState } from "react"

import { Link } from "react-router-dom"



import Image1 from "./foto.ews440/Image1.jpg"
import Image2 from "./foto.ews440/Image2.jpg"
import Image3 from "./foto.ews440/Image3.jpg"
import Image4 from "./foto.ews440/Image4.jpg"
import Image5 from "./foto.ews440/Image5.jpg"


import "./EWS440.css"

export default function EWS440() {


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

        let multi = valor * 78.76

        setMut(multi)


    }, [valor])


    return (
        <div className="lampada">
            

            <div className="lampadaEWS440">
                <div className="margemEWS440">

                    <div className="foto1ews440">
                        <img src={Image1} alt={Image1} />
                    </div>

                    <div className="fotoEWS440">
                        <img src={Image2} alt={Image2}/>
                        <img src={Image3} alt={Image3}/>
                        <img src={Image4} alt={Image4}/>
                        <img src={Image5} alt={Image5}/>
                    </div>
                </div>
           

                <div className="precoEWS440">
                <div className="testoEWS440">
              <h10>Lâmpada Led Spot Smart <br/> Wi-fi Intelbras Ews 440</h10>
              </div>
                    <div className='oldprince'>
                      <p>R$ 82,70</p>
                    </div>
                    <p>POR</p>
                    <h2>R$ 78,76</h2>
                    <p>à vista no boleto ou transferência (5% de desconto)<br/>
                    ou 82,90 à prazo <br/>
                    3x de R$ 27,63 sem juros</p>

                        <div className='contador'>
                    <div className='contador1'>
                            <div><button className='button' onClick={diminuir}>-</button> </div>
                            <div> <h2>{valor}</h2> </div>
                            <div> <button className='button' onClick={aumentar}>+</button> </div>
                        </div>
                        <div className='contador2'>

                            <h1>R$  {Number(mult).toFixed(2)}</h1>
                        </div>
                    </div>


                    <div className="botao12">
                        <Link className="icon" to="/IconCadastrar">COMPRAR AGORA</Link>
                    </div>
                    <div className="botao134">
                        <Link className="icon" to="/IconCarrinho">ADICIONAR NO CARRINHO</Link>
                    </div>

                </div>

            </div>

            <div className='informacaodoproduto'>
       
                   <div className='legend'>
                      <legend>Informações do produtos</legend>
                       <p>Crie diferentes ambientações e torne a sua casa
                        mais <br/> acochegante com os fachos de luz bem definidos
                       <br/> das lâmpada spot.</p>
                     </div>

                    <ul>
                        <li>Controle e automatize sua iluninação
                            com app Izy Smart.</li>
                        <li>Escolha entre 16 minlhões de cores para 
                            o seu ambiente</li>
                        <li>Ajuste a intencidade do brilho da luz e da
                            temperatura - <br/> branco quente ou branco frio</li>
                        <li>ângulo de fachos de 38º,garantindo um foco bem definido</li>
                    </ul>
                    
      
                </div>

        </div>
    )
}