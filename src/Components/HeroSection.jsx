const Hero=()=>{
    return (
    <main className="Hero">
    <div className="Hero-content">
       <h1>YOUR FEET <br/>
        DESERVE <br/>
        THE BEST</h1> 
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
       <div>
        <button className="primary-button">Shop Now</button>
        <button className="secondary-btn">Category</button>
       </div>
       <div className="Shopping">
         <p>Also Available On</p>
       <div className="brand-icon">
        <img src="/images/flipkart.png" alt="flipkart logo"/>
        <img src="/images/amazon.png" alt="amazon logo"/>
       </div>
       </div>
       </div>
       <div className="Hero-Image">
        <img src="/images/shoe_image.png" alt="shoes image"/>
       </div>
        </main>
    );
}
export default Hero