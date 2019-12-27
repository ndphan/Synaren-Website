const fs = require('fs');

const productionFile = "./.env.production";

function randomBuildId() {
	const date = new Date().toISOString().split('T')[0];
	const randomHash = 'xxxx'.replace(/[xy]/g, char => {
		const r = Math.random() * 16 | 0, v = char == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
	return `${date}-${randomHash}`
}

fs.readFile(productionFile, 'utf8', (err, data) => {
		if (err) return console.log(err);
		fs.writeFile(
			productionFile, 
			data.replace(/\REACT_APP_API_VERSION_NUMBER=[\d\w\-]*/g, `REACT_APP_API_VERSION_NUMBER=${randomBuildId()}`), 
			'utf8', 
			err => err && console.log(err)
		);
});