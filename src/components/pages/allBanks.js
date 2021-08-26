
import { useState , useEffect } from  'react'
import classes from './allBanks.module.css';
import Dropdown from '../dropdown/dropdown'
import Loader from '../Loader/loader'
import {useHistory} from 'react-router-dom'
const cities = [{name:"mumbai",value:"mumbai"},{name : "delhi",value:"delhi"}]
const categories = [{name :"ifsc",vaue:"ifsc"},{name : "branch",value:"branch"},{name : "branch name" , value :"branch_name"},{name : "address",value:"address"}]

function AllBanks(props){

    const [ banks , setBanks ] = useState([])
    const [filteredBanks , setFilteredBanks] = useState([])
    const [loading,setLoading] = useState(true)
    const [searchCity , setSearchCity] = useState("mumbai")
    const [searchCategory , setSearchCategory] = useState()
    const [pageNumber,setPageNumber] = useState(0);
    const [pagePerEntries,setPagePerEntries] = useState(10);
    const [totalPageNumber,setTotalPageNumbers] = useState()
    const [queryInput , setQueryInput] = useState('');
    const history = useHistory();


    const searchCityHandler = (city) => {
        setSearchCity(city)
       
    }

    const searchCategoryHandler = (category) => {
        setSearchCategory(category)
       
    }

    

    useEffect(() => {

        setLoading(true)

        const data = localStorage.getItem("banks");
        if(data){
            setBanks(JSON.parse(data));
            setLoading(false)
            return;
        }


       
        fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
        .then(res => {
            return res.json()
        })
        .then((banks) => {
            console.log(banks)
            setBanks(banks)
            setLoading(false)
            localStorage.setItem('banks',JSON.stringify(banks))
        }).catch(err => {
            console.log("something went wrong")
        })

    },[])

    useEffect(() => {
        betterSearchHandler();
    },[searchCity , searchCategory , queryInput , banks])

    useEffect(() => {
        setFilteredArrayPagination();
    },[banks,pageNumber])


    useEffect(() => {
        setTotalPageNumbers(banks.length / pagePerEntries)
    },[pagePerEntries,setFilteredBanks])

  
    const previousPageHandler = () => {
        const newPageNumber = pageNumber - 1;
        setPageNumber(newPageNumber);

    }

    const nextPageHandler = () => {
        const newPageNumber = pageNumber + 1;
        setPageNumber(newPageNumber);
    }

    const setFilteredArrayPagination = () => {
        
        const requiredBanks = [];
        for(let i = pageNumber*pagePerEntries ; i < pageNumber*pagePerEntries+pagePerEntries &&  i < banks.length ;i++){
            requiredBanks.push(banks[i]);
        }

        setFilteredBanks(requiredBanks);
    }


    const fullDetailsHandler = (ifsc) => {
        history.push(`/bank-details/${ifsc}`)
    }

    function debounce(func,delay){
        let timer = 0;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this,args)
            },delay)
        }
    }

    function searchHandler(){

        setLoading(true)
       
        if(!searchCategory || !searchCity || !queryInput){
            console.log(banks)
            setFilteredBanks(banks);
            setLoading(false)
            console.log("kakakak")
            return;
        }

        const requiredBanks = banks.filter((bank) => {
           
            if(bank.city.toUpperCase() == searchCity.toUpperCase() && bank[searchCategory] ===  queryInput){
                return true
            }
            return false;
        })

        setFilteredBanks(requiredBanks)
        setLoading(false)

    }

    
    const betterSearchHandler = debounce(searchHandler , 500)




    return(
        <div className="container_fluid">
            <div className={classes.header}>
                <h4>All banks</h4>
                <ul className={classes.dropdown}>
                    <li>
                        <Dropdown change={searchCityHandler} label="choose city" options={cities}/>
                    </li>
                    <li>
                        <Dropdown change={searchCategoryHandler} label="choose Category" options={categories}/>
                    </li>
                    <li>
                        <input onInput={(event) => setQueryInput(event.target.value)} placeholder="search"></input>
                    </li>

                </ul>
            </div>
            <div>

                   
                <table className={classes.table}>
                    <thead>
                        <tr>
                        <th>Branch Name</th>
                        <th>IFSC</th>
                        <th>NAME</th>
                        <th>ID</th>
                        <th>address</th>
                        </tr>
                    </thead>
                   

                    <tbody>
                        {filteredBanks.map((bank,id) => {
                            return(
                                <tr key={id} onClick={fullDetailsHandler.bind(this,bank.ifsc)}>
                                    <td>{bank.bank_name}</td>
                                    <td>{bank.ifsc}</td>
                                    <td>{bank.branch}</td>
                                    <td>{bank.bank_id}</td>
                                    <td>{bank.address}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
                {loading ? <div className="text-center"><Loader/> </div>: null}
                {pageNumber > 0 ? <button className="btn btn-outline-success m-2" onClick={previousPageHandler}>previous</button> : null}
                {pageNumber < totalPageNumber ? <button className="btn btn-outline-danger m-2" onClick={nextPageHandler}>next</button> : null}
             
            </div>
           
        </div>
       
    )
}

export default AllBanks