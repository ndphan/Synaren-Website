const fs = require('fs');

function randomBuildId() {
	return 'xxxx-xxxx'.replace(/[xy]/g, char => {
			var r = Math.random() * 16 | 0, v = char == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(9);
	});
}

fs.readFile('./.env', 'utf8', (err, data) => {
  if (err) return console.log(err);
		fs.writeFile(
			'./.env', 
			data.replace(/\$GENERATE_BUILD/g, randomBuildId()), 
			'utf8', 
			err => err && console.log(err)
		);
});