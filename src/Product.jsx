import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Product({data}) {

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

$(document).ready(function () {
  $(SmallImg[0]).click(function () {
    $(".container-fluid").css("background", "#000");
    $(".product-title").css("color", "#000");
    $(".price span:first-child").css("color", "#000");
    $(".custom-btn").css("background", "#000");
    $(".reviews i").css("color", "#000");
    $(".colors").css("background", "rgb(55, 55, 55)");
    ProductImg.src = SmallImg[0].src;
  });
  $(SmallImg[1]).click(function () {
    $(".container-fluid").css("background", "rgb(186, 34, 42)");
    $(".product-title").css("color", "rgb(186, 34, 42)");
    $(".price span:first-child").css("color", "rgb(186, 34, 42)");
    $(".custom-btn").css("background", "rgb(186, 34, 42)");
    $(".reviews i").css("color", "rgb(186, 34, 42)");
    $(".colors").css("background", "rgb(186, 34, 42)");
    ProductImg.src = SmallImg[1].src;
  });
  $(SmallImg[2]).click(function () {
    $(".container-fluid").css("background", "rgb(200, 200, 200)");
    $(".product-title").css("color", "rgb(200, 200, 200)");
    $(".price span:first-child").css("color", "rgb(200, 200, 200)");
    $(".custom-btn").css("background", "rgb(200, 200, 200)");
    $(".reviews i").css("color", "rgb(200, 200, 200)");
    $(".colors").css("background", "rgb(200, 200, 200)");
    ProductImg.src = SmallImg[2].src;
  });
  $(SmallImg[3]).click(function () {
    $(".container-fluid").css("background", "rgb(232, 198, 35)");
    $(".product-title").css("color", "rgb(232, 198, 35)");
    $(".price span:first-child").css("color", "rgb(232, 198, 35)");
    $(".custom-btn").css("background", "rgb(232, 198, 35)");
    $(".reviews i").css("color", "rgb(232, 198, 35)");
    $(".colors").css("background", "rgb(232, 198, 35)");
    ProductImg.src = SmallImg[3].src;
  });
  $(".product-inf a").click(function () {
    $(".product-inf li").removeClass("active");
    $(this).parent().addClass("active");

    let currentTab = $(this).attr("href");
    $(".tabs-content div").hide();
    $(currentTab).show();

    return false;
  });
  $(".black").click(function () {
    $(".container-fluid").css("background", "#000");
    $(".product-title").css("color", "#000");
    $(".price span:first-child").css("color", "#000");
    $(".custom-btn").css("background", "#000");
    $(".reviews i").css("color", "#000");
    $(".colors").css("background", "rgb(55, 55, 55)");
    ProductImg.src = SmallImg[0].src;
  });
  $(".red").click(function () {
    $(".container-fluid").css("background", "rgb(186, 34, 42)");
    $(".product-title").css("color", "rgb(186, 34, 42)");
    $(".price span:first-child").css("color", "rgb(186, 34, 42)");
    $(".custom-btn").css("background", "rgb(186, 34, 42)");
    $(".reviews i").css("color", "rgb(186, 34, 42)");
    $(".colors").css("background", "rgb(186, 34, 42)");
    ProductImg.src = SmallImg[1].src;
  });
  $(".white").click(function () {
    $(".container-fluid").css("background", "rgb(200, 200, 200)");
    $(".product-title").css("color", "rgb(200, 200, 200)");
    $(".price span:first-child").css("color", "rgb(200, 200, 200)");
    $(".custom-btn").css("background", "rgb(200, 200, 200)");
    $(".reviews i").css("color", "rgb(200, 200, 200)");
    $(".colors").css("background", "#c8c8c8");
    ProductImg.src = SmallImg[2].src;
  });
  $(".yellow").click(function () {
    $(".container-fluid").css("background", "rgb(232, 198, 35)");
    $(".product-title").css("color", "rgb(232, 198, 35)");
    $(".price span:first-child").css("color", "rgb(232, 198, 35)");
    $(".custom-btn").css("background", "rgb(232, 198, 35)");
    $(".reviews i").css("color", "rgb(232, 198, 35)");
    $(".colors").css("background", "#e8c623");
    ProductImg.src = SmallImg[3].src;
  });
});

const {id} =useParams()
    const matchProduct= data.find(res=> res.id==id)

    
  return (
    <>
     <div class="container-fluid" key={matchProduct.id}>
        <div class="cart">
            <div class="row row1">
                <div class="col-md-4">
                    <img src={matchProduct.image} width="100%" id="ProductImg"/>
                    <div class="small-imgs">
                        <img src="https://g.top4top.io/p_18005g0a61.jpg" width="100%" class="small-img"/>
                        <img src="https://h.top4top.io/p_1800o53842.jpg" width="100%" class="small-img"/>
                        <img src="https://i.top4top.io/p_1800anjtp3.jpg" width="100%" class="small-img"/>
                        <img src="https://j.top4top.io/p_1800a1b5d4.jpg" width="100%" class="small-img"/>
                    </div>                
                </div>
                <div class="col-md-6">
                    <h1 class="product-title">{matchProduct.productName}</h1>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <p>240 reviews</p>
                    </div>
                    <div class="price">
                        <span>{matchProduct.price}</span>
                        <span>$49.99</span>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h4>Color</h4>
                            <div class="colors">
                                <div class="black"></div>
                                <div class="red"></div>
                                <div class="white"></div>
                                <div class="yellow"></div>
                            </div>
                        </div>
                        <div class="col-md-4 sze">
                            <h5>Size</h5>
                            <select class="size custom-select">
                                <option>Select Size</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                            </select>
                        </div>
                        <div class="col-md-4 qty">
                            <h5>Quantity</h5>
                            <select class="quantity custom-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div id="product" class="product-inf">
                        <ul>
                          <li class="active"><a href="#Description">Product Description</a></li>
                          <li><a href="#Details">Product Details</a></li>
                        </ul>
                        <div class="tabs-content">
                            <div id="Description">
                                <p>{matchProduct.detail}</p>
                            </div>
                            <div id="Details" >
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sequi eaque quisquam corrupti reprehenderit exercitationem iusto asperiores quae commodi quo?</p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="row">
                            <div class="col-md-6">
                              <button>Add To Cart<i class="fas fa-angle-right"></i></button>
                            </div>
                            <div class="col-md-6">
                                <a href="#" class="custom-btn">Buy Now <i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

{/* <div key={matchProduct.id}>
     <img src={matchProduct.image} alt="" />
     <h2>{matchProduct.productName}</h2>
     <p>{matchProduct.price}</p>
     <p>{matchProduct.detail}</p>
</div> */}

    </>
  )
}

export default Product
