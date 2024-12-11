import motors from "@/lib/motor";
import Image from "next/image";

// Define the params correctly to avoid the type error
interface MotorDetailsProps {
  params: { motorId: string };
}

export default function MotorDetails({ params }: MotorDetailsProps) {
  const motor = motors.find((m) => m.id.toString() === params.motorId);

  if (!motor) {
    return (
      <div className="px-5 md:px-32 py-7 flex flex-col w-full">
        <h1 className="text-2xl font-bold text-red-500">Motor not found</h1>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-32 py-7 flex flex-col w-full">
      <div className="w-full bg-white flex p-5">
        <div className="bike-img">
          <Image
            src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/81/2024/10/11/Honda-BeAT-X-Kobo-Kanaeru-Tidak-Dijual-Tapi-Bisa-Modifikasi-Sesuai-Impian-2911776148.png"
            alt={motor.tipe}
            width={500}
            height={500}
            className="w-[680px] h-[470px] rounded-md"
          />
        </div>
        <div className="bike-desc ml-10">
          <h1 className="text-xl font-bold md:text-3xl">{motor.merek} {motor.tipe}</h1>
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
            Rp {Number(motor.harga).toLocaleString("id-ID")}
          </h1>
          <button
            className={`w-full ${
              motor.status === "tersedia" ? "bg-logo" : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold rounded-md py-3 text-lg mt-5`}
            disabled={motor.status !== "tersedia"}
          >
            {motor.status === "tersedia" ? "Rental Sekarang" : "Tidak Tersedia"}
          </button>
        </div>
      </div>
    </div>
  );
}
