import img1 from './images/img1.jpg'
import img3 from './images/img3.jpg'
import img5 from './images/img5.PNG'
import Capture from './images/Capture.JPG'
import Rbsimg1 from './images/RbsImg1.jpg'
import Rbsimg2 from './images/RbsImg2.jpg'
import Rbsimg3 from './images/RbsImg3.jpg'

function Body(){

    return(

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Capture} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..."/>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>



            <h5 class="range pb-1 text-center"> Our Main and widely used products</h5>
          <div class="container text-center">

                  <div class="row">

                        <div class="prodpic col-12 col-sm-12 col-md-4 col-lg-4">
                            <img src={Rbsimg1} alt="" class="prodimg img-fluid"></img>
                            <p class="paratext">
                              <p>
                              We have different current accounts to suit you. Want to have a look on the range available?
                              Browse our fee-free current accounts, or see the extra benefits you could receive with our range of Reward accounts.
                              </p>

                              <p className='fw-bolder'>
                              To apply you must be 18+ and a UK resident. Fees and charges apply.
                              </p>
                            </p>  
                        </div>

                        <div class="prodpic col-12 col-sm-12 col-md-4 col-lg-4">
                          <img src={Rbsimg2} alt="" class="prodimg img-fluid"></img>
                          <p class="paratext">
                            <p>
                            Could we help you save money on your mortgage? 
                            </p>

                            <p >Mortgages are beneficial but do note that your home or property may be repossessed if you do not keep up repayments on your mortgage.
                            </p>
                            <p className='fw-bolder'>Eligibility applies. Over 18’s only.</p>
                          </p>
                        </div>

                        <div class="prodpic col-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={Rbsimg3} alt="" class="prodimg img-fluid"></img>
                      <p class="paratext">
                        <p>
                          Take a wee look at our credit card range and choose the card that suits your lifestyle.
                          </p>
                            <p>
                          A whole new range of cards available for students whether domestic or an international. Get wide range offers on approval. 
                          </p>
                        

                        <p className='fw-bolder'>Eligibility applies. Over 18’s only.</p>
                      </p>
                        </div>

                  </div>
          </div>
     

            <div class="pb-5">

             <img class= "img-fluid" src={img5} alt=""/>

            </div>
            </div>

            

     )
}
export default Body;