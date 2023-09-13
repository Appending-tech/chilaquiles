import MetaHead from '@/components/meta-head'

export default function Home() {
  return (
    <>
      <MetaHead title="Home" />
      <section>
        <img src="appending_sf.png" className="h-48 mx-auto mt-14" />
        
        <h1 className="text-4xl font-bold text-center my-16">
          <p className='text-purple-600'>Welcome back,</p>
          Please Build a new project here!
        </h1>
      </section>
    </>
  )
}
