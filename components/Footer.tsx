export default function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-32">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Colin Kasowski. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/colinkasowski" className="hover:text-gray-900 transition-colors">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/colinkasowski/" className="hover:text-gray-900 transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/colinkasowski" className="hover:text-gray-900 transition-colors">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}