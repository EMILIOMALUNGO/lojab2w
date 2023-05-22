
import { Link } from "react-router-dom"


import "./IconCadastrar.css"
import {useEffect,useState} from "react"


 export default function IconCadastrar(){

    const [nome, setNome] = useState("") 
    const [input, setInput] = useState("")
      const [cadastro , setCadastro] = useState("")

          function EndClick(){

             alert("tudo ok")
            }
useEffect(() =>{
   setNome(nome)
})

            
             function EndEntrar(){
      
             alert("cadastro realizado com sucesso")
              setCadastro("")
              setInput("")
             }

    return(
        <div className="IconCadastrar">
            <legend>Faça o seu Cadastro</legend>

            <div className="IconCadastrar1">

            <form onSubmit={EndClick}>

            <div className="IconCadastrar2">
               <h2>Quero criar minha conta</h2> 
              E-mai - <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
              <br/>
             <button type="submit">Continuar</button>

             <p>Duvida?<Link to="/FAQ">fala com agente</Link></p>
            </div>
            </form>

             <form onSubmit={EndEntrar}>
            <div className="IconCadastrar3">
                <h2>Já sou cliente</h2>
                E-mail,Cpf ou Cnpj - <input type="text" value={cadastro} onChange={(e) => setCadastro(e.target.value)}/>
                <br/>
               <span> Senha - <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/></span>
               <button type="submit">Continuar</button>
                 <p>Esqueci minha senha</p>  
            </div>
            </form>
         </div> 

        <div className="IconCadastrar4">
        <p>Seus dados pessoais serão respeitados de acordo com a nossa política de privacidade. <br/>*Nada será publicado em sua timeline.
       Serviço válido somente para pessoas físicas.Em caso de dúvidas, acesse nossa central de atendimento.</p>
       </div>

       <div className="IconCadastrar5">
        <p>Preços e condições de pagamento exclusivos para compras via internet, podendo variar nas lojas físicas por causa do Fretes.<br/>
         Ofertas válidas na compra de até 5 peças de cada produto por cliente, até o término dos nossos estoques para internet.<br/>
         Caso os produtos apresentem divergências de valores, o preço válido é o da Sacola de compras. Vendas sujeitas a análise e 
         confirmação de dados.<br/> * Juros e Custo de parcelamento: todos os encargos do parcelamento, como juros e outras tarifas estão incluídos neste valor.
         <Link to="/FAQ">Saiba mais.</Link></p>
            <p>Bauru s/p - Av. Nações Unidas, 40-40 Telf: (14) 3245-3818 CNPJ: 47950/49-27 <br/>
            Loja B2W - Todos os direitos reservados</p>
         </div>

        </div>
    )
 }