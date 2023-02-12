import img1 from './images/img1.jpg'
import img3 from './images/img3.jpg'
import img5 from './images/img5.PNG'

function Body(){

    return(

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
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
            <div class="pb-5">

             <img class= "img-fluid" src={img5} alt=""/>

            </div>
            </div>

            

     )
}
export default Body;