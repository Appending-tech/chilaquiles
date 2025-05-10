export default function AboutRest({ media, websiteText }) {

    const popularDishes = [
        { name: 'Producto 1', image: `./dish.png` },
        { name: 'Producto 2', image: `./dish.png` },
        { name: 'Producto 3', image: `./dish.png` },
    ];

    const testimonials = [
        { name: `Testimonio`, category: 'costumer', comment: `Excelente servicio y sabor` },
        { name: `Testimonio`, category: 'chef', comment: `Ningún lugar tan increible como este` },
        { name: `Testimonio`, category: 'owner', comment: `Mejoramos los sabores y platillos para tí` },
    ];
    return (
        <div className="mx-auto max-w-7xl py-8 w-[95%]">
            <div className="w-full overflow-hidden py-8 px-4 lg:px-8 mb-2">
                <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                    <img className="absolute h-full w-full object-cover" src={`./cocina.png`} alt="Restaurant header" />
                    <div className="absolute bg-black bg-opacity-40 flex items-center justify-center h-full w-full">
                        <h2 className="text-3xl text-white font-semibold animate-up">
                            ¡Los mejores Chilaquiles para tí!
                        </h2>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-website-text-color">Nuestro platillo estrella</h3>
                        <p className="text-website-text-color">
                            Nuestra comida es deliciosa y fresca, hecha con ingredientes de la mejor calidad.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        {popularDishes.map((dish, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                                <img className="h-32 w-full object-cover rounded-lg" src={dish.image} alt='dish.name' />
                                <h4 className="mt-2 font-semibold text-gray-900">dish.name</h4>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mb-8 shadow rounded-2xl p-4 pb-8 bg-[#FDEBD0]">
                        <h3 className="text-2xl font-semibold text-website-text-color">Nuestros testimonios</h3>
                        <p className="text-website-text-color">
                            Platillos deliciosos y un servicio excepcional. ¡Recomendado al 100%!
                        </p>
                        <div className="mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((post, index) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-center justify-between">
                                <div
                                    className="cursor-pointer relative z-10 rounded-full bg-[#D4AC0D] dark:bg-gray-500 dark:hover:bg-stone-600 px-3 py-1 font-medium text-gray-600 dark:text-gray-100 hover:bg-stone-100 shadow"
                                    >
                                    {post.category}
                                </div>
                                <div className="relative mt-3 flex items-center gap-x-4 bg-stone-200 w-full h-24 overflow-y-scroll p-3 rounded-2xl shadow-xl animate-out">
                                    <img src='./testimonial.jpg' alt="" className="h-10 w-10 object-contain rounded-full bg-gray-50 shadow-md" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900 dark:text-gray-200">
                                            <span className="absolute inset-0" />
                                            {post.name}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">{post.comment}</p>
                                    </div>
                                </div>
                                </article>
                            ))}
                        </div>
                        <div className="text-center mt-3 bg-slate-100 p-3 rounded-3xl mx-5 animate-up">
                            <h3 className="text-2xl font-semibold text-[#987c0a]">Nuestra Historia</h3>
                            <p className="text-slate-800 mt-3 px-5 pb-3 text-justify">
                                Nuestra historia comienza hace más de 20 años, cuando un grupo de amigos decidió abrir un restaurante para compartir su amor por la comida. Desde entonces, hemos crecido y evolucionado, pero nuestra pasión por ofrecer una experiencia culinaria excepcional sigue siendo la misma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}