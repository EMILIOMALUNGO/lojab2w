import Carousel from 'react-bootstrap/Carousel';


import camera1 from "./cameras/camera1.png";
import camera27 from "./cameras/camera27.png";
import camera5 from "./cameras/camera5.png";
import camera8 from "./cameras/camera8.png";
import cameraip1 from "./cameras/cameraip1.jpg";
import cameraip2 from "./cameras/cameraip2.jpg"
import cameraip3 from "./cameras/cameraip3.jpg";
import cameraip4 from "./cameras/cameraip4.png"
import camera7 from "./cameras/camera7.png";
import camera9 from "./cameras/camera9.png";
import camera10 from "./cameras/camera10.png";
import camera11 from "./cameras/camera11.png";
import camera12 from "./cameras/camera12.png";
import camera13 from "./cameras/camera13.png";
import camera14 from "./cameras/camera14.png";
import camera15 from "./cameras/camera15.png";
import camera16 from "./cameras/camera16.png";
import camera18 from "./cameras/camera18.png";
import camera19 from "./cameras/camera19.png";
import camera20 from "./cameras/camera20.png";
import camera23 from "./cameras/camera23.png";



import "./tipos.css"

export default function Tipos() {
   return (
      <div className='containerdark'>
         <Carousel className="dark">
            <Carousel.Item >
               <img className="d-block w-100" src={camera1} alt={camera1} />

               <div className="darkvalor">
                  <p1 className="name">Câmera com visão noturna e inteligência artificial </p1>
                  <p className="oldprince">R$ 3.100.30</p>
                  <p className="prince">R$ 2.550,99</p>
               </div>
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={camera27} alt={camera27} />
               <div className="darkvalor">
                  <p1 className="name">Camera Ip Bullet</p1>
                  <p className="oldprince">R$ 38.332,70</p>
                  <p className="prince">R$ 34.697,49</p>
               </div>
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={camera5} alt={camera5} />
               <div className="darkvalor">
                  <p1 className="name">Câmera Bullet com resolução 4 MP</p1>
                  <p className="oldprince">R$ 861,50</p>
                  <p className="prince">R$ 781,24</p>
               </div>
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={camera8} alt={camera8} />
               <div className="darkvalor">
                  <p1 className="name">Câmera VIP IP 9320 3D IA FT C/ Contagem de pessoas</p1>
                  <p className="oldprince">R$ 3.461,50</p>
                  <p className="prince">R$ 2.391,90</p>
               </div>
            </Carousel.Item>
         </Carousel>

         <div className='produtosdarkinterbras'>
            <div>
               <img src={cameraip3} alt={cameraip3} className="img-fluid" />
               <p>Modelos de câmeras</p>
            </div>
            <div>
               <p>Produtos Interbras feito para você e sua família, <br />
                  produtos com os melhores preços do mercado  </p>
            </div>

         </div>



         <div className='darkgeral'>
            <div className='dark1'>
               <div className="todosdark1">

                  <div className="produtosdark1">
                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera7} alt={camera7} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo VIP 7430 D A FT</span>
                           <span className="oldprince">R$ 690,99</span>
                           <span className="prince">R$ 650,44</span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera9} alt={camera9} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo VIP 9450 B Face</span>
                           <span className="oldprince">R$ 14.861,50</span>
                           <span className="prince">R$ 14.192,07</span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera10} alt={camera10} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo  VIP 7460 ZFT</span>
                           <span className="oldprince">R$ 1.600,00</span>
                           <span className="prince">R$ 1.500,00</span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera11} alt={camera11} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo  VIP 91210  F IA FT</span>
                           <span className="oldprince">R$ 3.700,99</span>
                           <span className="prince">R$ 3.620,00</span>
                        </div>
                     </div>
                  </div>
               </div>




               <div className='dark2'>
                  <div className="todosdark2">

                     <div className="produtosdark1">
                        <div className="item">
                           <div className="fotocarousel">
                              <img src={camera12} alt={camera12} className="img-fluid" />
                           </div>
                           <div className="info">
                              <span className="name">Câmera VIP 7440 D Z FT</span>
                              <span className="oldprince">R$ 400,00</span>
                              <span className="prince">R$ 334,40</span>
                           </div>
                        </div>

                        <div className="item">
                           <div className="fotocarousel">
                              <img src={camera16} alt={camera16} className="img-fluid" />
                           </div>
                           <div className="info">
                              <span className="name">Câmera VIP 9180 PAN  FTfi</span>
                              <span className="oldprince">R$ 710,30</span>
                              <span className="prince">R$ 695,00</span>
                           </div>
                        </div>

                        <div className="item">
                           <div className="fotocarousel">
                              <img src={camera14} alt={camera14} className="img-fluid" />
                           </div>
                           <div className="info">
                              <span className="name">Câmera do tipo VIP 7240 DZ </span>
                              <span className="oldprince">R$ 790,99</span>
                              <span className="prince">R$ 529,70</span>
                           </div>
                        </div>

                        <div className="item">
                           <div className="fotocarousel">
                              <img src={camera15} alt={camera15} className="img-fluid" />
                           </div>
                           <div className="info">
                              <span className="name">Câmera vip 7360 mini PAN</span>
                              <span className="oldprince">R$ 29070</span>
                              <span className="prince">R$ 231,99</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>



            <div className='dark2'>
               <div className="todosdark2">

                  <div className="produtosdark1">
                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera23} alt={camera23} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo VIP 7430 D A FT</span>
                           <span className="oldprince">R$ 82,71</span>
                           <span className="prince">R$ 78,76</span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera20} alt={camera20} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera de alta temperatura</span>
                           <span className="oldprince">R$ 1461,50</span>
                           <span className="prince">R$ 1.391,90</span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera18} alt={camera18} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo VIP 9360 PAN IA FT</span>
                           <span className="oldprince">R$ 700,00</span>
                           <span className="prince">R$ 670,99 </span>
                        </div>
                     </div>

                     <div className="item">
                        <div className="fotocarousel">
                           <img src={camera19} alt={camera19} className="img-fluid" />
                        </div>
                        <div className="info">
                           <span className="name">Câmera do tipo VIP 7425 SD IA FT</span>
                           <span className="oldprince">R$ 4.191,50</span>
                           <span className="prince">R$ 3.894,01</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className='dark4'>
               <h1>Tudo sobre o mundo das Câmeras</h1>
               <p>Veja algumas imagem onde podemos encontrar câmeras instaladas, <br />
                  não fica de fora do mundo das câmaeras. Proteja-se e garanta a sua segurança.
                  Temos diversos tipos de câmeras com alta resolução.</p>
            </div>
            <div className='dark4fotoscameras'>

               <div>
                  <img src={cameraip2} alt={cameraip2} className="img-fluid" />
               </div>

               <div>
                  <img src={cameraip4} alt={cameraip4} className="img-fluid" />
               </div>

               <div>
                  <img src={cameraip1} alt={cameraip1} className="img-fluid" />
               </div>
            </div>


         </div>
      </div>
   );
}












