# DobrilkoHealthdex

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## App Structure

- app - folder contains main module of SPA, main routing module

    - not-found - component for 404 page

    - pokemon-details - module, containing /pokemon-details/:id page and its contents

        - layout - component, containing router outlet for /pokemon-details module

        - pokemon-info - folder, containing pokemon details components

            - evolution-chart - component, responsible for displaying evolution chain of pokemon

                - evolution-step - component, responsible for displaying evolution chain item

            - moves-list - component, showing moves of current pokemon (list is paginated with usage of ngx-infinite-scroll)

                - moves-list.service.ts - service, responsible for providing moves list updates

                - name-transform.pipe.ts - pipe to transform name of move to suitable for user form

    - search-view - module, containing search view with basic info about pokemons

        - search-list - module, containing search pokemons page and its contents

            - base-stats - folder, containing component, model and service to display basic stats of pokemon. Stats, that less than 60 are red, from 60 to 90 are yellow, 90+ are green.

            - pokedex-data - component, containing basic pokedex data for pokemon

    - shared - folder, containing components, models and services, which are shared between pages

        - component

            - navbar - navigation bar component

        - model

            - pokemon-basic-info.model.ts - pokeapi models

        - service

            - pokemon-basic-info.service.ts - service, which fetches basic pokeapi models from api service via http

## Deployment

Application is deployed via firebase-tools.

Url: http://dobrilkohealthdex.firebaseapp.com
