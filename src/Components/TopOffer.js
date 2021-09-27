import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import accessory1 from './Images/accessory1.PNG'
import accessory2 from './Images/accessory2.PNG'
import accessory3 from './Images/accessory3.PNG'
import accessory4 from './Images/accessory4.PNG'
import accessory5 from './Images/accessory5.PNG'
import accessory6 from './Images/accessory6.PNG'


const TopOffer = () => {
    return (
        <>
          
           <div className="container-fluid my-1">
           <div className="row border">
               <div className="col-md-6 ">
               <h1 className="my-3 float-start mx-5" style={{fontWeight:"bold" ,fontSize:"30px"}}>Top Offers on</h1><br/>
               </div>
               <div className="col-md-6">
               <h1 className="btn btn-primary float-end me-4 my-4">VIEW ALL</h1>
               </div> 
               <div> <p className="float-start mx-5" style={{fontWeight:"bold" ,fontSize:"15px",color:"gray"}}>Men's Accessories</p></div>
               
           </div>
           </div>

           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-2">
                       
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory1} className="card-img-top " alt="..."  style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Casios,Fastrack &More</h5>
    <p className="card-text text-success">Upto 80%OFF</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
                   <div className="col-md-2">
                       
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory2} className="card-img-top" alt="..."  style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Computer Glasses</h5>
    <p className="card-text text-success">20-60%OFF</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
                   <div className="col-md-2">
                       
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory3} className="card-img-top" alt="..." style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Laptops Bags</h5>
    <p className="card-text text-success">Min 50%OFF</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
                   <div className="col-md-2">
                       
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory4} className="card-img-top" alt="..."  style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Wild Crafts</h5>
    <p className="card-text text-success">From Rs599</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
                   <div className="col-md-2">
                      
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory5} className="card-img-top" alt="..."  style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Sonata</h5>
    <p className="card-text text-success">From Rs199</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
                   <div className="col-md-2">
                     
                       <div className="card imgzoom" style={{width: "12rem"}}>
  <img src={accessory6} className="card-img-top" alt="..."  style={{height:"180px"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:"13px"}}>Chemistry</h5>
    <p className="card-text text-success">From Rs149</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>

                   </div>
               </div>

           </div>
        </>
    )
}

export default TopOffer
