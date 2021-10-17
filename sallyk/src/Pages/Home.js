import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Home () {
    const [click, setClick] = useState();
        const closeMobile = () => setClick(click);
        return(
           <div>
    <header>
        
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar" style={{background: 'white'}}></span>
                <span class="icon-bar" style={{background: 'white'}}></span>
                <span class="icon-bar" style={{background: 'white'}}></span>
            </button>
            
            </div>
            <div class="to-the-right">
            <a class="navbar-brand" href="Home.html"><img class="log" src="sally/sally-k2.png"/></a>
        </div>
            <div class="collapse navbar-collapse to-the-left" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="least"><Link to="/Home.html" onClick={closeMobile} className="list">HOME</Link> </li>
                <li class="least"><Link to="/Product.html" onClick={closeMobile} className="list">OUR PRODUCT</Link> </li>
                <li class="least"><a href="#About Us" class="list">ABOUT US</a> </li>
                <li class="least"><a href="#Contact Us" class="list">CONTACT US</a> </li>
            </ul>
           
        </div>
    </div>
</header>
 <div class="carrol">
    <div class="carousel slide" id="myCarousel" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-t0="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-t0="1"></li>
                <li data-target="#myCarousel" data-slide-t0="2"></li>
                <li data-target="#myCarousel" data-slide-t0="3"></li>
            </ol>
      <div class="carousel-inner">
          <div class="item active">
              <img src="sally/smart.jpg" alt="show" class="zom"/>
              <div class="carousel-caption">
                <h1 class="side">WELCOME</h1>
                <h3 class="side1">Brace up to get your elegant wears from <br/> Sally-K Fashion Affairs</h3>
              </div>
          </div>
          <div class="item">
              <img src="sally/clem.JPG" alt="show" class="zom"/>
              <div class="carousel-caption">
                <h1 class="side">SHOP WITH US</h1>
                <h3 class="side1">A brand you will always<br/> love to patronize</h3>
              </div>
          </div>
          <div class="item">
            <img src="sally/julian.jpg" alt="show" class="zom"/>
            <div class="carousel-caption">
                <h1 class="side">STYLE IS FOREVER</h1>
                <h3 class="side1">We will make you look more beautiful and handsome</h3>
            </div>
        </div>
        <div class="item">
            <img src="sally/s1.jpg" alt="show" class="zom"/>
            <div class="carousel-caption">
                <h1 class="side">LET'S HAVE A DEAL</h1>
                <h3 class="side1"><a href="#Contact Us" class="us">Contact us</a> </h3>
            </div>
        </div>
          
      </div>
    </div>
</div>
<br/><br/>


    <h1 class="bout"><a name="About Us"></a>ABOUT US</h1>
    <p id ="piro">Sally-K Fashion Affairs is your one-stop for amazing fashion items for both gender<br/>
        We also deal in wholesales and retail too
        <br/>Your elegance is our satisfaction</p> 

    <div class='container'>
        <div class="row">
            <h3 class="col-md-5 col-xs-12 col-sm-12 bkk"><i>
                <h1><b>Our Mission</b></h1>
To change the culture around pre-owned retail in Africa by creating an elevated consignment experience.

Sally-K Fashion Affairs is about a culture shift. Our brand strategy revolves around the opportunity to educate and re-orientate the African culture around pre-loved items.

<h1><b>Our Vision</b></h1>
To be the foremost African presence in the global shift towards consignment & sustainable fashion
    
Sally-K Fashion Affairs will be the go-to consignment store for quality fashion in Africa.</i>
            </h3>
       <img src="sally/bg.jpg" class="col-md-6 col-sm-1 col-xs-12" />
             
        </div>
    </div>
<br/><br/>
    <h1 class="affairs"><a name="Contact Us"></a>Contact Us</h1>

    <div class="cont"><br/>
        <ul type='none'>
            <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>&emsp;+234 816 379 4569</li><br/>
            <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>&emsp;+234 816 379 4569 or <a href="https://wa.me/message/EYF2FFRITOINCI" class="link">https://wa.me/message/EYF2FFRITOINCI</a></li><br/>
              <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>&emsp;Sally-k Fashion Affairs</li><br/>
              <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>&emsp;hifehsallykfashionaffairs@gmail.com</li><br/>
              <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>&emsp;sallyk_fashionaffairs</li><br/>
              <li class="middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>&emsp;sallyk_fashionaffairs</li>
        </ul>
    </div>

    <footer class="navbar navbar">
        <div class="container connt">
            <img src="sally/sally-k1.png" alt="show" class="foot"/>
            <p class="footer"><a href="HOME.html" class="final">Home</a></p>
            <p class="footer"><a href="Our Product.html" class="final">Our Product</a></p>
            <p class="footer"><a href="#About Us" class="final">About Us</a></p>
            <p class="footer"><a href="#Contact Us" class="final">Contact US</a></p>
            <br/>
            <p class="footing">Copyright © sallyk_fashionaffairs 2021</p>
        </div>
        </footer> 
        </div>
        );
    };

export default Home;