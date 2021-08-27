import React from "react";
import Footer from "../../Footer/Footer";
// import { Navbar } from "react-bootstrap";
import CartTable from "../../CartTable/CartTable";
import NavComponent from "../../Navbar/Navbar";
import cartStyles from "./cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
	const shoppingCart = useSelector((state) => state.cartReducer);

	return (
		<>
			<NavComponent />

			<div className={`${cartStyles.stylesCart} container`}>
				<div className="row">
					<div className="col-md-8 ps-0 ">
						<CartTable />
					</div>
					<div className="col-md-4 border m-0 p-3 h-50">
						<h5>Tu Pedido</h5>
						<hr />
						<div className="d-flex justify-content-between pb-3 fs-6">
							<span>Subtotal Productos</span>
							<span>
								<strong>
									USD{" "}
									{shoppingCart.length > 0
										? shoppingCart.reduce(
												(acum, item) =>
													acum +
													item.prod.price * item.quantity,
												0
										  )
										: Number(0)}
								</strong>
							</span>
						</div>
						<div className="d-flex justify-content-between text-secondary fs-6">
							<span>Costo de envío</span>
							<span>sin costo</span>
						</div>
						<hr />
						<div className="d-flex justify-content-between text-success fs-4">
							<span>Total</span>
							<span>
								<strong>
									USD{" "}
									{shoppingCart.length > 0
										? shoppingCart.reduce(
												(acum, item) =>
													acum +
													item.prod.price * item.quantity,
												0
										  )
										: Number(0)}
								</strong>
							</span>
						</div>
						<hr />
						<div className="fs-6">
							<h6>Formas de pago</h6>
							<div className=" d-flex justify-content-around">
								<span>
									<i className="fab fa-paypal"></i>
								</span>
								<span>
									<i class="fab fa-cc-visa"></i>
								</span>
								<span>
									<i class="fab fa-cc-mastercard"></i>
								</span>
								<span>
									<i className="fas fa-exchange-alt"></i>
								</span>
							</div>
						</div>
						<div className="d-flex justify-content-between"></div>
						<button className="btn btn-outline-dark rounded-pill px-4 mt-5 w-100">
							Confirmar Compra
						</button>
					</div>
				</div>
				<div className="row d-flex text-center mt-5">
					<div className="col">
						<button className="btn btn-light rounded-pill px-4 mt-5 mx-2">
							Volver a Productos
						</button>
						<button className="btn btn-dark rounded-pill px-4 mt-5 mx-2">
							Confirmar Compra
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
