
import { Link } from "react-router-dom"


import { useEffect,useState } from "react"



import Images11 from "./foto.camer/Images11.jpg"
import Images12 from "./foto.camer/Images12.jpg"
import Images13 from "./foto.camer/Images13.jpg"





import "./VIP9425.css"

export default function VIP9425(){

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
        <div className="Camera">

            <div className="CameraVIP9425">
                <div className="margemVIP9425">

                    <div className="foto1VIP9425">
                   <img src={Images11} alt={Images11}/>
                    </div>
             
                <div className="fotoVIP9425">
                    <img src={Images12} alt={Images12}/>
                    <img src={Images13} alt={Images13}/>
                    <img src={Images13} alt={Images13}/>
                    <img src={Images13} alt={Images13}/>
                    
                </div>
                </div>

                <div className="precoVIP9425">

                <div className="testoVIP9425">      
                  <h1>VIP 9425 Dual SD IA FT</h1>
                  <p>Câmera IP com 2 PTZ e 25x de zoom</p>
                </div>
                <div className='oldprince'>
                      <p>R$ 4.375,93</p>
                    </div>
                    <h2>R$ 4.167,56</h2>
                    <p>à vista no boleto ou transferência (5% de desconto)<br/>
                    ou 4.386,90 à prazo <br/>
                    8x de R$ 548,36 sem juros</p>

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
                 <div className='legend6'>
                      <legend>Informações do produtos</legend>
                   <ul>
                        <li>2 lentes varifocais</li>
                        <li>Suporte a cartão micro-SD</li>
                        <li>Resolução 4 MP</li>
                        <li>Índice DE Proteção IP67</li>
                    <li>Compressão de video H.265+</li>
                    <li>Entrada e saida de alarme</li>
                    </ul>
                   </div>



        </div>
    )
}