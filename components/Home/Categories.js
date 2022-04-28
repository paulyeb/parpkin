import CategoryImage from "./CategoryImage";

const Categories = () => {
    return(
        <div className="container flex flex-col px-3">
            <div className="flex justify-between items-center">
                <div className="py-12 text-gray-800 no-underline hover:no-underline font-extrabold text-2xl lg:text-3xl">
                    <h3>BROWSE CATEGORIES</h3>
                </div>
                <div className="bg-gray-300 w-full h-0.5">
                    
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 px-4">
                <CategoryImage title={'BURGERS'} image={`/images/burgers/burger2.jpg`} link={"/menu#burger"}/>
                <CategoryImage title={'CHICKEN BUCKETS'} image={`/images/chicken bucket/bucket2.jpg`} link={"/menu#chicken"}/>
                <CategoryImage title={'SHAWARMA'} image={`/images/shawarma/shawarma2.jpg`} link={"/menu#shawarma"}/>
                <CategoryImage title={'CHIPS & CHICKEN'} image={`/images/combo/combo2.jpg`} link={"/menu#chips"}/>
                <CategoryImage title={'COMBO PACKAGES'} image={`/images/combo/combo1.jpg`} link={"/menu#combo"}/>
                <CategoryImage title={'PIZZA'} image={`/images/pizza/pizza1.jpg`} link={"/menu#pizza"}/>
                <CategoryImage title={'BEVERAGES'} image={`/images/shawarma/shawarma2.jpg`} link={"/menu#beverages"}/>
            </div>
        </div>
    )
}

export default Categories;