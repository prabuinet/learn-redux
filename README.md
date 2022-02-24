# learn-redux

# Principles of Redux
1. State Tree - Whole application state is inside a single JSON object
   1. Everything that changes in our application including data and ui state is contained in a single json object - called state or state tree
2. Dispatch/Action - State tree is redundant. You cannot modify state directly 
   1. To modify state you need to dispatch an action
   2. Action is a minimal representation of change to do
   3. An action contains a type (string) and an optional payload
3. Reducer - A pure function which takes previous state of the app and returns the next sate of the application.


## Pure functions
1. For any given input output will always be the same
2. It doesn't modify its input (for ex. array)
3. It doesn't make any side-effects (ex. network call, db update etc)


## Useful links
https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/1


