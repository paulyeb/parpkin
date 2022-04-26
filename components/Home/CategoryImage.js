import Image from "next/image";
import Link from "next/link";

const CategoryImage = ({ image, title }) => {
    return(
        <Link href="/menu">
            <a className="max-w-sm bg-white rounded-lg mb-6 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image 
                    src={image} 
                    className="objectFit" 
                    width={800} 
                    height={800}  
                />
                <div className="p-5 bg-gray-100">
                    <h5 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                        {title}
                    </h5>
                </div>
            </a>
        </Link>
    )
}

export default CategoryImage;