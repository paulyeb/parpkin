import Image from "next/image";


const Showcase = () => {
    return (
        <>
            <div className="flex">
                <Image src="/2022_04_23_00_13_IMG_1208.jpg" className="objectFit" width={700} height={550} />
                <Image src="/showcase1.jpg" width={700} height={550} />
                <Image src="/showcase2.jpg" width={700} height={550} />
            </div>
            <div className="bg-gray-100 flex flex-col">
                <div className="container flex justify-center lg:justify-start items-center">
                    <div className="mx-2 bg-yellow-300 border-2 w-3 h-7"></div>
                    <div className="mx-2 bg-yellow-300 border-2 w-3 h-7"></div>
                    <div className="mx-2 bg-yellow-300 border-2 w-3 h-7"></div>
                </div>
                <div className="container flex justify-center lg:justify-start">
                    <h3 className="py-12 text-gray-800 no-underline hover:no-underline font-extrabold">
                        <span className="text-2xl lg:text-5xl"><i className="em em-grinning">WELCOME TO PARPKIN!!!</i></span>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Showcase;