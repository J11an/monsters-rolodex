import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/cardlist.component';
import SearchBox from './components/SearchBox/searchbox.component';

const App = ()=>{

  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>setMonsters(users));
    
  },[]);

  useEffect(()=>{

    const searchFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(searchFilteredMonsters);
    
  },[monsters,searchField])

  const onSearchChange = (event) => {
  
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
    console.log(searchField)
    
  };
  

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onSearchHandler={onSearchChange} placeholder = 'Enter robots' className = 'monsters-search-box'/>
      <CardList monsters = {filteredMonsters}/>
    </div>
  
  );



}



  
  



export default App;
