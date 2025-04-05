function Footer() {
    return (
        <>
            {/* Low-key finishing all the landing page. Needs some improvement overall.  */}
            <div className='bg-gray-950 h-[50dvh] w-[100dvw] flex justify-evenly items-center space-x-1 '> {/* idk why's this not applying the backdrop, but idk man ive had enough */}
               <div className="flex flex-col space-y-2">
                   <h1 className="text-white text-3xl font-bold">Caribbean Cinemas</h1>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">About Us</span>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Our culture</span>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Our History</span>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Our Values</span>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Terms of Services</span>
                   <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Privacy and Security</span>
               </div>
                <div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-white text-3xl font-bold">Our Cinemas</h1>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Dominican Republic</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Puerto Rico</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Guatemala</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">St. Lucia</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Panama</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Curacao</span>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-white text-3xl font-bold">Movies</h1>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Now Displaying</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">IMAX 4D</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Snacks & Combos</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">All our Movies</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">VIP Cinema</span>
                        <span className="text-white font-semibold hover:text-gray-400 cursor-pointer">Caribbean Cinemas VIP</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;