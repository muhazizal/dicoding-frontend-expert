const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const resource = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination);
}

fs.readdirSync(resource).forEach((image) => {
	sharp(`${resource}/${image}`)
		.resize(800)
		.toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

	sharp(`${resource}/${image}`)
		.resize(400)
		.toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
