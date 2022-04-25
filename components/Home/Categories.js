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
                <CategoryImage title={'BURGERS'} image={`/burger2.jpg`}/>
                <CategoryImage title={'CHICKEN BUCKETS'} image={`/bucket2.jpg`}/>
                <CategoryImage title={'SHAWARMA'} image={`/shawarma2.jpg`}/>
                <CategoryImage title={'COMBO PACKAGES'} image={`/2022_04_23_00_13_IMG_1208.jpg`}/>
                <CategoryImage title={'CHIPS & CHICKEN'} image={`/showcase1.jpg`}/>
                <CategoryImage title={'PIZZA'} image={`/pizza1.jpg`}/>
                <CategoryImage title={'BEVERAGES'} image={`/shawarma2.jpg`}/>
            </div>
        </div>
    )
}

export default Categories;