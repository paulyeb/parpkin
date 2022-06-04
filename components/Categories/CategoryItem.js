import Link from "next/link";

const CategoryItem = ({ image, title, link }) => {
    return(
        <Link href={link}>
            <a className="bg-white rounded-lg mb-6 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <img 
                    src={image} 
                    className="object-cover h-80 w-96"  
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

export default CategoryItem;