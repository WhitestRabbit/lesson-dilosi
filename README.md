# A project made to practice with states, Context and Reducer.

The Context API is a way to have app states that can be accessed from different components in various levels of the application 
tree. The Context Provider wraps around the entire application, or at least the section of the application that requires it, by
utilizing Composition (aka the components wrapped inside the provider are passed in below as props.children).

The Reducer collects all the functions of the Context into one dispatch function. Every component that uses a function provided
by the Context, calls the dispatch function and passes in two parameters: a type, which is a string that refers to the 
functionality that the component is requesting, and a payload, which can contain anything the function needs to work 
(e.g. for a delete, create, update). The Reducer component then accepts the request and decides which functionality to run,
based on the type that was sent and uses the payload received accordingly. Then the state is updated.

Instead of using the useState hook, we are using the useReducer hook, that takes in the Reducer, a default state and a possible
initializer of the state, and returns the state and the dispatch function that we will pass down to the Provider.

We are also utilizing local storage in the state initializer and the useEffect hook, to allow the state to persist whenever
the page reloads.

Of course, context is useful for states that need to be global and accessed from various components. Examples besides our project
can be a cart state for a commerce site, an authorized state for an app that implements user access and authorization and more.