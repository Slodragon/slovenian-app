// Regenerate englishprofi-single-file.html from the source files.
// Run with: node build-single-file.js
const fs = require("fs");
const path = require("path");
const dir = __dirname;

let html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const inline = (file, tag) => fs.readFileSync(path.join(dir, file), "utf8");

const css = inline("styles.css");
const lessons = inline("lessons.js");
const gen = inline("content-gen.js");
const fbapp = inline("firebase-app.js");
const app = inline("app.js");
for (const s of [css, lessons, gen, fbapp, app]) {
  if (s.includes("</script>")) throw new Error("unsafe inline content in " + file);
}

html = html.replace('<link rel="stylesheet" href="styles.css">', "<style>\n" + css + "\n</style>");
html = html.replace('<script src="lessons.js"></script>', "<script>\n" + lessons + "\n</script>");
html = html.replace('<script src="content-gen.js"></script>', "<script>\n" + gen + "\n</script>");
html = html.replace('<script src="firebase-config.js"></script>\n', "");
html = html.replace('<script src="firebase-app.js"></script>', "<script>\n" + fbapp + "\n</script>");
html = html.replace('<script src="app.js"></script>', "<script>\n" + app + "\n</script>");

fs.writeFileSync(path.join(dir, "englishprofi-single-file.html"), html);
console.log("Wrote englishprofi-single-file.html");
