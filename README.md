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
```

- For production, set your actual Postgres connection string in Vercel's project environment variables.
- Do **not** commit your real `.env` file; only commit `.env.example`.

## Deployment
- Deploy seamlessly to Vercel.
- Set your `DATABASE_URL` in Vercel's project environment variables.
- Production uses PostgreSQL (Neon/Vercel Postgres recommended).

## License
MIT
