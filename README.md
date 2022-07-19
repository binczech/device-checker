# Author comment

I decided to learn more about react-query in this task (useMutation, useQueryClient). I also had to setup whole project for this task. I did not care much about UI and responsivity becaused I have been focused on functionality and code structuring. Despite this I tried a little so that app looked at least acceptable.

It took me 11 hours to complete it. I took some time to make sure user info data from API are valid and to handle user state and keep user logged in even after reload. I also focused on code structuring (had to setup tsconfig) and code styling (had to setup eslint). I also tried to wrap functions and components that I used more than once so that I could use them in more situations and so that I would not repeat code unnecessary.

I decided to slightly differ from assignment requirements. I used modal for both forms. I think it's much more user friendly than navigating user to another page. I also added filter buttons so that user can filter data right after he is satisfied with filter values.

I did not use Redux nor MobX for global state management. I replaced them with React Query as it is enough for global state management in smaller projects ([https://react-query.tanstack.com/guides/does-this-replace-client-state](https://react-query.tanstack.com/guides/does-this-replace-client-state)). I also did not use Redux because I use it every day in my projects and I wanted to challenge myself to complete task without it.

I'm not satisfied with the result and would improve it in terms of storing of user in localStorage and user state handling. I also would improve UI/UX as it is not very good. I would improve data validating from API as I did not have much time to make validations for phones endpoints.

# Device checker
## Intro
Your task will be to create a React.js application, you can find the assignment below. You can send us the solution by email or you can commit it to any repository (for example, a private BitBucket) and send us an invite. Just please don't send us the folder with node_modules/.
## Assignment
Your task is to develop a simple DeviceChecker application, a similar, more complex application is used here at Etnetera when borrowing phones for testing.
Please think about the assignment and send us your approximate estimate of the work in hours before completing it. After processing, we will then ask you for the number of hours that you actually used for processing.
## REST API
To work with data, you will use the REST API, which is available at:
https://js-test-api.etnetera.cz/api/v1
### Endpoints
| Endpoint             | Description                                                        |
|----------------------|--------------------------------------------------------------------|
| /login               | User login. Returns the authorization token                        |
| /users/:id           | User data. Requires sending the Auth-Token header.                 |
| /phones              | Working with phones. Requires sending the Auth-Token header.       |
| /phones/:id          | Work with a specific phone. Requires sending the Auth-Token header |
| /phones/:id/borrow   | Phone borrow. Requires sending the Auth-Token header.              |
| /phones/:id/return    | Phone return. Requires sending the Auth-Token header.             |

Complete API documentation is available on Swagger:
https://app.swaggerhub.com/apis/warp/etn-device-checker-test/1.0
## Application sitemap
The application should contain pages:
* Login
* Devices List - list of phones
* Create Device - form for adding a phone
You can approach the application as an MVP that can grow one day.
## Login
Login to the application using email and password. After a successful login, an authorization token is returned in the response, which other REST endpoints expect in the header ('Auth-Token' key). Without a valid authorization token, the user should always be redirected to Login.
List of test accounts:
| Email                        | Password    | Type  |
|------------------------------|-------------|-------|
| gandalf.the.grey@etnetera.cz | wh1tew1zard | admin |
| frodo.baggings@etnetera.cz   | theoner1ng  | user  |
| aragorn@etnetera.cz          | dun4dan     | user  |
| legolas@etnetera.cz          | greenle4f   | user  |
| gimli@etnetera.cz            | s0nofgloin  | user  |
## Devices List
After successful login, the user is redirected to the Devices List page. The page should contain a list of all devices with the option to filter the device according to the operating system and manufacturer and the option to borrow the device if it is not already borrowed or to return it.
## Create Device
The Create Device page should only be accessible to admin accounts. The page is used to add a new device to the list of all devices, so it should contain a form with the following inputs:
* device code, unique
* model name
* operating system
* operating system version, optional
* manufacturer
* image (url), optional data
#### Objective
Good user experience and not redundant network requests.
