import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';



import familia from "./sensor/familia.jpg"
import ivpx from "./sensor/ivpx.png"

import sensor2 from "./sensor/sensor2.jpg";
import sensor3 from "./sensor/sensor3.png";
import sensor4 from "./sensor/sensor4.png";
import sensor5 from "./sensor/sensor5.jpg"
import sensor6 from "./sensor/sensor6.jpg"
import sensor7 from "./sensor/sensor7.jpg"
import sensor8 from "./sensor/sensor8.jpg"
import sensor9 from "./sensor/sensor9.jpg"
import sensor10 from "./sensor/sensor10.jpg"
import sensor11 from "./sensor/sensor11.jpg"
import sensor13 from "./sensor/sensor13.png"

import sensor15 from "./sensor/sensor15.jpg"
import sensor16 from "./sensor/sensor16.jpg"
import sensor17 from "./sensor/sensor17.jpg"

import sensor20 from "./sensor/sensor20.jpg"



import "./sensor.css"

export default function Sensorestipos() {
  return (
    <div className='containerSensorestipos'>

      <div className="Sensorestipos1">
        <div>
        <img src={familia} alt={familia} className="img-fluid" />
        </div>
        <div>
          <h1>Sensores</h1>
          <p>Proteja ambiente contra invasores com máxima qualidade</p>
        </div>
      </div>

      <div className="Sensorestipos2">

      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sensor3} alt={sensor3} className="img-fluid" />
              <span1 className="name1">Sensor do tipo VIP 9450</span1><br />
              <span2 className="oldprince1">R$ 150.99</span2>
              <span className="prince1">R$ 120,00</span>
            </div>

            <div className="flip-card-back">
              <img src={sensor3} alt={sensor3} className="img-fluid" />
              <img src={sensor3} alt={sensor3} className="img-fluid" />
            </div>
          </div>
        </div>

 
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sensor4} alt={sensor4} className="img-fluid" />
              <span1 className="name1">Sensor do tipo VIP 9450</span1><br />
              <span2 className="oldprince1">R$ 130,00</span2>
              <span className="prince1">R$ 99,99</span>
            </div>

            <div className="flip-card-back">
              <img src={sensor4} alt={sensor4} className="img-fluid" />
              <img src={sensor4} alt={sensor4} className="img-fluid" />
            </div>
          </div>
        </div>
             
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sensor13} alt={sensor13} className="img-fluid" />
              <span1 className="name1">Sensor do tipo VIP 9450</span1><br />
              <span2 className="oldprince1">R$ 80,98</span2>
              <span className="prince1">R$ 64.79</span>
            </div>

            <div className="flip-card-back">
              <img src={sensor13} alt={sensor13} className="img-fluid" />
              <img src={sensor13} alt={sensor13} className="img-fluid" />
            </div>
          </div>
        </div>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={ivpx} alt={ivpx} className="img-fluid" />
              <span1 className="name1">Sensor do tipo VIP 9450</span1><br />
              <span2 className="oldprince1">R$ 80,98</span2>
              <span className="prince1">R$ 64.79</span>
            </div>

            <div className="flip-card-back">
              <img src={ivpx} alt={ivpx} className="img-fluid" />
              <img src={ivpx} alt={ivpx} className="img-fluid" />
            </div>
          </div>
        </div>

        
      </div>


      <div className='sensores3'>
        <div className="sensores4">

          <div className="sensores5">
            <div className="item">
              <div className="sensores6">
                <img src={sensor5} alt={sensor5} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de abertura magnética para porta de aço XAS porta de aço</span>
                <span className="oldprince">R$ 82,71</span>
                <span className="prince">R$ 78,76</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor2} alt={sensor2} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de abertura magnética com fio</span>
                <span className="oldprince">R$ 1461,50</span>
                <span className="prince">R$ 1.391,90</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor6} alt={sensor6} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de abertura</span>
                <span className="oldprince">R$ 700,00</span>
                <span className="prince">R$ 670,99 </span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor7} alt={sensor7} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento com fio</span>
                <span className="oldprince">R$ 4.191,50</span>
                <span className="prince">R$ 3.894,01</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sensores3'>
        <div className="sensores4">

          <div className="sensores5">
            <div className="item">
              <div className="sensores6">
                <img src={sensor8} alt={sensor8} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho passivo sem fio</span>
                <span className="oldprince">R$ 82,71</span>
                <span className="prince">R$ 78,76</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor9} alt={sensor9} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho com fio</span>
                <span className="oldprince">R$ 1461,50</span>
                <span className="prince">R$ 1.391,90</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor10} alt={sensor10} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho com fio</span>
                <span className="oldprince">R$ 700,00</span>
                <span className="prince">R$ 670,99 </span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor11} alt={sensor11} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho com fio</span>
                <span className="oldprince">R$ 4.191,50</span>
                <span className="prince">R$ 3.894,01</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='sensores3'>
        <div className="sensores4">

          <div className="sensores5">
            <div className="item">
              <div className="sensores6">
                <img src={sensor15} alt={sensor15} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho para curtina</span>
                <span className="oldprince">R$ 82,71</span>
                <span className="prince">R$ 78,76</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor16} alt={sensor16} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho para teto</span>
                <span className="oldprince">R$ 1461,50</span>
                <span className="prince">R$ 1.391,90</span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor17} alt={sensor17} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho com fio</span>
                <span className="oldprince">R$ 700,00</span>
                <span className="prince">R$ 670,99 </span>
              </div>
            </div>

            <div className="item">
              <div className="sensores6">
                <img src={sensor20} alt={sensor20} className="img-fluid" />
              </div>
              <div className="info">
                <span className="name">Sensor de movimento infravermelho com suporte articulado</span>
                <span className="oldprince">R$ 4.191,50</span>
                <span className="prince">R$ 3.894,01</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}