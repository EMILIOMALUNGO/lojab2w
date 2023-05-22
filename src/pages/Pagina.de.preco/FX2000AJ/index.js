import { useEffect,useState } from "react"
import { Link } from "react-router-dom"



import Images1 from "./foto.cadeado/Images1.jpg"
import Images2 from "./foto.cadeado/Images2.jpg"
import Images3 from "./foto.cadeado/Images3.jpg"
import Images4 from "./foto.cadeado/Images4.jpg"
import Images5 from "./foto.cadeado/Images5.jpg"



import "./FX2000AJ.css"

export default function FX2000AJ(){
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

      let multi = valor * 226.25

      setMut(multi)


  }, [valor])


    return (
        <div className="Cadeado">
          
            <div className="CadeadoFX2000AJ">
                <div className="margemFX2000AJ">
                <div className="foto1FX2000AJ">
                   <img src={Images5} alt={Images5} />
                    </div>
             
                <div className="fotoFX2000AJ">
                    <img src={Images1} alt={Images1} />
                    <img src={Images2}  alt={Images2}/>
                    <img src={Images3}  alt={Images3}/>
                    <img src={Images4}  alt={Images4}/>
                </div>
                </div>

                <div className="precoFX2000AJ">     
               <div className="testoFX2000AJ">      
             <h1>FX 2000 AJ</h1>
             <p>Fechadura elétrica para portões abertura para dentro  <br/>
             e para fora com ou sem batente</p>
            </div>

            <div className='oldprince'>
                      <p>R$ 248.90</p>
                    </div>
                    <p>POR</p>
               <h2>R$ 226,25</h2>
               <p>À vista no PIX com até 10% OFF <br/>
               Em até 10x de R$ 25,13 sem juros no cartão <br/>
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
               <div className='legend1'>
               <legend>Informações do produtos</legend>
            <ul>
                <li>Instalação ajustável Solução
              ideal para portas ou <br/> portôes de 30 a 75 mm
              de espessura</li>
              <li>Memória mecânica que destrava ao primeiro <br/>
              impulso e deixa a abertura mais sileciosa com <br/>
              estalo único</li>
                <li>Guia do batente e batente de embutir inclusos <br/>
                mais flexibilidade para isntalar</li>
             </ul>
                  </div>



        </div>
    )
}




