// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

// ** Creating a react component ** // 
/** Rules to consider
 * 1. React components begin with a capital letter. 
 *    React assumes the element is an HTML element if lowecase
 * 2. Do not name an element the same as a JavaScript class.
 *    Example: Number; this overrides the native JavaScript Number fxn
 * 3. Your JSX <Hello /> element it transpiled to ...
 *    React.createElement('h1', null, 'Hello')
 *    where the arguments are: element-to-be-created, attributes, optional: child(ren) elements <- can be 
 */

// ** Adding State to your app ** //
/**
 * The simplest way to add state to a component is via React Hooks. 
 * This is just a demo of a simple react app. The next application will
 * be made using class components, and your job is to convert the class
 * components to function components. 
 * 
 * We will be using the useState hook. It returns an array of two elements.
 * 1. state object (getter)
 * 2. updater function (setter)
 * 
 * These elements are destructured into the component using this hook. 
 * An array is used because JavaScript functions return only a single value.
 * Array destructuring is used to capture these 2 variables in a single line. 
 * 
 * const [ currentStateValue, newStateUpdaterFxn ] = useState(initialState);
 * const [ counter, setCounter ] = useState(0)
 */

/*
function Button() {

  const [ counter, setCounter ] = useState(0);

  // ** initial button ** //
  // return <button>TEST</button>;

  // ** JSX expression ** //
  // return <button>{ counter }</button>; 
  // // ^ JSX expression that will display the count value in the UI

  // ** click handler ** //
  // return <button onClick={ setCounter }>{ counter }</button>;
  // // X wrong X : onClick={ setCounter() }  <-- We are not invoking the fxn
  // // _ correct _ : onClick={ functionReference }
  // //         camelCase^       ^-- Points to a specific function

  // ** use inline-syntax ** //
  // return <button onClick={ () => console.log(Math.random()) }>{ counter }</button>
  // // check to make sure something happens.

  // ** Update state ** //
  // return <button onClick={ () => setCounter( counter + 1)}>{ counter }</button>
  // // We are using the updater Function, setCounter, to update the state object, counter.

  // ** Simplifying event handler ** //
  const handleClick = () => setCounter( counter+1 );
  // return <button onClick={ handleClick }>{ counter }</button>

  // ** Improving readability ** //
  return (
    <button onClick={ handleClick }>
      { counter }
    </button>
  )
  // // Note: x wrong x: return { }  <--  we are not returning an object...
  // //     _ correct _ : return ()  <--  we /are/ returning a function call
}
*/
// !! Separation of Concerns !! //
/**
 * The above Button component has two maub concerns:
 * 1. controlling state
 * 2. displaying state
 * 
 * There are many things it is doing, so we need to 
 * isolate concerns.
 * 
 * <Button />  --  will update the state
 * <Display /> --  will display the state
 * 
 * Next concern: These are going to be siblings. Siblings cannot
 * communicate with each other. 
 * 
 * This is where the concept of "state" and "props" come in. 
 * The nearest common parent should hold the state and pass props
 * to its children.
 * 
 * Therefore ...
 * 
 * <App />  --  will control the state
 * 
 */

function Button() {

  // ** Move state to App ** // 
  const [ counter, setCounter ] = useState(0);
  const handleClick = () => setCounter( counter+1 );
  return (
    <button onClick={ handleClick }>
      { counter }
    </button>
  )
}

function Display() {

  return (
    <div>
      Test Display
    </div>
  )
}

function App() {
  // ** Moved state to App ** //
  const [ counter, setCounter ] = useState(0);
  const incrementCounter = () => setCounter( counter+1 );
  
  return( 
    <div className='App'>
      <header className='App-header'>
        <Button onClickFunction={ incrementCounter } />
        <Display />
      </header>
    </div> 
  );
}





/**
 * 
 *  <button onClick={ props.onClickFunction }>
 * 
 *  Button knows what onClickFunction is, 
            and it knows that it is passed a generic 
            reference function. It doesn't know what 
            the function represents, only that it receives 
            a reference to another function
         <Button onClickFunction={ incrementCounter } /> 
         <Display message={ counter } /> 
 */


export default App;
