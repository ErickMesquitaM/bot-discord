module.exports = [
	{
		name: 'currency',
		description: 'response with currency money',
		options: [{
			name: "money",
			description: "type money",
			type: 3,
			required: true,
			choices: [
				{
				  name: "USD",
				  value: "usd"
				},{
					name: "EUR",
					value: "eur"
				},{
					name: "BTC",
					value: "btc"
				}
			]
		}]
	},{
		name: 'math',
		description: 'simple math accounts',
		options: [{
			name: "type",
			description: "type math",
			type: 3,
			required: true,
			choices: [
				{
				  name: "ADD",
				  value: "add"
				},{
				  name: "MIN",
				  value: "min"
				},{
				  name: "MULT",
				  value: "mult"
				},{
				  name: "DIVI",
				  value: "divi"
				},
			  ]
		}],
		// options: [{
		//   name: "number",
		//   description: "number",
		//   type: 10,
		//   required: true,
		// }],
	}
];
