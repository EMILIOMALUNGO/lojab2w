
import { Link } from "react-router-dom"

import { useEffect,useState } from "react"


import Images6 from "./foto.cadeado2/Images6.jpg"
import Images7 from "./foto.cadeado2/Images7.jpg"
import Images8 from "./foto.cadeado2/Images8.jpg"
import Images9 from "./foto.cadeado2/Images9.jpg"
import Images10 from "./foto.cadeado2/Images10.jpg"




import "./IFR1001.css"

export default function IFR1001(){
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
        <div className="Fechadura">
           
            <div className="FechaduraIFR1001">
                <div className="margemIFR1001">

                    <div className="foto1IFR1001">
                   <img src={Images6} alt={Images6}/>
                    </div>
             
                <div className="fotoIFR1001">
                    <img src={Images7} alt={Images7}/>
                    <img src={Images8} alt={Images8}/>
                    <img src={Images9}  alt={Images9}/>
                    <img src={Images10} alt={Images10}/>
                </div>
                </div>

                <div className="precoIFR1001">
                <div className="testoIFR1001">      
                <h1>IFR 1001</h1> 
               <p>Fechadura smart de sobre por</p>
              </div>
              <div className='oldprince'>
                      <p>R$ 787,41</p>
                    </div>
                    <p>POR</p>

                 <h2>R$ 715,83</h2>
                 <p>À vista no PIX com até 10% OFF <br/>
                  Em até 10x de R$ 79,53 sem juros no cartão <br/>
                  Ou em 1x no cartão com até 10% OFF</p>

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

            <div className='legend3'>
                      <legend>Informações do produtos</legend>
              <ul>
                        <li>Controle locais,horário e data de entrada de <br/>
                        usuário ou libere visiras em tempo real</li>
                        <li>Cadastre até 100 senha de acessos</li>
                        <li>Crie rotina de acionamento e programa para <br/>
                        ligar TV,arcondicionado e luzes com acessos pela <br/>
                        senha da tua fechaduras </li>  
                    </ul>
              </div>


        </div>
    )
}

