const NavbarDekstop = () => {
    return (
        <div>
            <div className="hidden bg-gradient-to-r from-red-800 to-red-500 text-white p-5 text-lg lg:flex gap-8 justify-end pr-20 font-semibold ">
                <div className="hover:underline grid place-content-center">Home</div>
                <div className="hover:underline grid place-content-center">Info Kemitraan</div>
                <div className="hover:underline grid place-content-center">Article</div>
                <div className="hover:underline grid place-content-center">About Us</div>
                <div className="grid place-content-center" >
                    <a className=" btn glass hover:bg-white text-white hover:text-red-800 font-bold text-lg" href="https://play.google.com/store/apps/details?id=com.clinkindonesia.clink"> Download App</a>
                </div>
            </div>
        </div>
    )
}

export default NavbarDekstop