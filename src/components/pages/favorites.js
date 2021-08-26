import { useState , useEffect } from 'react'

function Favourites(props){

    const [favourites,setFavourites] = useState([])
    const [loading,setLoading] = useState(true)
    const [banks , setBanks] = useState([])

    useEffect(() => {

        const data = localStorage.getItem('userFavourites')

        if(data){
            setBanks(JSON.parse(data));
            return;
        }
       

        fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
        .then(res => {
            return res.json()
        })
        .then((banks) => {
            setBanks(banks)
            setLoading(false)
            localStorage.setItem('banks',JSON.stringify(banks))
        }).catch(err => {
            console.log("something went wrong")
        })


        

    },[])

    return(
        <div className="container_fluid">
            <h1>Ypur favourites</h1>

        </div>
    )

}