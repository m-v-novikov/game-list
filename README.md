# Games List

## This is a test project for own non-commercial purposes


First, install dependencies:
```
npm install
```

API - https://rawg.io/apidocs.

Put the .env file in the project root and set `GAME_API_KEY`. If you don't do that, the API may respond with an error.

You can run it in dev mode: 
```
npm start

http://localhost:9000/
```

Or in production mode: 
```
npm run build
npm run serve

http://localhost:3000/
```


## Things that I would set up in another way on a real project:

- For filter form, I would use Formik and set up a GenericComponent that will allow me to initiate any FormComponent easier, and I will have a single point for improvement for all my forms.

- Also, I would add validation rules for the filter form(pass it as a prop).

- I would use self-written UI components instead of Material-UI. The libraries are too heavy, and they have pretty simple logic.


## Things that may be done in the nearest future:

- Add a preloader to make the transition between responses smooth.

- Add other fields for filter form.

- Add better error handling(add a field for error in storage).
