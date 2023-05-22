
import { Link } from "react-router-dom"
import { useEffect,useState} from "react"







import Imags18 from "./foto.camer3/Imags18.jpg"





import "./VIP7200.css"

export default function VIP7200(){

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
        <div className="Camera">
          

            <div className="CameraVIP7200">
                <div className="margemVIP7200">

                    <div className="foto1VIP7200">
                   <img src={Imags18} alt={Imags18} />
                    </div>
             
                <div className="fotoVIP7200">
                    <img src={Imags18} alt={Imags18}/>
                    <img src={Imags18} alt={Imags18}/>
                    <img src={Imags18} alt={Imags18}/>
                    <img src={Imags18} alt={Imags18}/>      
                </div>
                </div>


                <div className="precoVIP7200">
                <h1>VIP 7200 TH FT</h1>
               <p>Câmera bullet IP térmica</p>

                      <div className='oldprince'>
                        <p2>R$ 2.730,00</p2>
                     </div>
                        <p>Por</p>  
                        <h2>R$ 2.660,00</h2>
                         <p3> (5% de desconto)</p3>
                         <p>à vista no boleto ou transferência. <br />
                         10x R$ 266 reais sem juros</p>

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
            <div className='legend7'>
                      <legend>Informações do produtos</legend>
                      <ul>
                        <li>Lente térmica fixa 7mm</li>
                        <li>Resolução de 4 MP (visual)</li>
                        <li>Infavermelho de 50 metro</li>
                        <li>Proteção IP67</li>
                        <li>Alto-falante embutido</li>
                        <li>Entrada e saida de áudio</li>
                        <li>Entrada e saida e alarme</li>
                        <li>Medição de temperatura</li>
                        <li>Detenção de fogo</li>
                        <li>Range -20° a 550°</li>
                    </ul>
                      </div>

        </div>
    )
}