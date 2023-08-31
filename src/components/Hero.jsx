const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1 className="hero__heading">YOUR FEET DESERVE THE BEST</h1>
                <p className="hero__desc">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn-group">
                    <a href="#!" className="btn">
                        Shop Now
                    </a>
                    <a href="#!" className="btn__link">
                        Category
                    </a>
                </div>
                <div className="shopping">
                    <p className="shopping__desc">Also Available On</p>
                    <div className="brand-icons">
                        <a href="#!">
                            <img src="./images/flipkart.png" alt="Flipkart" />
                        </a>
                        <a href="#!">
                            <img src="./images/amazon.png" alt="Amazon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                {" "}
                <img src="./images/shoe_image.png" alt="Nike shoe" />
            </div>
        </main>
    );
};

export default HeroSection;
