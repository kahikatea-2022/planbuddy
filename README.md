# Planning

## Planning

Before starting the technical planning for this project we came together and worked out some guidelines to help ensure we would be taking care of our health and communicate effectively while balancing a high workload. We wanted to make sure we could stay as efficient as possible under stress and avoid any splits in the team that could affect both our wellbeing and the product.

### Wellbeing

To avoid burnout we first set out a work schedule of 9am-5pm with the expectation that we would likely be doing work in the evenings as well. In order to ensure we were able to plan our workload we made a planner where we plotted out all the important commitments we would have to take into account during the project and agreed to discuss what work was to be done afterhours during our afternoon meeting.
This would be achieved either as a team effort or in pairs where the pair would commit to a time slot in the afternoon/evening where they would be online and working on the agreed upon feature/s.

To facilitate efficiency and avoid fatigue we also decided to limit our coding to 1 hour the evening of our final day of planning as the planning phase for a complete product can be draining and in our experience it certainly was. This allowed us to start more fresh the following day with new energy reserves.

### Conflict

In stressful environments ankin to a project like this, people can be more in edge and conflict can arise more easily. This can have a negative impact on both team morale and efficiency; both being essential for projects with a deadline. To address this we set down a few poiints around how we would communicate with eachother when friction arose in an endeavour to nip it in the bud, so to speak, before escalation occurred.

Our first point was to be honest about how we felt during our regular checkins and stand-ups. This was to create a safe space based on trust and genuinity where noone would feel like they had to hold back their feelings.

The previous point leads into our second agreed point which was to speak up early rather than waiting and letting anything sit and fester.

Our third agreed point was to have regular checkins to facilitate these conversations and ensure everyone was being heard and everyone was up to date with their colleagues work and mindspace.

The final, and one of the most important points, was some guidelines around how we would initiate a difficult conversation with a colleague. The points discussed was as follows:

- Take the main goal of the team into account before you start the conversation
- ask the recipient of your conversation, without judgement, about their own reasoning and thoughts behind their actions that led to the conversation
- listen actively and acknowledge their viewpoint and relate this to the issue at hand
- remind them of the overarching goal of the team and how their actions are affecting this.
- as required ask them what they need to resolve their own conflict if that is what led to the undesired behaviour in the first place.

# Backend Information

## API Routes

### Goals database

| Method | Endpoint                   | Send Body                                         | Returns                                         |
| ------ | -------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| GET    | /api/v1/goals/getGoalById  | requires goalId                                   | returns goal by goal_id                         |
| GET    | /api/v1/goals/getUserGoals | requires userId                                   | returns array of a users goals                  |
| POST   | /api/v1/goals/addNewGoal   | requires goal data object that includes user_id   | adds new goal to goals table and returns new id |
| PATCH  | /api/v1/goals/editGoal     | requires goal data object that includes a goal_id | edits goal by id                                |

#### Data structures

GET /api/v1/goals/getGoalById
Request:

```
{
    "goalId": "1"
}
```

Response:

```
{
    "goalId": 1,
    "userId": 1,
    "goalName": "learn guitar",
    "why": "impress my partner",
    "weeklyHours": 20000,
    "dateCreated": 778686947,
    "completed": 0,
    "researched": 0
}
```

GET /api/v1/goals/getUserGoals

Request:

```
{
    "userId": "1"
}
```

Response:

```

{
    "userId": "1"
}
[
    {
        "goalId": 1,
        "userId": 1,
        "goalName": "learn guitar",
        "why": "impress my partner",
        "weeklyHours": 20000,
        "dateCreated": 778686947,
        "completed": 0,
        "researched": 0
    },
    {
        "goalId": 2,
        "userId": 1,
        "goalName": "learn to swim",
        "why": "impress my friends",
        "weeklyHours": 20,
        "dateCreated": 778686947,
        "completed": 0,
        "researched": null
    },
    {
        "goalId": 3,
        "userId": 1,
        "goalName": "learn to swim",
        "why": "impress my friends",
        "weeklyHours": 20,
        "dateCreated": 778686947,
        "completed": 0,
        "researched": null
    },

```

POST /api/v1/goals/addNewGoal
Request:

```

{
      "userId": "1",
      "goalName": "learn to swim",
      "why": "impress my friends",
      "weeklyHours": "20",
      "dateCreated": 778686947,
      "completed": false
}

```

