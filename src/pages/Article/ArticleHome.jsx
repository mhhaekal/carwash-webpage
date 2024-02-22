export default function NewsHome() {
    return(
        <div className="bg-white min-h-screen text-black">
            <div className="flex flex-col m-12 gap-6">
                <div className="text-center text-2xl mt-4 font-bold">
                    <h1>
                        Artikel Seputar Mobil, Tips, dan Perawatannya
                    </h1>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="hover:underline hover:text-red-500">
                        * Clinks! Solusi Cuci Mobil Praktis
                    </h1>
                    <h1 className="hover:underline hover:text-red-500">
                        * Manfaat Rutin Mencuci Mobil
                    </h1>
                </div>
            </div>
        </div>
    )
}