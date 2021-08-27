
import {useEffect , useState } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader/loader'

let cities = ["mumbai","delhi","pune"]

function BankDetails(props){

    const [selectedBankIfsc ,setSelectedBankIfsc] = useState();
    const [selectedBank,setSelectedBank] = useState({});
    const [loading,setLoading] = useState(false)
    const history = useHistory();

   

    useEffect(() => {
        const temp = history.location.pathname.split('/')
        const selectedBankIfsc = temp[temp.length - 1];
        console.log(selectedBankIfsc);
        setSelectedBankIfsc(selectedBankIfsc);
    },[history])

    useEffect(() => {
        
        let selectedBank = null;
        console.log(selectedBankIfsc)

        setLoading(true)

        if(history.location.state){
            let city = history.location.state;
            let cityData = JSON.parse(localStorage.getItem(city));
            if(cityData){
                console.log(cityData)
                selectedBank = cityData.banks.find((bank) => {
                    return bank.ifsc === selectedBankIfsc
                })
            }
            
        }else{
            
            for(let i = 0; i <cities.length ; i++){
                let cityData = JSON.parse(localStorage.getItem(cities[i]));
                if(cityData){
                    selectedBank = cityData.banks.find((bank) => {
                        console.log(bank.ifsc == selectedBankIfsc)
                        return bank.ifsc == selectedBankIfsc
                    })
                }

                if(selectedBank) break;
            }
        }
        
        if(selectedBank) setSelectedBank(selectedBank);
        console.log(selectedBank)
        setLoading(false)
    },[selectedBankIfsc])

   
    return(
        <div className="container_fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Selected Bank details</h3>
                </div>

            </div>
            <div className="row">
                {loading ? <div className="text-center"><Loader /></div> : null}
                {Object.keys(selectedBank).length == 0 && !loading ? <h2>NO BANK FOUND</h2>: null}
                <tbody>
                {Object.keys(selectedBank).map(ele => {
                    return(
                        <>
                        <tr>
                            <td>
                                {ele}
                            </td>
                            <td>
                            {selectedBank[ele]}
                            </td>
                        </tr>
                        {/* <div className="col-6">
                            {ele}
                        </div>
                        <div className="col-6">
                            {selectedBank[ele]}
                        </div> */}
                        </>
                    )
                })}
                </tbody>
            </div>
            
        </div>
    )
}

export default BankDetails