# RecipeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Important (app.component.ts)

Use your API-key and auth-domain inorder to run project properly.
I've used firebase as a backend. So visite firebase site, add new project and get your API-key.

ngOnInit() {
    firebase.initializeApp({
      apiKey: "Your-API-Key",
      authDomain: "Your..."
    });
  }

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
