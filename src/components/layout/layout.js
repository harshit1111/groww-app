
import Sidebar from './sidebar/sidebar'
import MianView from './main/main'
import MainView from './main/main';

function Layout() {

    return(
       <div className="container_fluid" >
            <div className="row bg-light p-4" >
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <MainView />
                </div>
            </div>
       </div>
    )

}

export default Layout