# Tech-Blog ๐ป ๐ฃ ๐งก

![License](https://img.shields.io/github/license/EllaFerreira/Tech-Blog)
![JavaScript](https://img.shields.io/badge/AppWith-JavaScript-magenta.svg)
![MySQL](https://img.shields.io/badge/AppWith-MySQL-blue.svg)
![Nodejs](https://img.shields.io/badge/AppWith-NodeJS-green.svg)
![Express](https://img.shields.io/badge/AppWith-ExpressJS-orange.svg)
![Sequelize](https://img.shields.io/badge/Package-Sequelize-yellow.svg)

## About this Project

Tech Blog is an app which follow the `Model View Controller` paradigm, using MySQL as db, express-handlebars to implement handlebars for views and sequelize to connect sql to models.

**Note:**

## Deploy

[check here](https://tech123blog.herokuapp.com/)

## Content

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Sources](#sources)
- [Project Creator](#project-creator)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creatorโs username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creatorโs username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

## Technologies

- Node/Express js - backend;
- JavaScript;
- Handlebars;
- dotenv and bycrypt package;
- Mysql2 npm package;
- Sequelize;

## Installation
To be able to run and test this application user must:
- Clone the repo into your code editor (eg.vs code)
- Run `npm install`
- Create the db table running `mysql -u root -p`, after that quit the db server
- Seed the db running `node seeds/index`

**Testing the endpoints with Insomnia:**
Download the [Insomnia](https://insomnia.rest/)

- Run `node server` to start the server

**Test Instructions:**
- Make sure you have `jest package` installed
- Then run `npm run test` 

## Sources

- [Express](https://expressjs.com/en/starter/hello-world.html)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Handlebars](https://www.npmjs.com/package/express-handlebars)

## Project Creator

[EllaFerreira](https://github.com/EllaFerreira)

ยฉ 2021 Tech Blog. All rights reserved