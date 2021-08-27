import { Route , Switch } from 'react-router-dom'
import  AllBanks   from "../../pages/allBanks"
import  BankDetails  from '../../pages/bankDetails'
import store from '../../store/index'
import  { Provider } from 'react-redux'
import NotFound from '../../pages/notfound'

function MainView(){
    return(
        <Switch>
      <Route path="/"  exact>
        <Provider store={store}>
            <AllBanks />
        </Provider>
            
      
          
      </Route>
      <Route path="/bank-details/:ifsc"  exact>
          <BankDetails />
      </Route>
      <Route>
            <NotFound />
        </Route>
    </Switch>
    )
}

export default MainView