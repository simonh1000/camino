// bundles output with manifest to create distributable zip
// todo copy version from package.json

import fs from "fs";
import JSZip from "jszip";

const zip = new JSZip();

import manifest from "./manifest.json" with { type: "json" };
const tag = manifest.tag;

zip.file(`${tag}.js`, fs.readFileSync(`./dist/${tag}.js`), { binary: true });
zip.file("manifest.json", fs.readFileSync("manifest.json", "utf-8"));

zip.generateAsync({ type: "uint8array" }).then((content) => {
  fs.writeFileSync(`dist/${tag}.zip`, content);
});
