# Author comment

I was given 4 hours to complete this task. I learned react-query for this task. I also had to setup whole project for this task. I did not care much about UI and responsivity due to lack of time. Despite this I tried a little so that app looked at least acceptable.

It took me 4 hours to complete it. I took some time to make sure data from API are valid. I also focused on code structuring (had to setup tsconfig) and code styling (had to setup eslint).

I did not use Redux nor MobX for global state management. I replaced them with React Query as it is enough for global state management in smaller projects ([https://react-query.tanstack.com/guides/does-this-replace-client-state](https://react-query.tanstack.com/guides/does-this-replace-client-state)).

React Query also provides requests caching so there is no need to implement my own caching system.

I'm not satisfied with the result and would improve it.

# Simple loan calculator
## The task
As a user who needs to borrow some money I would like to have the ability to choose the
amount and term of the loan so that I know what will be my monthly instalment and interest.
Example of a production application: [https://www.vivus.com.mx/](https://www.vivus.com.mx/)
### Features
* 2 sliders
    * 1st slider controls the amount
    * 2nd slider controls the term (number of loan)
* The calculator has a configuration. The configuration contains the minimum, maximum and step
for both amount and term. It also contains the default value.
* Each slider has also a <select> besides it. The <select> contains all possible values (take step
into account).
* If either of these control elements change the second one must be updated as well (slider
changes -> select is updated and vice versa).
The API
API is available at [https://js-developer-second-round.herokuapp.com/api/v1/](https://js-developer-second-round.herokuapp.com/api/v1/)
* [https://js-developer-second-round.herokuapp.com/api/v1/application/constraints](https://js-developer-second-round.herokuapp.com/api/v1/application/constraints) contains
the configuration values for the calculator (min, max, default value, step for both amount
and term)
* [https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?
amount=1000&term=5](https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?
amount=1000&term=5) this endpoint works exactly in the same way as /api/v1/
application/first-loan-offer the only difference being that it behaves more like a real-life
service in the way that it has latency (xrandomly between 0 and 1000 ms)
#### Needed
* Use React Hooks
* Use Typescript
* Use Global state
* Cache all requests so the application is more responsive to user input - meaning -
if I have already called request for 1000 dollars and 15 months, then whenever later I
would again want to display the amount for this combination there would not be any call
on api but the cached value would be displayed.
#### Objective
Good user experience and not redundant network requests.
