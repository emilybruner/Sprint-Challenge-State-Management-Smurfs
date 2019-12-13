1. What problem does the context API help solve?

Context API helps solve the problem of having to pass props through every level of an app tree, even though there may be several components in between that do not need the props, just so that the props can reach a child further down the tree. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are payloads of information that send data from your app to your store

- Reducers specify how the application's state changes in response to actions sent to the store. They describe "what happened" but do not describe how the app's state changes. 

- The store is the object that brings together the actions and the reducers. The store holds application state, allows access to state, allows state to be updated, reigers listeners, and handles unregistered of listerners. There is only one single store in a redux application. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Component state is when state is stored locally withiin a component and is not accessible from other components unless it is explicitly passed as props to its subcomponents. 
- Application state is what is used with redux where state is stored within a centralized global store when can be accessible to any component. 
- Component state is best used in small applications where props do not have to be passed excessively, while redux would be better used for large, complex applications. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows you to write action creators that return a function instead of an action. This is helpful when making asynchronous API requests and you need to dispatch depending on success/error.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux simply because we spent more time on it, so it makes more sense to me at this moment in time. I am definitely interested in working more with Context API before making my final decision on which is my favorite. 
