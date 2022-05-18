import './App.css';
import {Component} from 'react';
import CardList from './components/CardList/cardlist.component';
import SearchBox from './components/SearchBox/searchbox.component';

class App extends Component{
  constructor(){
    super();

    this.state = {

      monsters: [],
      searchField: '',
      };
      console.log('constructor')
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>this.setState(()=>{
        return {monsters:users};
      },
      ()=>{
        console.log('componentDidMount');
      }
      ));
  }

  onSearchChange = (event) => {
  
    const searchField = event.target.value.toLowerCase();
    this.setState (()=>{
      return {searchField};
    })
  }
  

  render(){    
    console.log('render')
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onSearchHandler={onSearchChange} placeholder = 'Enter robots' className = 'monsters-search-box'/>
        <CardList monsters = {filteredMonsters}/>
      </div>

    );
  }
}


export default App;
