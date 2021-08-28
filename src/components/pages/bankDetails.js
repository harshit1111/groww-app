import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Loader/loader";
import NotFound from "./notfound";

let cities = ["mumbai", "delhi", "pune"];

const objectMapping = {
  bank_id: "BANK ID",
  bank_name: "BANK NAME",
  branch: "BRANCH",
  ifsc: "IFSC",
  address: "ADDRESS",
  city: "CITY",
  district: "DISTRICT",
  state: "STATE"
};

function BankDetails() {
  const [selectedBankIfsc, setSelectedBankIfsc] = useState();
  const [selectedBank, setSelectedBank] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNoFound] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const temp = history.location.pathname.split("/");
    const selectedBankIfsc = temp[temp.length - 1];
    console.log(selectedBankIfsc);
    setSelectedBankIfsc(selectedBankIfsc);
  }, [history]);

  useEffect(() => {
    let selectedBank = null;

    setLoading(true);
    setNoFound(false);

    if (history.location.state) {
      let city = history.location.state;
      let cityData = JSON.parse(localStorage.getItem(city));

      if (cityData) {
        if (cityData.expiry > Date.now()) {
          selectedBank = cityData.banks.find(bank => {
            return bank.ifsc === selectedBankIfsc;
          });
        } else {
          setLoading(true);
          localStorage.removeItem(city);
          fetch(
            `https://vast-shore-74260.herokuapp.com/banks?city=${city.toUpperCase()}`
          )
            .then(res => {
              return res.json();
            })
            .then(banks => {
              const expiryTime = Date.now() + 1000 * 60 * 60 * 24 * 3;

              const localStorageData = {
                banks: banks,
                expiry: expiryTime
              };

              selectedBank = banks.find(bank => {
                return bank.ifsc === selectedBankIfsc;
              });

    
              if (selectedBank) setSelectedBank(selectedBank);
              setLoading(false);

              localStorage.setItem(`${city}`, JSON.stringify(localStorageData));
            });
        }
      }
    } else {
      for (let i = 0; i < cities.length; i++) {
        let cityData = JSON.parse(localStorage.getItem(cities[i]));
        if (cityData) {
          selectedBank = cityData.banks.find(bank => {
            return bank.ifsc == selectedBankIfsc;
          });
        }

        if (selectedBank) break;
      }
    }
    
    if (selectedBank) setSelectedBank(selectedBank);
    else setNoFound(true);
    setLoading(false);
  }, [selectedBankIfsc]);

  return (
    <div className="container_fluid">
      <div className="row">
        <div className="col-12">
          <h3 className="p-3" style={{background: "#ddd",border: "1px solid #ddd",textAlign: "left"}}>
            Selected Bank details
          </h3>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : null}
        {Object.keys(selectedBank).length == 0 && notFound ? (
          <NotFound />
        ) : null}
        <table>
        <tbody>
          {Object.keys(selectedBank).map((ele,ind) => {
            return (
                <tr key={ind}>
                  <td>{objectMapping[ele]}</td>
                  <td>{selectedBank[ele]}</td>
                </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default BankDetails;
