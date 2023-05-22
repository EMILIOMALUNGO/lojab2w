import { Link } from "react-router-dom"
import { useEffect,useState } from "react"



import Imag1 from "./foto.iss1001/Imag1.jpg"
import Imag2 from "./foto.iss1001/Imag2.jpg"
import Imag3 from "./foto.iss1001/Imag3.jpg"
import Imag4 from "./foto.iss1001/Imag4.jpg"
import Imag5 from "./foto.iss1001/Imag5.jpg"




import "./iss1001.css"

export default function ISS1001(){
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

        let multi = valor * 850.92

        setMut(multi)


    }, [valor])




    return(
        <div className="lampada">
          
            <div className="lampadaISS1001">
                <div className="margemISS1001">

                    <div className="foto1iss1001">
                   <img src={Imag3} alt={Imag3}/>
                    </div>
             
                <div className="fotoISS1001">
                    <img src={Imag1} alt={Imag1}/>
                    <img src={Imag2} alt={Imag2}/>
                    <img src={Imag4} alt={Imag4}/>
                    <img src={Imag5} alt={Imag5}/>
                </div>
                </div>

                <div className="precoISS1001">

                <div className="preco2">
            <h1>ISS 1001</h1>
            <p>Sistema de segurança smart <br/>
            Código kgf7a94kfaINTELBRAS</p>
              </div>
              <div className='oldprince'>
            <p2>R$ 893,50</p2>
            </div>
            
            <p>Por</p>  
            <h2>R$ 850,92 </h2>
             <p3> (5% de desconto)</p3>
                <p>à vista no boleto ou transferência.
                 ou 5x de R$ 179,14 <br/> sem juro  ou 12x de 83,09</p>

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
                  <Link className="icon" to="/IconCarrinho">ADICIONAR AO CARRINHO</Link>
                  </div>
                
                </div>
            </div>
            <div className='legend2'>
                <legend>Informações do produtos</legend>
                   
                    <ul>
                        <li>Tecnologia ZigBee</li>
                        <li>Sirene com intensidade sonoro de 100 dB</li>
                        <li>Monitore.receba alertas e amplie a segurança.</li>
                    </ul> 
                     <p>O kit é composto por um hub um sensor<br />
                        de abertura um sensor de movimento e <br />
                        uma sirene.Com ele,você recebe alertas <br />
                        e notificações em casa de invasão,tem <br />
                        o histórico de todos os enventos no app Izy <br />
                        e pode controlar sua casa usando <br /> apenas comandos e voz.
                    </p>
               </div>
        </div>
    )
}