# ITSS_日本語1
Here is a README.md file formatted appropriately for GitHub:

# SMS Timeline App

This is a SMS Timeline application built using ReactJS for the frontend and NodeJS for the backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisite](#prerequisite)
- [Frontend](#frontend)
  - [Setup and Running](#frontend-setup-and-running)
- [Backend](#backend)
  - [Setup and Running](#backend-setup-and-running)  
- [Features](#features)
- [Conclusion](#conclusion)

## Project Structure

The project contains two main folders:

- `frontend` - Contains the ReactJS code  
- `backend` - Contains the NodeJS code

## Prerequisite
To run the project we need:
- Nodejs v16.20.1
- Yarn (can install after install nodejs with command: npm install yarn)
- MongoDB Community (can install at this link: https://www.mongodb.com/try/download/community)
## Frontend 

The frontend is created using:  

- ReactJS
- Yarn
- Tailwind CSS for styling  

To configure Tailwind CSS, the `tailwind.config.js` file contains:  

```
module.exports = {

  // Tailwind config  

}
```

### Frontend Setup and Running

To run the React frontend:  

```
cd frontend  
yarn
yarn start  
```

## Backend

The backend uses:   

- NodeJS
- Yarn
- MongoDB for storing database 
- Express for routing  

### Backend Setup and Running
To run the NodeJS server:  

```
cd backend
yarn
yarn start   
```

The backend runs on port 4000 and the React frontend runs on port 3000 (by default). 
WARNING: For the app to work correctly, we MUST RUN BACKEND FIRST

## Features  

The main features of the application are:  

- Create post + comment on post
- Create group + group management
- Repository storage 
- Add friend + friend management 
