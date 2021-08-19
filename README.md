# Overview

Figure out a scalable FE application.

# Structure

### Folder structure

app/
├──auth/
| ├──auth.module.ts
├──core/
| ├──core.module.ts
├──shared/
| ├──services/
| | └──storage/
| | └──http/
| |
| ├──store/
| | ├──reducers/
| | ├──actions/
| | ├──effects/
| |
| └──facade/
| └──base.facade.ts
| |
├──features/
| ├──feature module A/
| | └──components/
| | └──guards/
| | └──models/
| | └──pages/
| | └──services/
| | └──state/
| | └──featureA.module.ts
| ├──feature module B/
| | └──components/
| | └──guards/
| | └──models/
| | └──pages/
| | └──services/
| | └──state/
| | └──featureB.module.ts
├──app.module.ts
├──app.module-routing.ts
├──app.component.ts
assets/
environments/
theme/

### Nodes

- Unidirectional dataflow by Redux (using `ngrx/store`)
- 3 layers: --- Abstraction layer --- Presentation Layer
- Modular design: Each of the features modules share the same horizontal separation of the core, abstraction, and presentation layer
  - Core layer : State management (actions, effects, reducers), async services (http)
  - Abstraction layer: interface for the components in the presentation layer playing the role of the facade
  - Presentation layer: pages, components, UI and delegates users actions to the core layer through the abstraction layer.
-
- `CoreModule` defines singleton services, single-instance components, configuration, authentication service, etc and export any third-party modules needed in `AppModule`. This module is imported only once in `AppModule`
- `Shared Module` contains common components/pipes/directives, shared reducers/actions/effects, utilizes, etc and also export commonly used Angular modules (like `CommonModule`). `SharedModule` can be imported by any feature module.

# Style code

### Introduction

This guide aims to provide comprehensive rules and examples of what you should do and what you should not do.
\*\*\* REQUIRED: Passed quality gate by using eslint, sonarlint, stylelint.

### Naming

[x] do name everything with a clear, understandable and speaking name

### Typing (Typescript)

Since we use typescript we should type everything we can.
[x] do type everything
[x] do use specific and strong types
[x] do use generics for classes and methods to provide strong typing (compiler and code completion)
[x] do use unknown when the type is irrelevant (which is rarely the case ) or unknown
[x] do not use any (only if there is absolutely no other possibility)
[x] do not reuse types that do only fit partially

### Models

[x] Models are types that a responsible for transporting data and rarely offer further functionality.
[x] do use the ionic CLI to generate model types (interfaces, classes, enumerators)
[x] do prefer interface over class whenever possible (Angular Ionic CLI Commands, use --type=model)
[x] do use inheritance whenever it generates an advantage
[x] do name models and enums with a singular noun. e.g: DocumentState or PostalAddress
[x] do always name values of an enum with UPPER_SNAKE_CASE
[x] do export models in the index.ts in the same folder
[x] do not implement complex logic within models (e.g. toString() or similar simple functions are ok)
[x] do not define more than one model per file
[x] do not use Model or Enum in the name
[x] do not use plural for type names

### Modules

A module defines a domain-specific and shares the horizontal separation of the core, abstraction, and presentation layer.
[x] do make sure that a module has a single responsibility
[x] do keep modules as small as possible and as large as necessary
[x] do suffix module names with Module. The cli does this for you.
[x] do cli to generate page to include module.
[x] do create an index.ts in the models folder and export all files: export \* from ./<model_file>
[x] do not export anything that is only needed internally (be strict and export only if there is viable use-case)

### Components

[x] do put the template in <component_name>.component.html
[x] do put the styles in <component_name>.component.scss
[x] do put animations (if there are any) in <component_name>.animations.ts and import it into the animations array of the component
decorator
[x] do keep components as simple as possible with a clear defined public api
[x] do suffix component names with Component. The cli does this for you.
[x] do make sure that the selector always is prefixed with the selectorPrefix of the current project defined in angular.json
[x] do not copy past code from one component to another. instead move the code to a service or another reusable place.

### Styles

[x] do nest rules to increase specificity and stay DRY
[x] do use specific class names (especially for nested elements) to increase specificity and reduce risk of side-effects
[x] do put styles in a scss partial that is included globally if a rule concerns more elements than just the current component
[x] do prefer @use over @import in scss files.
[x] do not use :host to define styles that are only relevant when the component is within a particular parent. only define always valid styles that
need to be on the custom element (the host)
[x] do not use :ng-deep
[x] do not put rendered scss style (actual rules) in partials e.g. \_buttons.scss. Only functions, mixins, variables and things that are removed
by the sass preprocessor are allowed.

### Templates

[x] do rename variables in structural directives to reduce complexity and stay dry. e.g. <div \*ngIf=”val$ | async as value”>{{
value }}</div>
[x] do keep in mind that getters used in the template are executed everytime the change detection runs. So keep the logic simple to ensure
performance.
[x] do not implement logic in the template. instead implement a get method in the typescript file and refer to that.

### Typescript general

[x] do use if(!!val) to perform a “not null or undefined” check. it does negate the value twice which returns true if the value was initially truthy
and false if it was undefined or null. sometimes it is enough to just check with if(val). Latter is preferred.
[x] do always const when defining a variable. You can change it later to let if need be.
[x] do prefer iterator functions on arrays (such as includes, filter, map, etc.) over for loops and if statements
[x] do name global constants (outside of a class or interface) with UPPER_SNAKE_CASE
[x] do name methods that return a boolean with <verb><Adjective> e.g. isActive(). “is” and “has” are the preferred verbs.
[x] do prefer === and !== over == and !=
[x] do not use var

### Event handlers

[x] do name event handlers with an appropriate prefix. e.g. onSave, afterSaveFailed
[x] do minimize the contents of event handlers. the actual logic of what happens on that particular event should reside in its own method. e.g. save

# Hooks

### By `Husky`

- pre-commit:
  - prettier: code formatting
  - stylelint: scss code
  - eslint: es code
- pre-push.
  - run build production

# Extensions

Please install these extensions to fix the code smell immediately.

- Name: Prettier - Code formatter
  Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Name: SonarLint
  VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode
