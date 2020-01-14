## Developer Evaluation Project

Library created in JavaScript/React to score a game of Ten-Pin Bowling. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


**Input:** String as described below in the Assumptions section representing a bowling game 

**Output:** Integer score 

#### Assumptions made in the project

The output is calculated for the full frame scoring inputs provided in the format as listed below:

`X|X|X|X|X|X|X|X|X|X||XX`

`9-|9-|9-|9-|9-|9-|9-|9-|9-|9-`

`X|7/|9-|X|-8|8/|-6|X|X|X||81`

`5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5`


#### Scoring rules

Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.

In each frame, the bowler gets up to two tries to knock down all ten pins.

If the first ball in a frame knocks down all ten pins, this is called a "strike". The frame is over. The score  
for the frame is ten plus the total of the pins knocked down in the next two balls.

If the second ball in a frame knocks down all ten pins, this is called a "spare". The frame is over. The score for the frame is ten plus the number of pins knocked down in the next ball. 

If, after both balls, there is still at least one of the ten pins standing the score for that frame is simply 
the total number of pins knocked down in those two balls. 

If you get a spare in the last (10th) frame you get one more bonus ball. If you get a strike in the last (10th) frame you get two more bonus balls. 

These bonus throws are taken as part of the same turn. If a bonus ball knocks down all the pins, the process does not repeat. The bonus balls are only used to calculate the score of the final frame. 

The game score is the total of all frame scores. 
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
