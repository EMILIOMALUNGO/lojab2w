
import { useEffect,useState} from "react"


import { Link } from "react-router-dom"
 
import Img1 from "./foto.vip7250/Img1.jpg"
import Img2 from "./foto.vip7250/Img2.jpg"
import Img3 from "./foto.vip7250/Img3.jpg"
import Img4 from "./foto.vip7250/Img4.jpg"
import Img5 from "./foto.vip7250/Img5.jpg"



import "./VIP7250BIA.css"


export default function VIP7250BIA() {
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

        let multi = valor *  1505.65
        setMut(multi)


    }, [valor])

    return (
        <div className="Camera">
           
            <div className="lampadaVIP7250BIA">
                <div className="margemVIP7250BIA">

                    <div className="foto1VIP7250BIA">
                   <img src={Img1} alt={Img1}/>
                    </div>
             
                <div className="fotoVIP7250BIA">
                    <img src={Img2} alt={Img2}/>
                    <img src={Img3} alt={Img3}/>
                    <img src={Img4} alt={Img4}/>
                    <img src={Img5} alt={Img5}/>
                </div>
                </div>

                <div className="precoVIP7250BIA">
            <div className="testoVIP7250BIA">
                 <h1>VIP 7250 B IA</h1>
                <p>Câmera IP minibullet com <br />
                inteligencia artificial</p>
            </div>
                <div className='oldprince'>
                 <p>R$ 1584,90</p>
                    </div>
                    <p>POR</p>
                <h2>R$ 1.505.,65</h2>
                 <p>à vista no boleto ou transferência (5% de desconto)<br/>
                   ou 1584,90 à prazo <br/>
                  3x de R$ 198,11 sem juros</p>

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
            <div className='legend5'>
                      <legend>Informações do produtos</legend>
         
              <ul>
                  <li>Resolução Full HD (2 MP)</li>
                  <li>inteligencia artificial embarcada</li>
                  <li>infavermelho de 50 metro</li>
                  <li>Suporte a ePoE</li>
                  <li>Proteção IP67</li>
                  <li>Suporte a micro-SD</li>
             </ul>
              </div>


        </div>
    )
}