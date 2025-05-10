import MetaHead from '@/components/meta-head'
import LetterMain from '@/components/letter-main'
import Reference from '@/components/reference'
import AboutRest from '@/components/about-rest'
import Carousel from '@/components/carousel';

export default function Home() {
    const cloudFrontUrl = `https://media.synapzi.com/${process.env.NEXT_PUBLIC_WEBSITE_ID}/`

    return (
        <>
        <MetaHead title="Restaurant" />
        <section className="py-8 relative">
            <Carousel/>
            <LetterMain/>
            <Reference media={cloudFrontUrl} />
            <div className="relative w-full backdrop-blur-md from-[#1E8449] via-green-500 to-[#1E8449] bg-gradient-to-b" >
            <AboutRest media={cloudFrontUrl} />
            </div>
        </section>
        </>
    )
}