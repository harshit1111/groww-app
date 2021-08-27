import { useState, useEffect } from "react";
import classes from "./allBanks.module.css";
import Dropdown from "../dropdown/dropdown";
import Loader from "../Loader/loader";
import { useHistory } from "react-router-dom";
import Pagination from "../Pagination/pagination";
import { useSelector, useDispatch } from "react-redux";


const cities = [
  { name: "mumbai", value: "mumbai" },
  { name: "delhi", value: "delhi" },
  { name: "pune", value: "pune" },
  { name: "bengalore", value: "bengalore" },
  { name: "chennai", value: "chennai" }
];
const categories = [
  { name: "ifsc", vaue: "ifsc" },
  { name: "branch", value: "branch" },
  { name: "bank name", value: "bank_name" },
  { name: "address", value: "address" }
];

function AllBanks(props) {
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
    console.log("???????????");
    dispatch({ type: "change", city: city });
  };

  const searchCategoryHandler = category => {
    setSearchCategory(category);
  };

  useEffect(() => {
    setLoading(true);
    setIsError(false)
    setPageNumber(0);

    let data = localStorage.getItem(searchCity);
    if (data) {
      data = JSON.parse(data);
      console.log(data.expiry, Date.now());
      if (data.expiry > Date.now()) {
        setBanks(data.banks);
        setFilteredBanks(data.banks);
        setLoading(false);
        return;
      }

      localStorage.clear();
    }

    fetch(
      `https://vast-shore-74260.herokuapp.com/banks?city=${searchCity.toUpperCase()}`
    )
      .then(res => {
        return res.json();
      })
      .then(banks => {
        console.log(banks);
        setBanks(banks);
        setFilteredBanks(banks);
        setLoading(false);

        const expiytTime = Date.now() + 1000 * 60 * 60 * 24 * 3;

        const localStorageData = {
          banks: banks,
          expiry: expiytTime
        };

        localStorage.setItem(`${searchCity}`, JSON.stringify(localStorageData));
      })
      .catch(err => {
        console.log("something went wrong");
        setIsError(true);
        setLoading(false);
      });
  }, [searchCity]);

  useEffect(() => {
    const requiredBanks = [];

    console.log(filteredBanks);
    for (let i = pageNumber * pagePerEntries;i < pageNumber * pagePerEntries + pagePerEntries && i < filteredBanks.length; i++) {
      requiredBanks.push(filteredBanks[i]);
    }

    setCurrentPageBanks(requiredBanks);
  }, [filteredBanks, pageNumber]);

  const searchHandler2 = () => {
    let newFilteredBanks = [];
    console.log(searchCity, searchCategory, queryInput);
    if (!searchCategory || !queryInput) {
      newFilteredBanks = banks.filter(bank => {
        return bank.city.toUpperCase().includes(searchCity.toUpperCase());
      });
    } else {
      newFilteredBanks = banks.filter(bank => {
        console.log(bank.city , searchCity , searchCategory , queryInput)
        return (
          bank.city.toUpperCase().includes(searchCity.toUpperCase()) &&
          bank[searchCategory].toUpperCase().includes(queryInput.toUpperCase())
        );
      });
    }

    setFilteredBanks(newFilteredBanks);
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
    setTotalPages(filteredBanks.length / pagePerEntries - 1);
  }, [filteredBanks]);

  return (
    <div className="container_fluid">
      <div className={classes.header}>
        <h2>All banks</h2>
        <ul className={classes.dropdown}>
          <li>
            <Dropdown
              label={"Choose city"}
              selected={searchCity}
              change={searchCityHandler}
              label="choose city"
              options={cities}
            />
          </li>
          <li>
            <Dropdown
              label={"Choose Category"}
              selected={searchCategory}
              change={searchCategoryHandler}
              label="choose Category"
              options={categories}
            />
          </li>
          <li>
            <input
              onInput={event => setQueryInput(event.target.value)}
              placeholder="search"
              style={{width  :"300px"}}
            ></input>
          </li>
        </ul>
      </div>
      <div>
        <table className={classes.table}>
          <thead>
            <tr>
              <th width="10%">ID</th>
              <th width="20%">Branch Name</th>
              <th width="15%">IFSC</th>
              <th width="15%">NAME</th>
              <th width="30%">address</th>
            </tr>
          </thead>

          <tbody>
            {currentPageBanks.map((bank, id) => {
              return (
                <tr
                  className={classes.row}
                  key={id}
                  onClick={fullDetailsHandler.bind(this, bank.ifsc)}
                >
                  <td>{bank.bank_id}</td>
                  <td> {bank.bank_name}</td>
                  <td>{bank.ifsc}</td>
                  <td>{bank.branch}</td>
                  <td className={classes.text}>{bank.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
