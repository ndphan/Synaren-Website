const fs = require('fs');

const productionFile = "./.env.production";

function randomBuildId() {
	return 'xxxx-xxxx'.replace(/[xy]/g, char => {
			var r = Math.random() * 16 | 0, v = char == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
	});
}

fs.readFile(productionFile, 'utf8', (err, data) => {
  if (err) return console.log(err);
		fs.writeFile(
			productionFile, 
			data.replace(/\REACT_APP_API_VERSION_NUMBER=[\d\w\-]+/g, `REACT_APP_API_VERSION_NUMBER=${randomBuildId()}`), 
			'utf8', 
			err => err && console.log(err)
		);
});