const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const markdownPath = path.join(__dirname, '../site_data/blog/blog-to-push.md');
  const content = fs.readFileSync(markdownPath, 'utf-8');

  const postId = 'blog-to-push-id';
 
  const updated = await prisma.blog.update({
    where: { id: postId },
    data: { content },
  });

  console.log('Post updated:', updated.title);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
