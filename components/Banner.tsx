const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-400 border-y border-black py-10 lg:py-0">
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'>
                <span className='underline decoration-slate-600 decoration-4'>TheBlog</span> is a place to write, read, and connect
            </h1>
            <h2>
                It's easy and free to post your thinking on any topic and connect with millions of readers
            </h2>
        </div>
        <img className="hidden md:inline-flex h-32 lg:h-96 pr-7" src="/BlogLogo.svg" alt="TheBlog" />
    </div>
  )
}

export default Banner