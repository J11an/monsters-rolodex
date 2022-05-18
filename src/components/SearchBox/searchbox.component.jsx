import { Component } from "react";
import "./searchbox.styles.css";

class SearchBox extends Component{
    render(){
        return(
            <div>

                <input className = {`search-box ${this.props.className}`} 
                type = 'search' 
                placeholder={this.props.placeholder} 
                onChange={this.props.onSearchHandler}></input>

            </div>
        )
    }
}


export default SearchBox;