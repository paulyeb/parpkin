import Image from "next/image";


const Showcase = () => {
    return (
        <div className="flex">
            <Image src="/2022_04_23_00_13_IMG_1208.jpg" className="objectFit" width={700} height={700} />
            <Image src="/showcase1.jpg" width={700} height={700} />
            <Image src="/showcase2.jpg" width={700} height={700} />
        </div>
    )
}

export default Showcase;