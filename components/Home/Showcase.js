import Image from "next/image";


const Showcase = () => {
    return (
        <>
            <div className="flex">
                <Image src="/images/combo/combo1.jpg" className="objectFit" width={700} height={550} />
                <Image src="/images/combo/combo2.jpg" width={700} height={550} />
                <Image src="/images/shawarma/shawarma2.jpg" width={700} height={550} />
            </div>
            <div className="bg-gray-100 flex flex-col">
                <div className="container py-0 flex justify-center lg:justify-start">
                    <div className="mx-1 bg-yellow-400 border-2 w-3 h-12"></div>
                    <div className="mx-1 bg-red-500 border-2 w-3 h-10"></div>
                    <div className="mx-1 bg-green-600 border-2 w-3 h-7"></div>
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