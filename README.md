# Style code

### Introduction

This guide aims to provide comprehensive rules and examples of what you should do and what you should not do .

### Naming

[] do name everything with a clear, understandable and speaking name
[] do use American English pronunciation. e.g organization instead of organisation

### Typing (Typescript)

Since we use typescript we should type everything we can.
[] do type everything
[] do use specific and strong types
[] do use generics for classes and methods to provide strong typing (compiler and code completion)
[] do use unknown when the type is irrelevant (which is rarely the case ) or unknown
[] do not use any (only if there is absolutely no other possibility)
[] do not reuse types that do only fit partially

### Models

[] Models are types that a responsible for transporting data and rarely offer further functionality.
[] do use the angular CLI to generate model types (interfaces, classes, enumerators)
[] do prefer interface over class whenever possible (Angular CLI Commands, use --type=model)
[] do use inheritance whenever it generates an advantage
The official Angular Coding Styleguide is used as a base reference.
No rule set is perfect. There are almost always special cases that require a solution which violates a rule. Theses cases must be
discussed in the frontend team. Exceptions are only allowed with a general agreement.
[] do name models and enums with a singular noun. e.g: DocumentState or PostalAddress
[] do always name values of an enum with UPPER_SNAKE_CASE
[] do export models in the index.ts in the same folder
[] do not implement complex logic within models (e.g. toString() or similar simple functions are ok)
[] do not define more than one model per file
[] do not use Model or Enum in the name
[] do not use plural for type names

### Modules

A module defines a domain-specific group of different elements such as components, services and models
[] do make sure that a module has a single responsibility
[] do keep modules as small as possible and as large as necessary
[] do suffix module names with Module. The cli does this for you.
[] do create an index.ts in the models folder and export all files: export \* from ./<model_file>
[] do not export anything that is only needed internally (be strict and export only if there is viable use-case)

### Components

[] do put the template in <component_name>.component.html
[] do put the styles in <component_name>.component.scss
[] do put animations (if there are any) in <component_name>.animations.ts and import it into the animations array of the component
decorator
[] do keep components as simple as possible with a clear defined public api
[] do suffix component names with Component. The cli does this for you.
[] do make sure that the selector always is prefixed with the selectorPrefix of the current project defined in angular.json
[] do not copy past code from one component to another. instead move the code to a service or another reusable place.

### Styles

[] do nest rules to increase specificity and stay DRY
[] do use specific class names (especially for nested elements) to increase specificity and reduce risk of side-effects
[] do put styles in a scss partial that is included globally if a rule concerns more elements than just the current component
[] do prefer @use over @import in scss files.
[] do not use :host to define styles that are only relevant when the component is within a particular parent. only define always valid styles that
need to be on the custom element (the host)
[] do not use :ng-deep
[] do not put rendered scss style (actual rules) in partials e.g. \_buttons.scss. Only functions, mixins, variables and things that are removed
by the sass preprocessor are allowed.

### Templates

[] do rename variables in structural directives to reduce complexity and stay dry. e.g. <div \*ngIf=”val$ | async as value”>{{
value }}</div>
[] do keep in mind that getters used in the template are executed everytime the change detection runs. So keep the logic simple to ensure
performance.
[] do not implement logic in the template. instead implement a get method in the typescript file and refer to that.

### Typescript general

[] do use if(!!val) to perform a “not null or undefined” check. it does negate the value twice which returns true if the value was initially truthy
and false if it was undefined or null. sometimes it is enough to just check with if(val). Latter is preferred.
[] do always const when defining a variable. You can change it later to let if need be.
[] do prefer iterator functions on arrays (such as includes, filter, map, etc.) over for loops and if statements
[] do name global constants (outside of a class or interface) with UPPER_SNAKE_CASE
[] do name methods that return a boolean with <verb><Adjective> e.g. isActive(). “is” and “has” are the preferred verbs.
[] do prefer === and !== over == and !=
[] do not use var

### Event handlers

[] do name event handlers with an appropriate prefix. e.g. onSave, afterSaveFailed
[] do minimize the contents of event handlers. the actual logic of what happens on that particular event should reside in its own method. e.g. save

# Structures

# Husky: pre-commit and pre-push hooks.

- prettier: code formatting
- stylelint: scss code
- eslint: es code

# Extensions

- Name: Prettier - Code formatter
  Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Name: SonarLint
  VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode
