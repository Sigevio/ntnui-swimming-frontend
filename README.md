## Getting Started - Frontend

First, install all dependencies:

```bash
cd frontend
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

All pages are located in the `frontend/pages` directory. Every page is composed of components located in the `frontend/components` directory.

## API

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages.

## Make the page fast as F%@*

Make sure you operate in the `frontend` directory. Then run:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser and be amazed.

## Getting Started - Backend

First, install Django and setup virtual environment:

```bash
pip3 install django
cd backend
pipenv install django
```

Then, run the virtual environment and run the server:

```bash
pipenv shell
python3 manage.py runserver
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

