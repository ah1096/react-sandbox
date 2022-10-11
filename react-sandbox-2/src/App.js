import './App.css';
import cat from './cat-icon.png'; //I can import images into my HTML page using React

//I can create and nest elements
function MyButton() {
  return (
    <button>click me</button>
  );
}

//I can add classNames to add CSS to elements
export default function MyApp(){
  return (
    <div>
      <h1 className="header">insert title here</h1>
      <p className="subheader">this app was coded using React</p>
      <MyButton />
      <Profile />
    </div>
  )
}

//I can display data using JSX and curly braces
const user = {
  name: 'Placeholder Cat',
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






