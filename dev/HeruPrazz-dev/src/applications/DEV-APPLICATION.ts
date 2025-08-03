import fs from 'fs';
import path from 'path';

// Path ke file application.md kamu
const developerProfilePath = path.join(__dirname, '../../dev/HeruPrazz-dev/application.md');

// Cek apakah file ada
if (fs.existsSync(developerProfilePath)) {
  const profile = fs.readFileSync(developerProfilePath, 'utf-8');
  console.log("Developer Profile Loaded:\n", profile);
} else {
  console.log("Developer profile not found!");
}

