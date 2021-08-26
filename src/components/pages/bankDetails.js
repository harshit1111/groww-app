
import {useEffect , useState } from 'react'
import { useHistory } from 'react-router-dom'

function BankDetails(props){

    const [allBanks, setAllBanks] = useState([])
    const [selectedBankIfsc ,setSelectedBankIfsc] = useState();
    const [selectedBank,setSelectedBank] = useState({});
    const [loading,setLoading] = useState(false)
    
    const history = useHistory()


    useEffect(() => {
        let data = localStorage.getItem('banks');
        if(data){
            data = JSON.parse(data);
            setAllBanks(data)

        }else{
            fetch()
            .then(res => {
                return res.json();
            })
            .then(res => {
                setAllBanks(res);
            })
            .catch((err) => {
                console.log("something went wrong")
            })
        }   
    },[])

    useEffect(() => {
        const temp = history.location.pathname.split('/')
        const selectedBankIfsc = temp[temp.length - 1];
        console.log(selectedBankIfsc);
        setSelectedBankIfsc(selectedBankIfsc);
    },[history])

    useEffect(() => {
        const selectedBank = allBanks.find((bank) => {
            return bank.ifsc === selectedBankIfsc
        })

        
        if(selectedBank) setSelectedBank(selectedBank);
        console.log(selectedBank)
    },[selectedBankIfsc])

   
    return(
        <div className="container_fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Selected Bank details</h3>
                </div>

            </div>
            <div className="row">
                {Object.keys(selectedBank).length == 0 ? <h2>NO BANK FOUND</h2>: null}
                {Object.keys(selectedBank).map(ele => {
                    return(
                        <>
                        <div className="col-6">
                            {ele}
                        </div>
                        <div className="col-6">
                            {selectedBank[ele]}
                        </div>
                        </>
                    )
                })}
            </div>
            
        </div>
    )
}

export default BankDetails