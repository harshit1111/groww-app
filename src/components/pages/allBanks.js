import { useState, useEffect } from "react";
import classes from "./allBanks.module.css";
import Dropdown from "../dropdown/dropdown";
import Loader from "../Loader/loader";
import { useHistory } from "react-router-dom";
import Pagination from "../Pagination/pagination";
import { useSelector, useDispatch } from "react-redux";
import Table from '../table/table'


const cities = [
  { name: "mumbai", value: "mumbai" },
  { name: "delhi", value: "delhi" },
  { name: "pune", value: "pune" },
  { name: "kolkata", value: "kolkata" },
  { name: "chennai", value: "chennai" }
];
const categories = [
  { name: "ifsc", vaue: "ifsc" },
  { name: "branch", value: "branch" },
  { name: "bank name", value: "bank_name" },
  { name: "address", value: "address" }
];

const tableHeaders = [
  {width:"10%" , content : "BANK ID"},
  {width:"20%" , content : "BANK NAME"},
  {width:"10%" , content : "IFSC"},
  {width:"15%" , content : "BRANCH"},
  {width:"30%" , content : "ADDRESS"}
]

function AllBanks() {
  const dispatch = useDispatch();
  const searchCity = useSelector(state => state.city);
  const [banks, setBanks] = useState([]);
  const [filteredBanks, setFilteredBanks] = useState([]);
  const [currentPageBanks, setCurrentPageBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCategory, setSearchCategory] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [pagePerEntries, setPagePerEntries] = useState(10);
  const [totalPages, setTotalPages] = useState();
  const [isError, setIsError] = useState(false);


  const history = useHistory();

  const searchCityHandler = city => {
    dispatch({ type: "change", city: city });
  };

  const searchCategoryHandler = category => {
    setSearchCategory(category);
  };

  useEffect(() => {
    setLoading(true);
    setIsError(false)
    setFilteredBanks([])
    setPageNumber(0);

    let data = localStorage.getItem(searchCity);
    if (data) {
      data = JSON.parse(data);
      if (data.expiry > Date.now()) {
        setBanks(data.banks);
        setFilteredBanks(data.banks);
        setLoading(false);
        return;
      }

      localStorage.removeItem(searchCity);
    }

    fetch(
      `https://vast-shore-74260.herokuapp.com/banks?city=${searchCity.toUpperCase()}`
    )
      .then(res => {
        return res.json();
      })
      .then(banks => {
        setBanks(banks);
        setFilteredBanks(banks);
        setLoading(false);

        const expiryTime = Date.now() + 1000*60*60*24*3;

        const localStorageData = {
          banks: banks,
          expiry: expiryTime
        };

        localStorage.setItem(`${searchCity}`, JSON.stringify(localStorageData));
      })
      .catch(err => {
        console.log("something went wrong");
        console.log(err)
        setIsError(true);
        setLoading(false);
      });
  }, [searchCity]);

  useEffect(() => {
    const requiredBanks = [];
    for (let i = pageNumber * pagePerEntries;i < pageNumber * pagePerEntries + pagePerEntries && i < filteredBanks.length; i++) {
      requiredBanks.push(filteredBanks[i]);
    }

    setCurrentPageBanks(requiredBanks);
  }, [filteredBanks, pageNumber]);

  const searchHandler2 = () => {
    let newFilteredBanks = [];


    if (!searchCategory || !queryInput) {
      newFilteredBanks = banks.filter(bank => {
        return bank.city.toUpperCase().includes(searchCity.toUpperCase());
      });
    } else {
      newFilteredBanks = banks.filter(bank => {
        return (
          bank.city.toUpperCase().includes(searchCity.toUpperCase()) &&
          bank[searchCategory.toLowerCase()].toUpperCase().includes(queryInput.toUpperCase())
        );
      });
    }

    setFilteredBanks(newFilteredBanks);
    setPageNumber(0);
  };

  const fullDetailsHandler = ifsc => {
    history.push(`/bank-details/${ifsc}`, searchCity);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      searchHandler2();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [queryInput, searchCategory, searchCity, banks]);

  const handlePageChange = pageNumber => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(filteredBanks.length / pagePerEntries - 1));
  }, [filteredBanks]);

  return (
    <div className="container_fluid">
     <div className={classes.header}>
        <h2>All banks</h2>
        <ul className={classes.dropdown}>
          <li>
            <Dropdown
              selected={searchCity}
              change={searchCityHandler}
              label="choose city"
              options={cities}
            />
          </li>
          <li>
            <Dropdown
              change={searchCategoryHandler}
              label="choose Category"
              options={categories}
            />
          </li>
          <li>
            <input
              onInput={event => setQueryInput(event.target.value)}
              placeholder="search"
              style={{width  :"300px",borderRadius:"5px",border:"none",padding:"2px 3px"}}
            ></input>
          </li>
        </ul>
      </div>

        <Table pageNumber={pageNumber} headers={tableHeaders} fullDetailsHandler={fullDetailsHandler} currentPageBanks={currentPageBanks} />
      <div>
        
        {loading ? (
          <div className="text-center">
            <Loader />{" "}
          </div>
        ) : null}
        {isError ? (
            <div className="text-center mt-2">
            <h1>SOMETHING WENT WRONG , TRY AGAIN</h1> 
          </div>
        ) : null}
        {filteredBanks.length > 0 ? 
        <Pagination
          currentPageNumber={pageNumber}
          totalPages={totalPages}
          change={handlePageChange}
        /> : null}
        {!loading && !isError && filteredBanks.length == 0 ? 
        <div className="text-center mt-3"><h1>NO BANKS FOUNDS</h1></div>
        : null}
      </div>
    </div>
  );
}

export default AllBanks;
