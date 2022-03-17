/**
 * GAS requires all JS and CSS to be inlined in the HTML.
 * This produces a final index.html file that can be pushed to script.google.com.
 */

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { inlineSource } from "inline-source";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(scriptDir, "../src/client/html/index.html");
const rootpath = join(scriptDir, "../");

inlineSource(htmlPath, {
  compress: false,
  rootpath,
}).then((inlinedHtml) => {
  writeFileSync(join(rootpath, "/gas/index.html"), inlinedHtml);
});
