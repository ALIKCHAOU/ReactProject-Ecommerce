import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import Promo from '../Promo/Promo';
class CarouselForm extends Component {
  render(){
    return(
     
      <div>
      <Container >
        <Carousel 
          activeItem={1} 
          length={4}
          showControls={false}
          showIndicators={false}
          className="z-depth-1" style={{zIndex:"0"}}>
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="http://www.tunisianet.com.tn/modules/ps_imageslider/images/54d3c31010b3edf5bb5186caf452fefaef305575_sac%20a%20dos%20offre.jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                
              
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="http://www.tunisianet.com.tn/modules/ps_imageslider/images/061065cdfbf918512e941dc945afacb75f24da53_legion%20lenovo%20y520%20offre%20site.jpg" alt="Second slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
               
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="http://www.tunisianet.com.tn/modules/ps_imageslider/images/ca9ac1490abc99a6f3baa3f6cd1c0a35418b6163_televiseur%20maxwell%20aid.jpg" alt="Third slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
              
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="http://www.tunisianet.com.tn/modules/ps_imageslider/images/13b36dff1b83a4f6c7305870eaf9214f326e1ced_Nova%203i%20Huawei.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
         
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      <Promo/>
      </div>
     
    );
  }
}

export default CarouselForm;