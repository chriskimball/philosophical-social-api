# Philosophical Social Network API


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Contributors

[Chris Kimball](https://github.com/chirskimball "chirskimball's GitHub Profile")


## Description

The following project is the back end server and database for a social networking API. This app utilizes Express.js, MongoDB, and Mongoose to build out a REST API to Create, Read, Update and Delete Users, Friends, Thoughts, and Reactions.

This application has no front end at the moment, therefore users must interact with the API through an API client such as Insomnia.

Users can make requests to the following API routes to create, read, update or delete data from the database.


### User routes
The following API Routes handle basic user management, GET routes to retrieve user information, POST route to create a user account, PUT route to update user information, and DELETE route to remove user account and all of their associated thoughts.

* GET All Users: GET request to ```http://localhost:3001/api/users/```
* GET one single User by userId: GET request to ```http://localhost:3001/api/users/:userId```
* CREATE New User: POST request to ```http://localhost:3001/api/users/```
    * Example JSON body data in POST request:
    ```bash
    {
	"username":"lerantinoasdf",
	"email":"lerantifno@gmail.com"
    }
    ```
* UPDATE Existing User by userId: PUT request to ```http://localhost:3001/api/users/:userId```
    * Example JSON body data in PUT request:
    ```bash
    {
	    "username":"newUsername",
	    "email":"newEmail@gmail.com"
    }
    ```
* DELETE User by userId and all of their associated Thoughts: DELETE request to ```http://localhost:3001/api/users/:userId```


### Friend routes
The following API routes allow users to add and remove friends. POST requests will allow a user to be added as friends to another user account. DELETE requests will remove the friend association from a user account.

* CREATE New Friend relation to User: POST request to ```http://localhost:3001/api/users/:userId/friends/:friendId```
* DELETE friend from User: DELETE request to ```http://localhost:3001/api/users/:userId/friends/:friendId```


### Thought routes
The following API Routes handle basic user thought management, GET routes to retrieve thought information, POST route to create a new thought, PUT route to update an existing thought, and DELETE route to remove an existing thought.

* GET All Thoughts: GET request to ```http://localhost:3001/api/thoughts/```
* GET one single Thought by thoughtId: GET request to ```http://localhost:3001/api/thoughts/:thoughtId```
* CREATE New Thought: POST request to ```http://localhost:3001/api/thoughts/```
    * Example JSON body data in POST request:
    ```bash
    {
	    "thoughtText": "This is a super interesting thought",
        "username": "lerantinoasdf",
        "userId": "6236aeaadc25bdeafc8851cd"
    }
    ```
* UPDATE Existing Thought by thoughtId: PUT request to ```http://localhost:3001/api/thoughts/:thoughtId```
    * Example JSON body data in POST request:
    ```bash
    {
        "thoughtText": "Here's a cool thought... Dogs are cool"
    }
    ```
* DELETE Category by id: DELETE request to ```http://localhost:3001/api/thoughts/:thoughtId```


### Reactions
The following API routes allow users to add and remove reactions to and from thoughts. POST requests will allow a reaction to be added to a thought. DELETE requests will remove the reaction from a thought.

* CREATE New Reaction to Thought: POST request to ```http://localhost:3001/api/thoughts/:thoughtId/reactions```
    * Example JSON body data in POST request:
    ```bash
    {
	    "reactionBody":"Wow cool thought! #3",
	    "username":"lenartino"
    }
    ```
* DELETE Reaction: DELETE request to ```http://localhost:3001/api/thoughts/:thoughtId/reactions```
    * Example JSON body data in POST request:
    ```bash
    {
	    "reactionId":"6236bcba0a6e21bc285eeab1"
    }
    ```

## Table of Contents 

* [Web Addresses](#web-addresses)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Technology Used](#technology-used)
* [Questions](#questions)


TODO:
## Web Addresses
---------------

*  [Github Repository](https://github.com/chriskimball/philosophical-social-api "Github Repo")
*  [Walkthrough Demo Part 1](https://watch.screencastify.com/v/HeSGAJDGyeXjwtHWFB9b "Walkthrough Demo Part 1")
*  [Walkthrough Demo Part 2](https://watch.screencastify.com/v/VdKKqlPSBL4TB29JUjq0 "Walkthrough Demo Part 2")
*  [Walkthrough Demo Part 3](https://watch.screencastify.com/v/jqrxybZUpPKLFQoVCZXp "Walkthrough Demo Part 3")


## Installation

1. Clone this Git repository
2. Navigate to repository in local directory.
3. To install any necessary dependencies, run the following command:
```bash
npm i
```
4. Run the seed file with the following command:
```bash
npm run seed
```


## Usage

You will need node.js and MongoDB to run this application. Once the repository has been cloned and seed files have been run, navigate to the file directory, open a new terminal and run the following command.

```bash
npm start
```

You can then use Insomnia to make API requests to the different endpoints.


## License

This project is licensed under the MIT license.


## Technology Used

* MongoDB
* JavaScript
* Node.js
* Express.js
* Mongoose npm package
* nodemon npm package


## Questions

If you have any questions about the repo, open an issue or contact me directly at [chriskimball.dev@gmail.com](mailto:chriskimball.dev@gmail.com). You can find more of my work at [chirskimball](https://github.com/chirskimball "chirskimball's GitHub Profile").
