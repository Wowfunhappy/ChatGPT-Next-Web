module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: { version: "3.38.1", proposals: true }
				targets: {
					electron: '3.1.13'
				},
			},
		],
		'next/babel',
	],
};
