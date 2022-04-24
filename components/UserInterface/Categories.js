import CategoryImage from "./CategoryImage";

const Categories = () => {
    return(
        <div className="container flex flex-col">
            <div className="flex justify-between items-center">
                <div className="py-12 text-gray-800 no-underline hover:no-underline font-extrabold text-2xl lg:text-3xl">
                    <h3>BROWSE CATEGORIES</h3>
                </div>
                <div className="bg-gray-300 w-full h-0.5">
                    
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-4">
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
                <CategoryImage imageName={`/showcase1.jpg`}/>
            </div>
        </div>
    )
}

export default Categories;