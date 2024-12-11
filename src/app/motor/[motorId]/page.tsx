'use client'
import motors from "@/lib/motor"; // Import your motor data
import Image from "next/image";

export default function MotorDetails({
  params,
}: {
  params: { motorId: string };
}) {
  // Find the motor object based on the motorId from params
  const motor = motors.find((m) => m.id.toString() === params.motorId);

  // Fallback if motor is not found
  if (!motor) {
    return (
      <div className="px-5 md:px-32 py-7 flex flex-col w-full">
        <h1 className="text-2xl font-bold text-red-500">Motor not found</h1>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/6289627728613?text=saya%20ingin%20merental%20motor%20${encodeURIComponent(
    motor.merek
  )}%20${encodeURIComponent(motor.tipe)}`;

  const handleRentalClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="px-5 md:px-32 py-7 flex flex-col w-full">
      <div className="w-full bg-white flex flex-col md:flex-row md:p-5 p-3">
        {/* Bike Image */}
        <div className="bike-img">
          <Image
            src={
              "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/81/2024/10/11/Honda-BeAT-X-Kobo-Kanaeru-Tidak-Dijual-Tapi-Bisa-Modifikasi-Sesuai-Impian-2911776148.png"
            }
            alt={motor.tipe}
            width={500}
            height={500}
            className="md:w-[680px] md:h-[470px] w-full h-[260px] rounded-md"
          />
        </div>

        {/* Bike Description */}
        <div className="bike-desc md:ml-10 mt-5 md:mt-0">
          <h1 className="text-xl font-bold md:text-3xl">{motor.merek}{motor.tipe}</h1>

          <table className="mt-5 w-full text-left">
  <tbody>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">Kategori</td>
      <td className="px-4 py-2">{motor.kategori}</td>
    </tr>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">Transmisi</td>
      <td className="px-4 py-2">{motor.transmisi}</td>
    </tr>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">Kondisi</td>
      <td className="px-4 py-2">{motor.kondisi}</td>
    </tr>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">Kapasitas</td>
      <td className="px-4 py-2">{motor.kapasitas}</td>
    </tr>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">CC</td>
      <td className="px-4 py-2">{motor.cc} cc</td>
    </tr>
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 font-semibold">Kecepatan Maksimum</td>
      <td className="px-4 py-2">{motor.kecepatan}</td>
    </tr>
  </tbody>
</table>


          <p className="mt-2">{motor.deskripsi}</p>

          <h1 className="text-logo text-3xl font-bold mt-3">
            Rp {Number(motor.harga).toLocaleString("id-ID")} <span className="text-lg text-gray-500">/ 12 Jam</span>
          </h1>

          <button
            className={`w-full ${
              motor.status === "tersedia"
                ? "bg-logo"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold rounded-md py-3 text-lg mt-5`}
            disabled={motor.status !== "tersedia"}
            onClick={handleRentalClick}
          >
            {motor.status === "tersedia" ? "Rental Sekarang" : "Tidak Tersedia"}
          </button>
        </div>
      </div>
    </div>
  );
}
