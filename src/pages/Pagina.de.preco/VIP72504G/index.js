import { Link } from "react-router-dom"

import { useEffect,useState } from "react"


import Imagem1 from "./foto.VIP7250AG/Imagem1.jpg"
import Imagem2 from "./foto.VIP7250AG/Imagem2.jpg"
import Imagem3 from "./foto.VIP7250AG/Imagem3.jpg"
import Imagem4 from "./foto.VIP7250AG/Imagem4.jpg"
import Imagem5 from "./foto.VIP7250AG/Imagem5.jpg"

import  "./camera.css"

export default function VIP72504G(){

    const [valor, setValor] = useState(10)
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

        let multi = valor *  1257.92

        setMut(multi)


    }, [valor])
    return(
        <div className="lampada">
          

            <div className="lampadaVIP7204G">
                <div className="margemVIP7204G">

                    <div className="foto1VIP7204G">
                   <img src={Imagem3} alt={Imagem3} />
                    </div>
             
                 <div className="fotoVIP7204G">
                    <img src={Imagem4} alt={Imagem4}/>
                    <img src={Imagem2} alt={Imagem2}/>
                    <img src={Imagem5} alt={Imagem5}/>
                    <img src={Imagem4} alt={Imagem4}/>
                </div>
                </div>

                <div className="precoVIP7204G">
                <div className="testoVIP7204G">
                <h1>VIP 7250 4G IA FT</h1>
               <p>Câmera IP de video bullet 4G</p>
               </div>
               <div className='oldprince'>
                    <p>R$ 1.320,81</p>
                    </div>
                        <p>Por</p>  
                        <h2>R$ 1.257,92</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         ou 5x de R$ 252 sem juro ou 12x de 110</p>
                    
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
                  <Link className="icon" to="/VIP7250AG">ADICIONAR AO CARRINHO</Link>
                  </div>
                
                </div>

            </div>
            
            <div className='legend4'>
             <legend>Informações do produtos</legend>
            <ul>
                        <li>Resolução 2 MP</li>
                        <li>indece de proteção IP67</li>
                        <li>Entrada e saida de áudio e alarme</li>
                        <li>H265+</li>
                        <li>Conexão via rede móvel 4G</li>
                    </ul>
            </div>

        </div>
    )
}