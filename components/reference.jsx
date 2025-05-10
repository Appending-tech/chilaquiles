export default function Reference({ media }) {
    const starDish = {
        name: 'Chilaquiles Con Proteina',
        image: `${media}dish.jpg`,
        description: 'Descripción breve del platillo estrella.'
    };

    return (
        <div className="mx-auto max-w-7xl py-8 w-[95%]">
            <div className="relative isolate overflow-hidden p-4 lg:p-0 shadow-xl lg:gap-x-10 bg-[#D4AC0D]">
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                >
                    <circle cx={950} cy={950} r={950} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.9" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop offset="20%" stopColor= "#ABB2B9" />
                            <stop offset="100%" stopColor="#17202A" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
                            <h2 className="text-3xl text-website-text-color font-bold">Chilaquiles</h2>
                            <p className="text-website-text-color mt-2">Los mejores chilaquiles de chilakos</p>
                        </div>
                        <div className="mt-4 sm:mt-16 lg:mt-0 py-6">
                            <div className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:scale-105">
                                <img className="w-full h-44 object-cover" src='./dish.png' alt='platillo' />
                                <div className="px-6 py-8">
                                    <h3 className="text-2xl font-semibold text-gray-900">Chilaquiles con pollo</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


