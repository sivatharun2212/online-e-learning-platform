import Styles from "../styles/search.module.css";


const Search = ({ setSearch }) => {
      const handleSearch = (e)=> {
            setSearch(e.target.value)
      }
      return <>
                  <input className={Styles.input} onChange={handleSearch} type="text" placeholder="Browse Courses"/>
            </>
}

export default Search;