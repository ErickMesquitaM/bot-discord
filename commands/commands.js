module.exports = [

	{
		name: "commands",
		description: 'response all commands'
	},{
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
		name: 'meme',
		description: 'response random meme',
	},{
		name: "movie",
		description: "pick random movie"
	}
];
