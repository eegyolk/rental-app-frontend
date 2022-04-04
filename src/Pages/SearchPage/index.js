import './style.css';
import Search from '../../Components/Search';
import SearchMap from './components/SearchMap';
import SearchResult from './components/SearchResult';
import SearchComparison from './components/SearchComparison';

function SearchPage() {
  return (
    <div className="SearchPage">
      <header className="SearchPage-header">SearchPage</header>
      <p>This is my search page.</p>
      <div>
        <Search />
      </div>
      <div>
        <SearchMap />
      </div>
      <div>
        <SearchResult />
      </div>
      <div>
        <SearchComparison />
      </div>
    </div>
  );
}

export default SearchPage;
