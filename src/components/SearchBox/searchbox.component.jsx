import "./searchbox.styles.css";

const SearchBox = ({className,placeholder,onSearchHandler}) => {
        return(

            <div>

                <input className = {`search-box ${className}`} 
                type = 'search' 
                placeholder={placeholder} 
                onChange={onSearchHandler}></input>

            </div>
        )
}


export default SearchBox;