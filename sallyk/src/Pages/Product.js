import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Product () {
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
                <div style={{width: '45%'}}>
                <a class="navbar-brand" href="Home.html"><img class="log" src="sally/sally-k2.png" alt="mg"/></a>
            </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="least"><Link to="/Home.html" onClick={closeMobile} class="list">HOME</Link></li>
                    <li class="least"><Link to="/Our Product.html" onClick={closeMobile} class="list">OUR PRODUCT</Link></li>
                    <li class="least"><a href="#About Us" class="list">ABOUT US</a></li>
                    <li class="least"><a href="#Contact Us" class="list">CONTACT US</a></li>
                </ul>
               
            </div>
        </div>
    </header>
         <h3 class="product">
             OUR PRODUCT PAGE
         </h3>
    <div class='container product_page'>
        <div class="row mute">
           <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3">
               <img src="sally/S11.jpg" alt="mg" class="control_it"/>
           </div>
           <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3">
            <img src="sally/S12.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3">
            <img src="sally/S27.jpg" alt="mg" class="control_its"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3">
            <img src="sally/S28.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S7.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S8.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S9.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S15.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S3.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S4.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S5.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S6.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S13.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S16.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S20.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S19.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S21.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S22.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3"><br/>
            <img src="sally/S26.jpg" alt="mg" class="control_it"/>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3 cf"><br/>
            <img src="sally/S24.jpg" alt="mg" class="bottom control_it"/>
            <img src="sally/S25.jpg" alt="mg" class="top control_it"/>
        </div>
        </div>
    </div>
    <h4 id="mix"><a href="Home.html" class="correct"> Contact us</a> to get yours at affordable prizes</h4>
   {/*<table>
      <tr>
            <th>You want to know the Goat</th>
            <th>You want to know the Goat</th>
            <th>You want to know the Goat</th>
        </tr>
        <tr>
            <td>The jupitar</td>
            <td>The pacific ocean</td>
            <td>Th mecury</td>
        </tr>
        </tr>
        <tr>
            <td>The Pluto</td>
            <td>The Atlantic ocean</td>
            <td>Th Mars</td>
        </tr>
        
        </table>*/}

            <footer class="navbar navbar">
            <div class="container connt">
                <img src="sally-k1.png" alt="mg" class="foot"/>
                <p class="footer"><a href="HOME.html" class="final">Home</a></p>
                <p class="footer"><a href="Our Product.html" class="final">Our Product</a></p>
                <p class="footer"><a href="#About Us" class="final">About Us</a></p>
                <p class="footer"><a href="#Contact Us" class="final">Contact US</a></p>
                <br/>
                <p class="footing">Copyright © sallyk_fashionaffairs 2021</p>
            </div>
            </footer>
            </div>
        )
};

export default Product;