import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold">
            FireAnime
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Your ultimate anime streaming platform</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-medium">Browse</h3>
            <div className="flex flex-col mt-2 gap-2">
              <Link href="/genres" className="text-sm text-muted-foreground hover:text-primary">
                Genres
              </Link>
              <Link href="/calendar" className="text-sm text-muted-foreground hover:text-primary">
                Calendar
              </Link>
              <Link href="/search" className="text-sm text-muted-foreground hover:text-primary">
                Search
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-medium">Company</h3>
            <div className="flex flex-col mt-2 gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-6">
        <p className="text-xs text-center text-muted-foreground">
          © {new Date().getFullYear()} FireAnime. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

