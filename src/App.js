import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:""
    }
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url="https://jsonplaceholder.typicode.com/users"
    fetch(proxyurl+url)
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  handleChange(event){
    this.setState({searchField:event.target.value})
  }

  render(){
    const {monsters,searchField}=this.state;
    const filteredMosters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMosters}/>
      </div>
    );
  }
}

export default App;
