import { SideBar, NavBar } from '../components/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
    <main className='h-screen max-h-screen flex'>
        <div className='pb-4'>
          <SideBar />
        </div>

        <div className='w-full ml-3 h-screen pr-2 pl-1 overflow-y-scroll'>
          <NavBar />
          <div>
            <Outlet />
          </div>
        </div>
    </main>
  )
}
 
export default Layout;