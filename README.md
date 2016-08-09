| Component        | Action           | Parent  |
| ------------- |:-------------:| -----:|
| AppComponent      | holds data | Steph and Noah |
| KegListComponent      | Display Kegs, Filter Kegs      |   AppComponent |
| KegComponent | Display a single keg: name, brand, price, alcohol, pints; and subtract pints | KegListComponent |
| EditKegComponent      | allows user to modify Keg properties | KegListComponent |
| NewKegComponent      | Present form where user can add a new keg | KegListComponent |


Tap Room App
Build a small Angular app for a bar to keep track of their kegs. Use the To-Do List homework as a guide. Look for relationships between the various parts of this program and the parts of the To-Do List.

Here are some user stories to get you started. As a bartender ...

I want to fill out a form when I tap a new keg to create a display for it.
I want to see what kegs I have available. For each keg, I need to see its name, brand, price and alcohol content.
I want to see a display of how many pints are left in a keg. A full keg has 124 pints in it.. I want to be able to click a button on a display of a keg whenever I sell a pint of that kind of beer and have the display of how many pints are left decrease by 1.
I want to be able to see all the kegs that have less than 10 pints left so that I can be ready to change them.
I want to be able to edit a keg's properties after entering them.
I want to have kegs color coded to show me at a glance if they are cheap or expensive - say greater or less than $5 per pint. I also want to use the alcohol content property to display stronger beers differently than weaker beers.



Setup steps when beginning a new project, or cloning an existing one:
1. Run npm install and bower install to install dependencies.
2. Install any global packages such as gulp, bower, sass, typescript, and our text editor's typescript packages.
3. Build the project with gulp build.
4. Run it with: gulp serve.

1. user npm to install bower globally. user bower to manage front-end dependencies for the app
2. run bower's `init` command to create the manifest file
```
$ npm install bower -g
$ bower init
```
any time we need a front-end dependency we can add it using

```
$ bower install packagename --save
```
SETUP NOTES //////////////////////

/*
- clone repo
- npm install
- bower install
- install globals if needed (gulp, bower, sass, typescript, typescript packages.)
  - npm install gulp -g
  - npm install bower -g
  - gem install sass
  - npm install typescript -g
  - apm install atom-typescript
- gulp build
- gulp serve
*/
