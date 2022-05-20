import MenuItem from "./MenuItem";

const Menu = () => {
    return(
        <div className="container lg:flex lg:justify-start lg:items-start pb-60">
            <div className="hidden lg:inline fixed top-30 p-2">
                <div className="mt-2 mb-1 ml-9 font-bold text-xl">
                    MENU
                </div>
                <div className="mb-1">
                    <a href="#burger" className="hover:font-bold text-lg">
                        Burgers
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#chicken" className="hover:font-bold text-lg">
                        Chicken Buckets
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#shawarma" className="hover:font-bold text-lg">
                        Shawarma
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#chips" className="hover:font-bold text-lg">
                        {`Chips & Chicken`}
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#combo" className="hover:font-bold text-lg">
                        Combo Packages
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#pizza" className="hover:font-bold text-lg">
                        Pizza
                    </a>
                </div>
                <div className="mb-1">
                    <a href="#beverages" className="hover:font-bold text-lg">
                        Beverages
                    </a>
                </div>
            </div>
            <div className="lg:ml-60 grow flex flex-col">
                <input 
                    type="search" 
                    name="" 
                    id=""
                    placeholder="Search"
                    className="fixed z-10 lg:top-9 top-3 border-2 lg:my-9 my-16 w-50 rounded-lg focus:outline-none p-2" 
                />
                <div className="bg-gray-700 lg:inline hidden my-5 w-full h-1">
                
                </div>
                <div className="px-4 bg-gray-50 lg:mt-4 mt-20">
                    <div id="burger">
                        <div className="py-10 text-4xl font-bold text-xl">
                            BURGERS
                        </div>
                        <div className="grid lg:grid-cols-3 lg:gap-6">
                            <MenuItem 
                                image={`/images/burgers/burger2.jpg`}
                                title={`Single Burger`}
                                price={`GHS 5.00`}
                                description={`Very filling | Very filling | Very filling | Very filling`}
                                className="overflow-hidden"
                            />
                            <MenuItem 
                                image={`/images/burgers/burger2.jpg`}
                                title={`Single Burger`}
                                price={`GHS 5.00`}
                                description={`Very filling | Very filling | Very filling | Very filling`}
                                className="overflow-hidden"
                            />
                            <MenuItem 
                                image={`/images/burgers/burger2.jpg`}
                                title={`Single Burger`}
                                price={`GHS 5.00`}
                                description={`Very filling | Very filling | Very filling | Very filling`}
                                className="overflow-hidden"
                            />
                            <MenuItem 
                                image={`/images/burgers/burger2.jpg`}
                                title={`Single Burger`}
                                price={`GHS 5.00`}
                                description={`Very filling | Very filling | Very filling | Very filling`}
                                className="overflow-hidden"
                            />
                        </div>
                    </div>

                    <div className="py-10 text-4xl font-bold text-xl" id="chicken">
                        CHICKEN BUCKETS
                    </div>
                    <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>

                    <div className="py-10 text-4xl font-bold text-xl" id="shawarma">
                        SHAWARMA
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/shawarma/2022_04_23_00_14_IMG_1211.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/shawarma/shawarma2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/shawarma/2022_04_23_00_14_IMG_1211.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/shawarma/shawarma2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>

                    <div className="py-10 text-4xl font-bold text-xl" id="chips">
                        {`CHIPS & CHICKEN`}
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/chips/2022_04_23_00_14_IMG_1212.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chips/2022_04_23_00_15_IMG_1217.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chips/2022_04_23_00_15_IMG_1217.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chips/2022_04_23_00_14_IMG_1212.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>

                    <div className="py-10 text-4xl font-bold text-xl" id="combo">
                        COMBO PACKAGES
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/combo/2022_04_23_00_17_IMG_1237.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/combo/combo1.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/combo/2022_04_23_00_17_IMG_1233.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/combo/combo2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>

                    <div className="py-10 text-4xl font-bold text-xl" id="pizza">
                        PIZZA
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/pizza/pizza1.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/pizza/pizza1.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/pizza/pizza1.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/pizza/pizza1.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>
                    <div className="py-10 text-4xl font-bold text-xl" id="beverages">
                        BEVERAGES
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-6">
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                        <MenuItem 
                            image={`/images/chicken bucket/bucket2.jpg`}
                            title={`Single Burger`}
                            price={`GHS 5.00`}
                            description={`Very filling | Very filling | Very filling | Very filling`}
                            className="overflow-hidden"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;