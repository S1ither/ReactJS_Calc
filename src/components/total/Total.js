import React from "react";

const Total = ({ transactions }) => {
	let income = 0;
	let expense = 0;

	for (const { add, amount } of transactions) {
		if (add) income += +amount;
		else expense += +amount;
	}

	return (
		<section className="total">
			<header className="total__header">
				<h3>Баланс</h3>
				<p className="total__balance">{income - expense} ₽</p>
			</header>
			<div className="total__main">
				<div className="total__main-item total__income">
					<h4>Доходы</h4>
					<p className="total__money total__money-income">+{+income} ₽</p>
				</div>
				<div className="total__main-item total__expenses">
					<h4>Расходы</h4>
					<p className="total__money total__money-expenses">-{+expense} ₽</p>
				</div>
			</div>
		</section>
	);
};

export default Total;
