# Graffiti

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This will run the server code, and frontend dev server concurrently.
In order to utilize the database and API function, the backend server must be running. In addition, you'll need to have a connection to a **mongodb** and **redis** instance, local or otherwise.

If you wish to run one of the other by itself, you can run:
`npm run dev:backend` and `npm run dev:frontend`

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Setup

Make a copy of the `.env.sample` to `.env` and fill in the details.
