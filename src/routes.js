import { BrowserRouter, Routes, Route } from "react-router-dom"





import Header from "./Components/Header"
import Inicio from "./pages/Inicio"
import Tipos from "./pages/Cameras/Tipos"
import Sensorestipos from "./pages/Alarmes/Sensorestipos"
import Roteador1 from "./pages/Roteador/Roteador1"
import EWS440 from "./pages/Pagina.de.preco/EWS440"
import IconCadastrar from "./Components/pastadosicon/IconCadastrar"
import ISS1001 from "./pages/Pagina.de.preco/ISS1001"
import VIP7250BIA from "./pages/Pagina.de.preco/VIP7250BIA"
import VIP72504G from "./pages/Pagina.de.preco/VIP72504G"
import Iconcarrinho from "./Components/pastadosicon/IconCarrinho"
import FX2000AJ from "./pages/Pagina.de.preco/FX2000AJ"
import IFR1001 from "./pages/Pagina.de.preco/IFR1001"
import VIP9425 from "./pages/Pagina.de.preco/VIP9425"
import Moduloexterno from "./pages/Pagina.de.preco/Moduloexterno"
import VIP7200 from "./pages/Pagina.de.preco/VIP7200"
import IV710 from "./pages/Pagina.de.preco/IV710"
import IV710HS from "./pages/Pagina.de.preco/IV710HS"
import Termodeuso from "./Components/paginarodape/Termodeuso"
import Regulamentos from "./Components/paginarodape/Regulamentos"
import FAQ from "./Components/paginarodape/FAQ"
import Footer from "./Components/Footer"
import Politicatroca from "./Components/paginarodape/Politicatroca"



export default function Rotas() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Tipos" element={<Tipos />} /> 
                <Route path="/Sensorestipos" element={<Sensorestipos />} />             
                <Route path="/Roteador1" element={<Roteador1 />} />            
                <Route path="/EWS440" element={<EWS440 />} />
                <Route path="/ISS1001" element={<ISS1001 />} />
                <Route path="/IconCadastrar" element={<IconCadastrar />} />   
                <Route path="/Iconcarrinho"   element={<Iconcarrinho />}/>
                <Route path="/VIP7250BIA"   element={<VIP7250BIA />}/>
                <Route path="/VIP72504G" element={<VIP72504G />} />
                <Route path="/FX2000AJ" element={<FX2000AJ />} />
                <Route path="/IFR1001" element={<IFR1001 />} />
                <Route path="/VIP9425" element={<VIP9425 />} />
                <Route path="/VIP7200" element={<VIP7200 />} />
                <Route path="/Moduloexterno" element={<Moduloexterno />} />
                <Route path="/IV710" element={<IV710 />} />
                <Route path="/IV710HS" element={<IV710HS />} />
                <Route path="/Termodeuso" element={<Termodeuso  />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Regulamentos" element={<Regulamentos />} />
                <Route path="/Politicatroca" element={<Politicatroca />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}