"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, Bell, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { API_BASE_IMG_URL } from "@/lib/api"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/calendar" className="text-lg font-semibold">
                Calendar
              </Link>
              <Link href="/genres" className="text-lg font-semibold">
                Genres
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">FireAnime</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/calendar" className="transition-colors hover:text-primary">
            Calendar
          </Link>
          <Link href="/genres" className="transition-colors hover:text-primary">
            Genres
          </Link>
        </nav>

        <div className="flex items-center ml-auto">
          <form onSubmit={handleSearch} className="relative mr-2 hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search anime..."
              className="w-[200px] lg:w-[300px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => router.push("/search")}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="ml-2">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {
                if (window) {
                  window.open(`${API_BASE_IMG_URL}/register`)
                }
              }}>Register</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar

