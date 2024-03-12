import { Link, Outlet } from "react-router-dom"

function NavBarLayout() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to={'/main'}>main</Link></li>
        <li><Link to={'/main'}>profile</Link></li>
        <li><Link to={'/main'}>signIn</Link></li>
        <li><Link to={'/main'}></Link></li>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default NavBarLayout
