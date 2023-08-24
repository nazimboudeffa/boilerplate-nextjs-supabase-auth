function Footer () {
    return (
        <footer>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-gray-500 sm:justify-start">
                <p>Crafted with <span className="text-red-500">❤</span> on <a href="https://github.com/nazimboudeffa/boilerplate-nextjs-supabase">GitHub</a></p>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2023. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer