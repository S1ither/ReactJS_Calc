import React from "react";

const HistoryItem = ({ transaction }) => (
	<li id={transaction.id} className={`history__item history__item-${transaction.add ? "plus" : "minus"}`}>
		{transaction.description}
		<span className="history__money">
			{transaction.add ? "+" + transaction.amount : "-" + transaction.amount} ₽
		</span>
		<button
			className="history__delete"
			onClick={() => {
				document.getElementById(transaction.id).remove();
				/* if (transaction.add) document.getElementsByClassName("total__money-income")[0].nodeValue -= transaction.amount;
				else document.getElementsByClassName("total__money-expenses")[0].nodeValue -= transaction.amount; */
			}}
		>
			x
		</button>
	</li>
);

export default HistoryItem;
