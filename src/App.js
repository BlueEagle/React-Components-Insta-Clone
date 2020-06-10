/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBarContainer'
import dataFile from './dummy-data';

const App = () => {
  // set up state for your data
  const [data, setData] = useState(dataFile);
  const [searchTerm, setSearchTerm] = useState('')
  const [displayData, setDisplayData] = useState(data);

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar liveSearch={searchFunction} />
      <PostsPage data={displayData} />
    </div>
  );

  function searchFunction(e) {
    setSearchTerm(e.target.value)
    if (searchTerm !== '') setDisplayData(data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  function filterData() {
    // return searchTerm === '' ? data : data.filter(post => post.username.toLowerCase.contains(searchTerm.toLowerCase))
    if (searchTerm === '') return data
    let matchingPosts = data
    // console.log(searchTerm)
  }
};


export default App;
