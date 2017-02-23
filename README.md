# angular-redux-store
Simple examples of how to use redux and @angular-redux/store with Angular 2.4.7 both as JIT and AOT compiled.

There are two directories in this repo
  1. redux:
  2. redux-store
 
Both the examples are modified version of the angular-quickstart tutorial. These simple examples illustrate how to use vanilla Redux and @angular-redux/store both as JIT and AOT compilied. They are both based on Angular version 2.4.7.
 
To run these samples. Please do the following:

1. Install the latest version of node and npm
2. Clone or download this repo.
3. In each of the directories run the following sequnce of commands in a terminal window
    3.1 npm install
    3.2 npm run build:aot
    3.3 npm run start
    
    This will start a browser window and lanuch index.html which is defaulted to the AOT compiled version. To run the JIT compiled version simply go the the browsers navigation bar and change index.html to index-jit.html.
