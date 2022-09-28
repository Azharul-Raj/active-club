import React from 'react';
import './Question.css'


const Question = () => {
    return (
        <div className='question-container'>
            <h2>How does REACT works?</h2>
            <p>Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. 
                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’                denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for              the view layer of the application. It is maintained by Facebook.
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be              both efficient and flexible. It designs simple views for each state in your application, and React will             efficiently update and render just the right component when your data changes. The declarative view makes           your code more predictable and easier to debug.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
            <h2>What is the difference between props and state?</h2>
            <p>
            Most often developers who are React newbie asks me What’s the difference between State Props?

                Before jumping to state vs props we have to compare a React component with a javascript plain function. Let me define a React component  a plain javascript function side by side.
                We defined a React component named DummyComponent and returned a div containing text Hey similarly, we defined a function named DummyFunction and output Hey to the console. Isn’t they look a lot similar ? they both generate the same output write Hey to the output the only difference between the two is the React component going to render a div with text Hey where the function going to output Hey on the console.

                So we now Know that React components are very similar to Plain Javascript functions. Let’s take a look at  State.
                A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope. Let’s demonstrate this with an example.
                Without props, React Component will stop making sense. A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That’s why props are introduced in React. Let’s take a look how we can use props in react
            </p>
            <h2>When does useEffect get used other than data fetching ?</h2>
            <p>
                In a simple word if any side effect occers only on that time react useEffect get used.
                A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout, and more.

            The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.

            How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.</p>

        </div>
    );
};

export default Question;