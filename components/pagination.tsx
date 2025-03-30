"use client"

import type React from "react"

import Link from "next/link"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/components/ui/pagination"

// Custom components that use Next.js Link
const PaginationLink = ({
  href,
  isActive,
  children,
}: {
  href: string
  isActive?: boolean
  children: React.ReactNode
}) => {
  return (
    <PaginationItem>
      <Link
        href={href}
        className={`flex h-9 w-9 items-center justify-center rounded-md text-sm ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        {children}
      </Link>
    </PaginationItem>
  )
}

const PaginationPrevious = ({ href, disabled }: { href: string; disabled?: boolean }) => {
  return (
    <PaginationItem>
      <Link
        href={disabled ? "#" : href}
        className={`flex h-9 items-center gap-1 rounded-md border border-input px-4 py-2 text-sm ${
          disabled ? "pointer-events-none opacity-50" : "bg-background hover:bg-accent hover:text-accent-foreground"
        }`}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        <span aria-hidden="true">←</span> Previous
      </Link>
    </PaginationItem>
  )
}

const PaginationNext = ({ href, disabled }: { href: string; disabled?: boolean }) => {
  return (
    <PaginationItem>
      <Link
        href={disabled ? "#" : href}
        className={`flex h-9 items-center gap-1 rounded-md border border-input px-4 py-2 text-sm ${
          disabled ? "pointer-events-none opacity-50" : "bg-background hover:bg-accent hover:text-accent-foreground"
        }`}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        Next <span aria-hidden="true">→</span>
      </Link>
    </PaginationItem>
  )
}

interface AnimePaginationProps {
  currentPage: number
  totalPages: number
  genre: string
}

export default function AnimePagination({ currentPage, totalPages, genre }: AnimePaginationProps) {
  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than our max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of page range around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      // Add ellipsis if needed before start
      if (start > 2) {
        pages.push(-1) // -1 represents ellipsis (before)
      }

      // Add pages in range
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed after end
      if (end < totalPages - 1) {
        pages.push(-2) // -2 represents ellipsis (after)
      }

      // Always include last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <Pagination className="my-8">
      <PaginationContent>
        {/* Previous page button */}
        <PaginationPrevious href={`/genre/${genre}?page=${currentPage - 1}`} disabled={currentPage <= 1} />

        {/* Page numbers */}
        {pageNumbers.map((pageNumber, index) => {
          // Render ellipsis
          if (pageNumber < 0) {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          // Render page number
          return (
            <PaginationLink
              key={pageNumber}
              href={`/genre/${genre}?page=${pageNumber}`}
              isActive={currentPage === pageNumber}
            >
              {pageNumber}
            </PaginationLink>
          )
        })}

        {/* Next page button */}
        <PaginationNext href={`/genre/${genre}?page=${currentPage + 1}`} disabled={currentPage >= totalPages} />
      </PaginationContent>
    </Pagination>
  )
}
