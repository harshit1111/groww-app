import { Route , Switch } from 'react-router-dom'
import  AllBanks   from "../../pages/allBanks"
import  BankDetails  from '../../pages/bankDetails'

function MainView(){
    return(
        <Switch>
      <Route path="/"  exact>
          <AllBanks />
      </Route>
      <Route path="/bank-details/:ifsc"  exact>
          <BankDetails />
      </Route>
    </Switch>
    )
}

export default MainView