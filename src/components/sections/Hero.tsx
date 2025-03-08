import Image from "next/image";
import Countdown from "../Countdown";

export default function Hero() {
    return (
        <div className="h-dvh w-full">
            <Image
                src="/background.png"
                alt="Legalizujme"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-8xl p-4 burra-font">LEGALIZUJME</h1>
                <p className="text-xl p-4">Největší konference o legalizaci a válce proti drogám</p>
                <div className="p-4 bg-[#ffffffb0] text-black rounded-lg text-4xl mt-16">
                    <Countdown targetDate="2025-10-18T00:00:00"></Countdown>
                </div>
                <div className="flex justify-between text-2xl my-8">
                    <span>Praha <a href="https://www.kulturnisportovna.cz/"></a>Radlická kulturní sportovna</span>
                    <span>18.10.2025</span>
                </div>
            </div>
        </div>
    );
}