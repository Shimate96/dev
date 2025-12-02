#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏗️  Building StockFlow App...\n');

// Verify required files
const requiredFiles = [
  'package.json',
  'app.json',
  'tsconfig.json',
  'App.tsx',
];

const missingFiles = requiredFiles.filter(file => {
  return !fs.existsSync(path.join(__dirname, '..', file));
});

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles.join(', '));
  process.exit(1);
}

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, '..', 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  require('child_process').execSync('npm install', { cwd: path.join(__dirname, '..') });
}

console.log('✅ Build prerequisites verified');
console.log('\n🚀 Ready to build! Run:');
console.log('   - npm start     (for development)');
console.log('   - npm run android (for Android)');
console.log('   - npm run ios    (for iOS)');
