# Portfolio App 2.0

A modern, full-stack portfolio website built with Next.js, Prisma, Tailwind CSS, and PostgreSQL. Showcases my projects, articles and personality. 

### 1. Clone the Repository
```bash
git clone https://github.com/Gobindpreet9/portfolio-app-2.0.git
cd portfolio-app-2.0
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Copy the example `.env` file (or create your own) and fill in your database credentials:
```env
DATABASE_URL=your_postgres_connection_string
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set Up the Database
If this is your first time, push the Prisma schema to your database:
```bash
npx prisma migrate dev --name init
```
For database migration:
```bash
npx prisma migrate dev --name <migration_name>
```
Or, if you are connecting to an existing database:
```bash
npx prisma migrate deploy
```
To add data to the database, use Prisma Studio:
```bash
npx prisma studio
```

### 5. Start the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

You must set up a `.env` file in your project root with the following variables (see `.env.example` for a template):

```env
# PostgreSQL connection string (Vercel Postgres/Neon recommended)
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE?

# Public URL for your app (used in some client-side code)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Node environment
NODE_ENV=development

# Resend email service
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=your_contact_email
RESEND_FROM_EMAIL=your_verified_sender_email
```

- For production, set your actual Postgres connection string in Vercel's project environment variables.
- Do **not** commit your real `.env` file; only commit `.env.example`.

## Sending Emails with Resend

This project uses [Resend](https://resend.com/) to send email notifications from the contact form. To enable this feature:

1. **Sign up at [Resend](https://resend.com/)** and get your API key.
2. **Set the following environment variables** in your `.env` file (see `.env.example`):
   - `RESEND_API_KEY` — Your Resend API key
   - `CONTACT_EMAIL_TO` — The email address where notifications should be sent
   - `RESEND_FROM_EMAIL` — The verified sender address from your Resend dashboard
3. **(Optional)**: For production, verify your domain in the Resend dashboard and use a verified sender address in the API route (set `RESEND_FROM_EMAIL`).
4. **Install the Resend SDK:**
   ```sh
   npm install resend
   ```
5. **Deploy or restart your app** after setting the environment variables.

The contact form will POST to `/api/contact`, which saves the message to the database and sends an email notification using Resend.

## Updating Blog Content from Markdown

To ensure your blog posts in the database retain correct markdown formatting, use the script at `scripts/updatePostContent.js`. This script reads a `.md` file and updates the corresponding post in your Prisma database, preserving all line breaks and markdown structure. This is especially useful if copy-pasting markdown into Prisma Studio causes formatting issues.

**Usage:**
1. Edit the script to specify the correct markdown file path and blog ID.
2. Run the script with:
   ```
   node scripts/updatePostContent.js
   ```
3. Your blog's content will be updated in the database with the properly formatted markdown.

## Deployment
- Deploy seamlessly to Vercel.
- Set your `DATABASE_URL` in Vercel's project environment variables.
- Production uses PostgreSQL (Neon/Vercel Postgres recommended).

## License
MIT