Response:

```

{
    "newId": [
        5
    ]
}

```

PATCH /api/v1/goals/editGoal
Request:

```

{
      "goalId": "1",
      "userId": "1",
      "goalName": "learn guitar",
      "why": "impress my partner",
      "weeklyHours": "20000",
      "dateCreated": 778686947,
      "completed": false
}

```

Response:

```

OK

```

### Sub Goals database

| Method | Endpoint                       | Send Body          | Returns                                          |
| ------ | ------------------------------ | ------------------ | ------------------------------------------------ |
| GET    | api/v1/subGoals/getSubGoals    | requires goalId    | returns an array of subgoals by goal_id          |
| GET    | api/v1/subGoals/getSubGoalById | requires subgoalId | returns subgoal by subgoal_id                    |
| POST   | api/v1/subGoals/addNewSubgoal  | (see request)      | edits existing subgoal and returns newSubgoal Id |
|        |                                |                    |                                                  |

### Data structures:

GET api/v1/subGoals/getSubGoals

Request:

```
{
    "goalId": "1"
}

```

Response:

```

[
    {
        "subgoalId": 1,
        "goalId": 1,
        "subgoalName": "learn C major scale",
        "rewardId": 1,
        "completed": 0,
        "current": 1
    },
    {
        "subgoalId": 2,
        "goalId": 1,
        "subgoalName": "learn major chords",
        "rewardId": 2,
        "completed": 0,
        "current": 1
    },
    {
        "subgoalId": 3,
        "goalId": 1,
        "subgoalName": "Learn correct fingering",
        "rewardId": 3,
        "completed": "false",
        "current": "true"
    }
]]

```

GET api/v1/subGoals/getSubGoalById

Request:

```

{
    "subgoalId": "2"
}

```

Response:

```

{
    "subgoalId": 2,
    "goalId": 1,
    "subgoalName": "learn major chords",
    "rewardId": 2,
    "completed": 0,
    "current": 1
}

```

POST api/v1/subGoals/addNewSubGoal

Request:

```
{
    "goalId": "1",
    "subgoalName": "Learn correct fingering",
    "rewardId": "3",
    "completed": "false",
    "current": "true"
}

```

Response:

```

{
    "newSubgoalId": [
        3
    ]
}

```

### resources database

| Method | Endpoint                                 | Send Body          | Returns                                    |
| ------ | ---------------------------------------- | ------------------ | ------------------------------------------ |
| GET    | api/v1/resources/getResourcesByGoalId    | requires goalId    | returns an array of resources by goalId    |
| GET    | api/v1/resources/getResourcesBySubgoalId | requires subgoalId | returns an array of resources by subgoalId |
|        |                                          |                    |                                            |
|        |                                          |                    |                                            |

### Data structures:

Request:

```
{
    "goalId": "1"
}

```

Response

```
[
    {
        "resourceId": 1,
        "goalId": 1,
        "subgoalId": 1,
        "resourceName": "youtube",
        "url": "www.youtube.com"
    },
    {
        "resourceId": 2,
        "goalId": 1,
        "subgoalId": 2,
        "resourceName": "piano.com",
        "url": "www.piano.com"
    }
]

```

GET api/v1/resources/getResourcesBySubgoalId

Request:

```
{
    "subgoalId": "2"
}

```

Response:

```
[
    {
        "resourceId": 2,
        "goalId": 1,
        "subgoalId": 2,
        "resourceName": "piano.com",
        "url": "www.piano.com"
    }
]

```

### user profiles database

| Method | Endpoint                | Send Body        | Returns                       |
| ------ | ----------------------- | ---------------- | ----------------------------- |
| GET    | api/v1/users/addNewUser | requires nothing | returns an array of all users |
| POST   | api/v1/users/addNewUser | (see request)    | returns newUserId             |
|        |                         |                  |                               |
|        |                         |                  |                               |

### Data structures:

GET /api/v1/users/getAllUsers

Response:

```
[
    {
        "userId": 1,
        "auth0Id": "auth0_id currently null",
        "userName": "Timmy Piano",
        "email": "timmyp@gmail.com",
        "currentTask": 1
    },
    {
        "userId": 2,
        "auth0Id": null,
        "userName": "Johnny Gat",
        "email": "johnnyg@gmail.com",
        "currentTask": 1
    },
    {
        "userId": 3,
        "auth0Id": "currently null",
        "userName": "Reggie Sax",
        "email": "johnnyg@gmail.com",
        "currentTask": 1
    }
]
```

