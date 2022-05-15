import React from "react";
// import components
import TweetList from "./components/TweetList";
import CreateTweet from './components/CreateTweet'

const App = () => {

  const name = "Yasi"
  const message = "I went to sleep today wow."

  const sayHelloHandler = (e) => {
    console.log(e)
  }
  
  return (
    <div className="main">
      {/* <CreateTweet />
      <TweetList name={name} message={message}/> */}
      <h1>Hello React</h1>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
 