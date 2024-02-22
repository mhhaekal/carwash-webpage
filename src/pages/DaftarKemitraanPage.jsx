import React from 'react';

const DaftarKemitraan = () => {
    return (
        <div className="p-5 mt-[70px] mb-[100px]">
            <h1 className=" text-3xl md:text-5xl font-bold mb-5">Daftar Kemitraan CLINK!</h1>
            <p className='text-left'>Fields marked with an <span className="text-red-500">*</span> are required</p>
            <div className="mb-5 text-left">
                <h2 className="text-2xl font-bold mb-3">DATA DIRI PRIBADI</h2>
                <form>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Nama Lengkap: <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Alamat Tempat Tinggal saat ini <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">No. Telp / Whatsapp <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Usia <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                            required
                        />
                    </div>
                </form>
            </div>

            <div className="mb-5 text-left">
                <h2 className="text-2xl font-bold mb-3">PEKERJAAN</h2>
                <form>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Pekerjaan Saat Ini <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold" >Perlengkapan Cuci yang Dimiliki: <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Motor Pribadi</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Mesin Jet Cleaner</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Mesin Vakum Mobil</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Kanebo</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Microfiber</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Sikat Ban + Ember</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Perpanjangan Kabel</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Selang Air Minimal 5 Meter</label>
                            </div>

                        </div>
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2">Pengalaman Kerja di Bidang Cuci Kendaraan <span className="text-red-500">*</span></label>
                        <textarea
                            rows="4"
                            className="border rounded-md p-2 w-1/2"
                            required
                        ></textarea>
                    </div>
                </form>
            </div>

            <div className="mb-5 text-left">
                <h2 className="text-2xl font-bold mb-3">PENGALAMAN CUCI MOBIL KELILING (HOME SERVICE).</h2>
                <h2 className="text-2xl font-bold mb-3">ISI JIKA MEMILIKI PENGALAMAN</h2>
                <form>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Area Layanan Cuci</label>
                        <label className=" block mb-2">Contoh : Mekarwangi, Singgasana, Batununggal, ...</label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Hari & Jam Kerja</label>
                        <label className=" block mb-2">Contoh : Senin s/d Minggu. Jam 08.00-17.00</label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" block mb-2 font-bold">Hari Libur</label>
                        <label className=" block mb-2">Contoh : Rabu saja / tidak ada libur.</label>
                        <input
                            type="text"
                            className="border rounded-md p-2 w-1/2"
                        />
                    </div>
                </form>
            </div>
            <div className="mb-5 text-left">
                <h2 className="text-2xl font-bold mb-3">ADMINISTRATIF</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold" >Perlengkapan Data Administratif <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >KTP + Fotocopy</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >SIM C + Fotocopy</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >SKCK Asli</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Fotocopy Kartu Keluarga</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Ijazah + Fotocopy</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                />
                                <label className=" ml-2" >Rekening BCA + Buku Tabungan</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default DaftarKemitraan;
