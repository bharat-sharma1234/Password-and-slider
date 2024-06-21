import React, { useState } from 'react'
import './Addtocart.css'
import { useParams } from 'react-router-dom'

function Addtocart({data}) {
    const {id} =useParams()
    const matchProduct= data.find(res=> res.id==id)
	const [cartList, setCartList] = useState([])
	setCartList([matchProduct])
	console.log(cartList);

    function inputWidth() {
        this.style.width = this.value.length + 3 + "ch";
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        const input = document.querySelector("input");
        input.addEventListener("input", inputWidth);
        inputWidth.call(input);
    });
    

  return (
    <>
      <table class="table cart" key={matchProduct.id}>
	<thead class="cart-header">
		<tr>
			<th>Название</th>
			<th>Кол-во</th>
			<th colspan="2" class="has-text-right pl-0">Всего</th>
		</tr>
	</thead>

	<tbody>
		<tr class="cart-row">
			<td class="cart-product-media  cart-product-row">
				<a class="nowrap m-0" href="/store/playstation-5-kopiya">
					<div class="media">
						<figure class="media-left my-0 ml-0 mr-3">
							<p class="image is-64x64">
								<img src={matchProduct.image}/>
							</p>
						</figure>
						<div class="media-content">
							<div class="content">
								<p>
									<strong class="title is-6">
                                    {matchProduct.productName}</strong><br/>
									<span class="nowrap tag block is-info is-light">{matchProduct.price}</span>
								</p>
							</div>
						</div>
					</div>
				</a>
			</td>
			<td class="cart-product-row cart-qnt">
				<div class="cart-qnt-counter field has-addons m-0">
					<p class="control">
						<button class="cart-product-button button">
							<div class="icon-text">
								<span class="icon">
									<i class="fas fa-minus"></i>
								</span>
							</div>
						</button>
					</p>
					<p class="control">
						<input class="input cart-qnt-input" size='1' value={2} type="number" placeholder="2"/>
					</p>
					<p class="control">
						<button class="cart-product-button button">
							<div class="icon-text">
								<span class="icon">
									<i class="fas fa-plus"></i>
								</span>
							</div>
						</button>
					</p>
				</div>

				<button class="cart-product-button button">
					<span class="icon">
						<i class="fas fa-trash"></i>
					</span>
				</button>

			</td>
			<td class="cart-product-subtotal has-text-right nowrap">
				<div class="is-relative"><span>280,00 руб.</span></div>

			</td>
		</tr>
	</tbody>
</table>

<div>
	<p>
		<span class="btn btn-secondary">Очистить</span>
		<a href="" class="btn btn-primary">Оформить заказ</a>
	</p>
</div>

    </>
  )
}

export default Addtocart
