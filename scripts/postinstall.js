const { execSync } = require('child_process');

try {
  // Generate Prisma Client
  execSync('prisma generate', { stdio: 'inherit' });

  // Install additional dependencies if needed
  execSync('npm install @tailwindcss/typography', { stdio: 'inherit' });
} catch (error) {
  console.error('Post-install script failed:', error);
  process.exit(1);
}