const gulp = require("gulp");
const fonter = require("gulp-fonter");
const woff2 = require("gulp-ttf2woff2");
const fs = require("fs");

const path = {
	assets: `./src/assets`,
};

const otf2ttf = () => {
	return gulp
		.src(`${path.assets}/fonts/*.otf`)
		.pipe(
			fonter({
				formats: ["ttf"],
			})
		)
		.pipe(gulp.dest(`${path.assets}/fonts/`));
};

const ttf2woff = () => {
	return gulp
		.src(`${path.assets}/fonts/*.ttf`)
		.pipe(
			fonter({
				formats: ["woff"],
			})
		)
		.pipe(gulp.dest(`${path.assets}/fonts/`))
		.pipe(gulp.src(`${path.assets}/fonts/*.ttf`))
		.pipe(woff2())
		.pipe(gulp.dest(`${path.assets}/fonts/`));
};

const fontsStyle = () => {
	let fontsFile = `${path.assets}/styles/fonts.scss`;
	fs.readdir(`${path.assets}/fonts/`, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, "", cb);
				let newFileOnly;
				for (let index = 0; index < fontsFiles.length; index++) {
					let fontFileName = fontsFiles[index].split(".")[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split("-")[0]
							? fontFileName.split("-")[0]
							: fontFileName;
						let fontWeight = fontFileName.split("-")[1]
							? fontFileName.split("-")[1]
							: fontFileName;
						if (fontWeight.toLowerCase() === "thin") {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === "light") {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === "medium") {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === "semibold") {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === "bold") {
							fontWeight = 700;
						} else if (
							fontWeight.toLowerCase() === "extrabold" ||
							fontWeight.toLowerCase() === "heavy"
						) {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === "black") {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(
							fontsFile,
							`@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.ttf") format("ttf");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
							cb
						);
						newFileOnly = fontFileName;
					}
				}
			}
		}
	});

	return gulp.src(`./src`);
	function cb() {}
};

const fonts = gulp.series(otf2ttf, ttf2woff, fontsStyle);
const tasks = gulp.parallel(fonts);

gulp.task("default", tasks);
