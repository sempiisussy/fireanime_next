"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"

interface SearchFormProps {
  initialQuery: string
}

export function SearchForm({ initialQuery }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-8">
      <Input
        type="search"
        placeholder="Search for anime..."
        className="max-w-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">
        <SearchIcon className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  )
}

