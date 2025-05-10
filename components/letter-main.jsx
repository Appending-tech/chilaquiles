export default function LetterMain() {
    return (
        <div className="pt-9 mt-12 flex items-center justify-center">
            <div className="text-justify mx-auto max-w-7xl bg-[#FDEBD0] p-5 md:rounded-md shadow-md w-full animate-up">
                <div className="justify-between flex lg:relative text-xl lg:text-2xl">
                    <span className="lg:border-amber-800 border-l-4 text-slate-800 font-bold text-center pl-5">
                        Nuestro servicio:
                    </span>
                    <br />
                    <span className="font-bold lg:absolute lg:-right-5 xl:-right-10 md:-top-10 bg-slate-100 p-2 rounded-md shadow">
                        <img className="h-20 w-auto" src='./chilakos.png' alt="Logo" />
                    </span>
                </div>
                <hr />
                <div className="text-stone-700 font-bold text-justify text-md mt-7">
                    Los Chilakos es un restaurante familiar que ofrece una experiencia única de comida mexicana. Nos especializamos en chilaquiles, tacos y otros platillos tradicionales, todos preparados con ingredientes frescos y de alta calidad. Nuestro ambiente acogedor y amigable es perfecto para disfrutar de una comida deliciosa con amigos y familiares.
                </div>
            </div>
        </div>
    )
}