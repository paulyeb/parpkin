import Image from "next/image";
import Link from "next/link";

const CategoryImage = ({ image, title }) => {
    return(
        <Link href="/menu">
            <a className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image 
                    src={image} 
                    className="objectFit" 
                    width={700} 
                    height={700}  
                />
                <div className="p-5 bg-gray-100">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </div>
            </a>
        </Link>
    )
}

export default CategoryImage;