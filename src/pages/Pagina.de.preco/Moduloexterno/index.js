
import { Link } from "react-router-dom"

import { useEffect,useState} from "react"

import img from "./img.jpg"



import "./Moduloexterno.css"

export default function Moduloexterno(){

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
  
        let multi = valor * 668.70
  
        setMut(multi)
  
  
    }, [valor])
    return (
        <div className="Interfone">
           

            <div className="InterfonewT7">
                <div className="margemwT7">

                    <div className="foto1wT7">
                   <img src={img} alt={img} />
                    </div>
             
                <div className="fotowT7">
                    <img src={img} alt={img}/>
                    <img src={img} alt={img}/>
                    <img src={img} alt={img}/>
                    <img src={img} alt={img}/>
                    
                </div>
                </div>

                <div className="precowT7">

                <div className="testowT7">      
            <h1 >Módulo externo wT7</h1>
            <p>Linha Allo - módulo externo para <br/>
            Videoporteiro wT7 W wT7 Lite </p><br/>
          </div>
                <div className='oldprince'>
                        <p2>R$ 680.81</p2>
                      </div>
                        <p>Por</p> 


                <h2>R$ 639,90</h2>
                    <p>no boleto ou tranferência PIX (5% de desconto)</p>
                  <p>ou 10x de R$ 68,81 sem juro </p>

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
            <div className='legend8'>
                      <legend>Informações do produtos</legend>
                <ul>
                    <li>Acessorio para acabamento e instação <br/>
                    de embutir incluido</li>
                    <li>Gravação de foto e video</li>
                    <li>Detenção de movimento</li>
                    <li>Modulo externo exclusivo para as linhas <br/>
                    wT7 e wT7 Lite</li>
                </ul>
                </div>



        </div>
    )
}