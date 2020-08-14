import React, { Component } from "react";
import Operation from "./components/operation/Operation";
import History from "./components/history/History";
import Total from "./components/total/Total";

class App extends Component {
	state = {
		transactions: [],
		description: "",
		amount: "",
	};

	addTransaction = (add) => {
		const transactions = [
			...this.state.transactions,
			{
				id: `cmr${(+new Date()).toString(16)}`,
				description: this.state.description,
				amount: this.state.amount,
				add,
			},
		];
		this.setState({ transactions, description: "", amount: "" });
	};

	addAmount = (e) => {
		if (!/[0-9]/i.test(e.target.value)) e.target.value = this.state.amount + "0"
		this.setState({ amount: e.target.value });
	};

	addDescriptiom = (e) => {
		this.setState({ description: e.target.value });
	};

	render() {
		return (
			<>
				<header>
					<h1>Кошелек</h1>
					<h2>Калькулятор расходов</h2>
				</header>

				<main>
					<div className="container">
						<Total transactions={this.state.transactions} />
						<History transactions={this.state.transactions} />
						<Operation
							addTransaction={this.addTransaction}
							addAmount={this.addAmount}
							addDescription={this.addDescriptiom}
							description={this.state.description}
							amount={this.state.amount}
						/>
					</div>
				</main>
			</>
		);
	}
}

export default App;