POST api/v1/users/addNewUser
Request:

```
{
    "auth0Id": "currently null",
    "userName": "Reggie Sax",
    "email": "johnnyg@gmail.com",
    "currentTask": "1"
}

```

Response:

```
{
    "newId": [
        6
    ]
}

```

### tasks database

| Method | Endpoint                         | Send Body          | Returns                             |
| ------ | -------------------------------- | ------------------ | ----------------------------------- |
| GET    | api/v1/tasks/getTaskById         | requires taskId    | returns a task by taskId            |
| GET    | api/v1/tasks/getTasksBySubGoalId | requires subgoalId | returns tasks by subgoalId          |
| GET    | api/v1/tasks/getTasksByGoalId    | requires goalId    | returns an array of tasks by goalId |
|        |                                  |                    |                                     |

### Data structures:

GET api/v1/tasks/getTaskById

Request:

```
{
    "taskId": "2"
}

```

Response:

```
{
    "taskId": 2,
    "goalId": 1,
    "subgoalId": 2,
    "taskName": "place holder name 2 from tasks database",
    "timeSpent": "null",
    "completed": 0,
    "current": 1
}

```

GET api/v1/tasks/getTasksBySubGoalId

Request:

```
{
    "subgoalId": "2"
}

```

Response:

```
{
    "taskId": 2,
    "goalId": 1,
    "subgoalId": 2,
    "taskName": "place holder name 2 from tasks database",
    "timeSpent": "null",
    "completed": 0,
    "current": 1
}

```

GET api/v1/tasks/getTasksByGoalId

Request:

```
{
    "goalId": "1"
}
```

Response:

```
[
    {
        "taskId": 1,
        "goalId": 1,
        "subgoalId": 1,
        "taskName": "place holder name from tasks database",
        "timeSpent": "null",
        "completed": 0,
        "current": 1
    },
    {
        "taskId": 2,
        "goalId": 1,
        "subgoalId": 2,
        "taskName": "place holder name 2 from tasks database",
        "timeSpent": "null",
        "completed": 0,
        "current": 1
    }
]
```

### Reflections database

| Method | Endpoint                                  | Send Body             | Returns                                   |
| ------ | ----------------------------------------- | --------------------- | ----------------------------------------- |
| GET    | api/v1/reflections/getReflectionById      | requires reflectionId | returns reflection by reflectionId        |
| GET    | api/v1/reflections/getReflectionsByTaskId | requires taskId       | returns an array of reflections by taskId |
| POST   | api/v1/reflections/addNewReflection       | (see request)         | returns newReflectionId                   |
|        |                                           |                       |                                           |

### Data structures:

GET api/v1/reflections/getReflectionById

Request:

```
{

    "reflectionId": "2"
}

```

Response:

```
{
        "reflectionId": 2,
        "goalId": 1,
        "taskId": 2,
        "reflection": "reflection for reflection_id 2"
}
```

GET api/v1/reflections/getReflectionsByTaskId

Request:

```
{
    "taskId": "2"
}

```

Response:

```
[
    {
        "reflectionId": 2,
        "goalId": 1,
        "taskId": 2,
        "reflection": "reflection for reflection_id 2"
    }
]
```

POST api/v1/reflections/addNewReflection

Request:

```
{
    "goalId": "1",
    "taskId": "3",
    "reflection": "reflecting is hard"
}

```

Response:

```
{
    "newReflectionId": [
        4
    ]
}
```

# Fullstack boilerplate

## Getting Started

### From the GitHub UI

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use GitHub's feature to create a new repo from a template.

### From the command line

