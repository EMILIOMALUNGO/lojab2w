
import { Link } from "react-router-dom"


import { useEffect,useState } from "react"

import Imge from "./foto/Imge.jpg"
import Imge1 from "./foto/Imge1.jpg"
import Imge2 from "./foto/Imge2.jpg"
import Imge3 from "./foto/Imge3.jpg"
import Imge4 from "./foto/Imge4.jpg"

import "./IV710HS.css"

export default function IV710HS(){
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

      let multi = valor * 1371.90

      setMut(multi)


  }, [valor])


    return (
        <div className="Interfone">
          

            <div className="InterfoneIV710HS">
                <div className="margemIV710HS">

                    <div className="foto1IV710HS">
                   <img src={Imge2} alt={Imge2}/>
                    </div>
             
                <div className="fotoIV710HS">
                    <img src={Imge1} alt={Imge1}/>
                    <img src={Imge4} alt={Imge4}/>
                    <img src={Imge3} alt={Imge3}/>
                    <img src={Imge} alt={Image}/>  
                </div>
                </div>

                <div className="precoIV710HS">
                <div className="testoIV710HS">      
            <h1>IV 7010 HS</h1>
             <p>Videoporteiro</p>
          </div>
          <div className='oldprince'>
                        <p2>R$ 1440,95</p2>
                     </div>
                        <p>Por</p> 

                <h2> R$ 1.371,90</h2> 
              <p> à vista no cartão ou no boleto ou <br/>
               5X de R$ 274,38 no Cartão sem juros</p>
                
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
            <div className='legend9'>
                      <legend>Informações do produtos</legend>
                  <ul>
                    <li>Permite visualizar até 4 câmeras</li>
                    <li>Função Siga-me:encaminha a chamada <br/>
                    para um telefone e aciona fechaduras <br/> remotamente</li>
                    <li>Abre até 2 portôes:social e de garagem</li>
                </ul> 
                  </div>



        </div>
    )
}