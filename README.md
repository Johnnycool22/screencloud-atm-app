# ScreencloudAtmApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve --open` for a dev server. This will navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## The ATM App instructions
- Landing page loads first with animated gif and pin authentication and Spin me Home options in navbar.
- Select 'Spin me home!' option and see what happens. This is the 'home' routing button which can be pressed any page to return user to the main landing page.
- Select 'PIN Authenticate' option, the ATM dashboard appears with a keypad. Enter '1111' manually into the input box from keybaord only. (NOTE: keypad numerical buttons not activated, blank buttons have been disabled but the other keypad selection buttons have been activated).
- Any entered PIN has been coded to remain hidden. 
- 'Clear' button removes any entered numbers. 
- 'Cancel' button returns to main landing page. 
- 'Enter' is initially disabled until a 4 digit pin has been entered then becomes active. 
- Once '1111' pin is entered is sends POST to API which returns a JSON response allwoing the user to process. Selecting 'Enter' when activated checks correct PIN then navigates to the main transaction screen.
- Selecting 'Check Balance' option - current balance is display, then futher options to withdraw cash or exit.
- Selecting 'Cash Withdraw' option - user is requested to enter amount. 'Enter' button is disabled until an amount has been enetered. The amount value is to be POST to API and processed in Java logic program (API is not present here). 
- Once transaction is complete select 'EXIT' button or the 'Spin me home!' option in navbar to exit to main landing page.
- End of App functionality.

## GitHub code version storage

Angular 8 Typscript code created for The ATM App was stored in my GitHub account under username 'Johnnycool22' in a public repository called 'screencloud-atm-app'.

## The ATM App pages

Screen images of the The ATM App can be viewed in screencloud-atm-app/src/assets/ATM-App-images.
Image is included showing JSON response from https://frontend-challenge.screencloud-michael.now.sh/api/pin/ currentBalance = 220 from pin authentication.

## Testing The ATM App

Functional testing was carried out using Selenium IDE in Chrome browser. It recorded interactions with the website and App fucntions, was able to record and play back tests on Chrome.

## Issues with ATM APP
- Unable to use with the java backend, requires a REST API like SpringBoot to integrate logic to Frontend.
- Keypad buttons could not be activated.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