```shell
git clone git@github.com:dev-academy-challenges/boilerplate-full-stack-auth0.git [your-project-name]
cd [your-project-name]
cp client/auth_config.json.example client/auth_config.json
cp server/.env.example server/.env
npm install # to install dependencies
npm run knex migrate:latest
npm run knex seed:run
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

- React Components:
  - App
  - Nav is used for login, logout, registration
  - Authenticated is used for show/hide components if the user is logged in
  - PingRoutes is used for testing the routes
  - Users are used to display the registered users
  - Registration is used to save the users' info after they are registered with Auth0
- an example database module (`server/db/users.js`)
- an API client module (`client/apis/users.js`)

## Auth0

1. Navigate to, Auth0.com and sign-up if you don't already have a tenant.
2. Go to _Applications_, and click on _Create Application_ button
3. Give your application a meaningful name, then select **Single Page Web Applications** and click the _Create_ button.
4. In Auth0.com, set the **Allowed Callback Url** with `http://localhost:3000/`
5. In Auth0.com, set the **Allowed Logout Url** with `http://localhost:3000/`
6. In Auth0.com, set the **Allowed Web Origins** with `http://localhost:3000/`

### Server

1. In Auth0.com, create a new API and give it a name and an identifier, for example: `Default` and `https://myapp/api`. This identifier will be used as the `audience`. Click Create.
2. On your new API page, click `Settings` and scroll down and to RBAC Settings and activate `Enable RBAC` and `Add Permission in the Access Token`.
3. Go to `Permissions`, add the custom permissions that reflects your needs. For the purpose of this demo, create a permission called `read:my_private_route`.

Users who are assigned roles with these permissions will be able to access your back-end endpoints.

- If you have a REST API endpoint that you want it to be accessible only by users with a specific permission(s), you can add `[create|read|update|delete|use]:entityname` permission in Auth0.

Here are a few examples that may help you with modelling your routes with permissions:

| Permission (Scope)     | Description                            |
| ---------------------- | -------------------------------------- |
| `read:employee`        | Allows a user to view employees        |
| `read:account_balance` | Allows a user to view account balances |
| `create:appointment`   | Allows a user to create appointments   |
| `update:reminder`      | Allows a user to update reminders      |
| `delete:song`          | Allows a user to delete songs          |
| `use:app`              | Allows using an app                    |

Suppose you have an endpoint that returns the salary amount given the employee id. You don't want that to public or protected. Only users with whom have the `read:account_balance` permission are allowed to consume this endpoint.

### Client

1. Copy the **Domain** of your application in Auth0.com and paste it in the `domain` into `client/auth_config.json`
1. Copy the **Client ID** of your application in Auth0.com and paste it in the `client` into `client/auth_config.json`
1. Copy the **API Audience URL** from Auth0.com you created in the server setup and paste it in the `audience` into `client/auth_config.json`

### Creating & assigning Roles

In large companies and enterprises, assigning individual permissions to each user can be tedious. Instead, we use Roles. Roles are just a collection/container of permissions.

1. In Auth0, and under _User Management_, click on Roles and click on _create Role_ button.
1. Give it a name and description, say **Admin**.
1. Click on _Permissions_ tab and click on _add Permissions_ button.
1. Select the _API_ and the permissions you want to use for the role.
1. Now the role is ready to be assigned for users.
1. In Auth0 and under _User Management_, click on Users.
1. Find the user you want to assign the **Admin** role to and click on it.
1. Click on the _Role_ tab, click on _Assign Roles_ button and select the role from the drop-drown list.

### Creating a new Machine to Machine Application

Let's create a new application in Auth0, this application will be linked and connected to an out-of-the-box API that can retrieve metadata about users. This metadata will be the user's role.

1. Go to _Applications_, and click _Create Application_ button.
1. Give it a name, for example, `Metadata Application`.
1. Select _Machine to Machine Applications_ and click _Create_.
1. Select the _Auth0 Management API_ from the drop-down list.
1. Open _APIs_ tab and make sure that _Auth0 Management API_ is enabled.
1. Expand it and select the following permissions:
   1. `read:roles`
   1. `read:users`
   1. `read:role_members`
1. Open the Settings.
1. Copy the _Client ID_ and paste it in `AUTH0_MACHINE_2_MACHINE_CLIENT_ID` in the `.env` file.
1. Copy the _Secret_ and paste it in `AUTH0_MACHINE_2_MACHINE_SECRET`.
1. Set the `AUTH0_DOMAIN` to be your domain. It should look like `https://mydomain.au.auth0.com`.
1. Set the `AUTH0_SSO_AUDIENCE` to be the same `audience` in the `client/auth_config.json`.

Now the server will be able to get a new access token and retrieve the user's roles. If the logged-in user has a Role(s), it will be displayed next to the name. (see `Nav.jsx`)

🎉 Congratulations! Your application is now Authenticated with Auth0 🎉

```

```
