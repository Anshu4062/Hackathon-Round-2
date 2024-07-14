import React from "react";
import "./ProductDetails.css";
import images from "../../images";

function ProductDetails() {
  return (
    <div>
      <div className="productName wush">
        vinut pomegranate sparkling juice
      </div>
      <div className="demoProductImage">
        <img
          src={images.pomegranateImage}
          alt="Vinut Pomegranate Sparkling Juice"
        />
      </div>
      <div className="productFeatures wush">features</div>
      <div className="productDescription wush">
      description
      <p className="bandico descriptionPTag">Rich Antioxidant Profile: Pomegranates are celebrated for their high antioxidant content, particularly polyphenols and flavonoids. Our juice harnesses these health benefits, supporting heart health, reducing inflammation, and aiding in overall wellness.

Authentic and Robust Flavor: The NFC (Not From Concentrate) process ensures the authentic taste of fresh pomegranates, offering a deep, robust flavor that is both satisfying and invigorating. This appeals to consumers who appreciate the true essence of pomegranate without any artificial enhancements.

No Added Sugars or Artificial Ingredients: In keeping with the trend towards natural and wholesome products, our Pomegranate Sparkling Juice NFC contains no added sugars or artificial ingredients, making it a healthy and guilt-free beverage choice.

Hydrating and Refreshing Experience: The sparkling aspect of the juice adds a refreshing twist, enhancing hydration and providing a delightful alternative to regular still juices or sugary sodas.

Supports Digestive Health: The natural fiber in pomegranate juice aids in digestion, while the effervescence of the sparkling juice can help soothe the stomach, making it an excellent choice for digestive health.

Eco-Friendly and Sustainable Practices: Our commitment to sustainability extends to the sourcing of our pomegranates, ensuring environmentally responsible farming practices. This aligns with the values of eco-conscious consumers who seek products that are not only good for them but also for the planet.</p>
      </div>
    </div>
  );
}

export default ProductDetails;
