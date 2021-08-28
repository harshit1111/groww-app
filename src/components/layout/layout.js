
import Sidebar from './sidebar/sidebar'
import MainView from './main/main';
import Header from './header/header'

function Layout() {

    return(
       <div className="container_fluid" >
            <Header />
            <div className="text-center row bg-light" >
                <div className="col-2 p-0">
                    <Sidebar />
                </div>
                <div className="mx-auto col-10 pl-2">
                    <MainView />
                </div>
            </div>
       </div>
    )

}

export default Layout