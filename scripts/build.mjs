import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFile(path.join(projectRoot, relativePath), "utf8");

const [template, styles, app, dataText, metadataText] = await Promise.all([
  read("src/index.template.html"),
  read("src/styles.css"),
  read("src/app.js"),
  read("src/data/kanji.json"),
  read("src/data/metadata.json"),
]);

const kanji = JSON.parse(dataText);
const metadata = JSON.parse(metadataText);
const inlineData = [
  `const DATA_VERSION=${JSON.stringify(metadata.dataVersion)};`,
  `const GENERATED_AT=${JSON.stringify(metadata.generatedAt)};`,
  `const PROJECT_REPOSITORY_URL=${JSON.stringify(metadata.repositoryUrl || "")};`,
  `const KANJI=${JSON.stringify(kanji)};`,
  "const LS='frequencyKanjiSrs.state.v1';",
].join("\n");

const html = template
  .replace("/*__INLINE_STYLES__*/", styles.trim())
  .replace("/*__INLINE_DATA__*/", inlineData)
  .replace("/*__INLINE_APP__*/", app.trim());

if (html.includes("/*__INLINE_")) throw new Error("A build placeholder was not replaced");

await writeFile(path.join(projectRoot, "index.html"), `${html.trim()}\n`, "utf8");
console.log(`Built index.html with ${kanji.length} kanji (${Buffer.byteLength(html)} bytes).`);
