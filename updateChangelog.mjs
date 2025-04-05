import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const [filePath, description] = args;

if (!filePath || !description) {
  console.error("Usage: node updateChangelog.mjs <filePath> <description>");
  process.exit(1);
}

const changelogPath = path.resolve("CHANGELOG.md");
const date = new Date().toISOString().split("T")[0];
const entry = `\n* \`${filePath}\`\n  : ${description}.\n`;

fs.appendFile(changelogPath, entry, (err) => {
  if (err) {
    console.error("Error updating changelog:", err);
    process.exit(1);
  }
  console.log("Changelog updated successfully!");
});