import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    return (

        <div className="lg:hidden relative">
            <div className="bg-white p-3 flex justify-between h-[70px] fixed top-0 w-screen z-50">

                <div className="grid place-content-center ml-3">
                    <img src="./Assets/Logo.png" alt="Logo" className="h-[38px] w-[38px]" />
                </div>
                <div className="grid place-content-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 text-lg bg-white hover:bg-white hover:border-red-600 border-white text-red-600">
                            <IoMenu />
                        </div>

                        <ul data-theme="light" tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-56">
                            <li className="hover:text-red-600 bg-white hover:bg-white btn border border-white hover:border-red-600 ">Home</li>
                            <li className="hover:text-red-600 bg-white hover:bg-white btn border border-white hover:border-red-600 ">Info Kemitraan</li>
                            <li className="hover:text-red-600 bg-white hover:bg-white btn border border-white hover:border-red-600 ">Article</li>
                            <li className="hover:text-red-600 bg-white hover:bg-white btn border border-white hover:border-red-600 ">About Us</li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar