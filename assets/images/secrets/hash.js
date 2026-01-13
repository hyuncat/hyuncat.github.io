import { createHash } from "crypto";

const SALT = "a million lambent oysters, orgiastic pearls of caviar";

// take password from command line
const password = process.argv.slice(2).join(" ");

if (!password) {
  console.error("Usage: node hash.js <password>");
  process.exit(1);
}

const input = `${SALT}|${password}`;
const hash = createHash("sha256").update(input).digest("hex");

console.log("Password:", password);
console.log("SHA256:", hash);
