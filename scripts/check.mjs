import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFile(path.join(projectRoot, relativePath), "utf8");
const [html, app, dataText] = await Promise.all([
  read("index.html"),
  read("src/app.js"),
  read("src/data/kanji.json"),
]);
const kanji = JSON.parse(dataText);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(kanji.length === 2000, `Expected 2000 kanji, found ${kanji.length}`);
assert(new Set(kanji.map((item) => item.id)).size === 2000, "Kanji IDs must be unique");
assert(new Set(kanji.map((item) => item.k)).size === 2000, "Kanji characters must be unique");
assert(new Set(kanji.map((item) => item.rank)).size === 2000, "Frequency ranks must be unique");
for (let level = 1; level <= 40; level += 1) {
  assert(kanji.filter((item) => item.level === level).length === 50, `Level ${level} must contain 50 kanji`);
}
assert(!html.includes("/*__INLINE_"), "Built index.html contains an unreplaced placeholder");
assert(!html.includes("KANJI_MNEMONICS"), "Legacy generated mnemonics remain in the build");
assert(html.includes("Study activity"), "Activity calendar was not included in the build");
assert(html.includes("Needs attention"), "Weak-item view was not included in the build");
assert(html.includes("Report content problem"), "Content-reporting control was not included in the build");
assert(app.includes("recordActivity('lessons');save(0)"), "Completed lessons must persist immediately");
assert(app.includes("function storageGet") && app.includes("function storageSet"), "Storage fallback is missing");
assert(!app.includes("if(!localStorage.getItem(LS)"), "Initialization must use the safe storage wrapper");
new vm.Script(app, { filename: "src/app.js" });

const storageStart = app.indexOf("let storagePersistent");
const storageEnd = app.indexOf("const by=");
assert(storageStart >= 0 && storageEnd > storageStart, "Could not isolate storage helpers");
const storageHelpers = app.slice(storageStart, storageEnd);
new vm.Script(`${storageHelpers}
storageSet('test','saved in memory');
if(storageGet('test')!=='saved in memory')throw new Error('Volatile storage fallback failed');
storageRemove('test');
if(storageGet('test')!==null)throw new Error('Volatile storage removal failed');
`).runInNewContext({
  localStorage: {
    getItem() { throw new Error("blocked"); },
    setItem() { throw new Error("blocked"); },
    removeItem() { throw new Error("blocked"); },
  },
});

console.log("Checks passed: data integrity, build markers, storage fallback, feature markers, and JavaScript syntax.");
