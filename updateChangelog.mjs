import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const changelogPath = path.resolve("CHANGELOG.md");
const date = new Date().toISOString().split("T")[0];

// Get the list of staged files
const stagedFiles = execSync("git diff --cached --name-only", { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

if (stagedFiles.length === 0) {
  console.log("No changes to update in the changelog.");
  process.exit(0);
}

fs.readFile(changelogPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading changelog:", err);
    process.exit(1);
  }

  const lines = data.split("\n");
  const dateHeader = `### ${date}`;

  let dateHeaderIndex = lines.findIndex(line => line === dateHeader);
  if (dateHeaderIndex === -1) {
    // Add a new date header if it doesn't exist
    lines.unshift(`${dateHeader}\n`);
    dateHeaderIndex = 0;
  }

  stagedFiles.forEach(filePath => {
    const fileEntry = `* \`${filePath}\``;
    const fileEntryIndex = lines.findIndex(line => line.startsWith(fileEntry));

    if (fileEntryIndex === -1 || fileEntryIndex < dateHeaderIndex) {
      // Add a new file entry under the date header
      lines.splice(dateHeaderIndex + 1, 0, fileEntry);
    }
  });

  const newContent = lines.join("\n");
  fs.writeFile(changelogPath, newContent, "utf8", (err) => {
    if (err) {
      console.error("Error updating changelog:", err);
      process.exit(1);
    }
    console.log("Changelog updated successfully!");
  });
});
