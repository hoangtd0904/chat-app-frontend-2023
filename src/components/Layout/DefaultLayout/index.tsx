import Sidebar from "./SideBar"

type Props = {
    children: JSX.Element
}

export default function DefaultLayout({children} : Props) {
    return (
        <div className="container d-flex">
            <Sidebar/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}