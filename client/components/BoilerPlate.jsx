import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actionCreator from '../actions/actionCreator' // does not exist yet, using as an example

function BoilerPlate(){
  // creating our state
  // setInputState is the function we will use to update inputState
  const [inputState, setInputState] = useState('initial value') 


  // changeHandler function to update our input element
  // we will add this as a onChange event on our input element on line 64
  function changeHandler(event){
    // this updates inputState and subsequently updates our input element value
    // this is just a fancy way to type text in an input field that allows us to access the contents of the input field through inputState
    setInputState(event.target.value)
    
  }

  
  // importing global state with useSelector.
  // here we are importing the goals global state
  const goals = useSelector((state)=> state.goals) 


  // creating our dispatch function
  // this will be used to 'dispatch' data to our global state.
  const dispatch = useDispatch()


  // in order to dispatch data to the store you will need ta use action creators.
  // we will create those tonight or tomorrow and they will be functions that takes the data you want to put in global state
  function dispatchSomethingToGlobalstate(data){
    dispatch(actionCreator(data))
  }


  // example array, this will come from state in the final application
  // this one is here to demonstrate the .map function on line 67

  const array = [
    {
      name: 'name',
      resourceName: 'Udemy',
      resourceUrl: 'https://www.udemy.com'
    },
    {
      name: 'name2',
      resourceName: 'recipes',
      resourceUrl: 'https://www.recipeWebsite.com'
    },
  ]

  // html goes in return statement
  // note that the component return statements are wrapped in parenthesees
  // the input element uses state as it's value, in this case we get 'inital value' from line 8
  return (
    <>
      <p>Welcome to boilerplate</p>
      <p>Normal html goes here</p>
      <p className='classes goes here'>classes</p>
      <p>using state values: {goals.name}</p>

      <input type='text' value={inputState} onChange={changeHandler}/>

      <p>Next we are going to use an array to dynamically create a list</p>
      {array.map((arrayElement)=>{
        // This arrow function will be run/rendered for each element in the array, in this case twice as the array has 2 entries
        // return statement will include html to be rendered
        // I've also added some values from the array elemnt
        return (
          <>
            <p>name from array element: {arrayElement.name}</p>
            <a href={arrayElement.resourceUrl} >link from array element: {arrayElement.resourceName}</a>
          </>
        )
      })}
    </>
  )
}

export BoilerPlate