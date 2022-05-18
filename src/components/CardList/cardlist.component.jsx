import { Component } from "react";
import './cardlist.styles.css';
import Card from "../Card/card.component";

class CardList extends Component{

    render(){
        const {monsters} = this.props

        return(

            <div className="card-list">
                {monsters.map((monster)=>{
                    return(
                    <Card monster = {monster}/>
                    );
                })}
            

            

            </div>
            
        );
    }
}

export default CardList;