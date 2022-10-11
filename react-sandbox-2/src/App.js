import './App.css';
import cat from './cat-icon.png'; //I can import images into my HTML page using React
import { useState } from 'react';

//I can create and nest elements
//I can declare an event handler
function MyButton() {
const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      clicked {count} times
      </button>
  );
}

function TwinButton() {
    return (
      <button onClick={handleClick}>
        clicked {count} times
        </button>
    );
  }

//I can make two components share data and always update together

function TwinButtons() {

  const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }

    function TwinButton({ count, onClick}) {
      return (
        <button onClick={onClick}>
          clicked {count} times
          </button>
      );
    }

  return (
    <>
  <h1 className="header">these buttons update at the same time. try clicking them, too.</h1>
        <TwinButton count={count} onClick={handleClick}/>
        <TwinButton count={count} onClick={handleClick}/>
    </>
  )
}






//I can add classNames to add CSS to elements
export default function MyApp(){
  return (
    <div>
      <h1 className="mainheader">insert title here</h1>
      <p className="subheader">this app was coded using React. here are some things I learned about from the React Quick Start tutorial:</p>
        <MakeAList />
      <h1 className="header">these buttons update independently. try clicking them.</h1>
        <MyButton />
        <MyButton />
      <TwinButtons />   
      <Profile />
    </div>
  )
}

//I can display data using JSX and curly braces
const user = {
  name: 'placeholder cat',
  imageUrl: cat,
  imageSize: 90,
};

export function Profile() {
  return (
    <>
      <h1 className="header">{user.name}</h1>  
      <img
          className="catIcon"
          src={user.imageUrl}
          alt={'Image of ' + user.name}
          style={{
            width: user.imageSize, //can use *2 here to double width; able to manipulate w/ math
            height: user.imageSize
          }}
    />
    </>
  );
}

//I can render conditionals VVVVVVV
//let content;
//if (isLoggedIn) {
//  content = <AdminPanel />;
//} else {
//  content = <LoginForm />;
//}
//return (
//  <div>
//    {content}
//  </div>
//)


//I can render a list
function MakeAList() {

  const things = [
    {title: 'creating and nesting components', isLast: false, id: 1},
    {title: 'adding classes and styles', isLast: false, id: 2},
    {title: 'displaying data', isLast: false, id: 3},
    {title: 'responding to events', isLast: false, id: 4},
    {title: 'updating the screen', isLast: false, id: 5},
    {title: 'using hooks', isLast: false, id: 6},
    {title: 'sharing data between components', isLast: true, id: 7}
    
  ];
  
  const listItems = things.map(thing =>
      <li key={thing.id}
          style={{
            color: thing.isLast ?  'white' : 'rgb(246, 123, 143)'
          }}>
        {thing.title}
      </li>);
  
  return (
    <ul className="list">{listItems}</ul>
  );
  }

//I can use a hook?











