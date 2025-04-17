"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediaGrid } from "@/components/personality/media-grid"

// Dummy data
const mediaItems = {
  books: [
    {
      id: "1",
      type: "book",
      title: "Dune",
      author: "Frank Herbert",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2076&auto=format&fit=crop",
      review: "A masterpiece of world-building and political intrigue. The depth of the characters and the complexity of the plot make this a must-read for any sci-fi fan.",
      dateConsumed: new Date("2024-01-15"),
      isFavorite: true
    },
    {
      id: "2",
      type: "book",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2071&auto=format&fit=crop",
      review: "Beautiful prose and an engaging story. The magic system is uniquely logical and well-thought-out.",
      dateConsumed: new Date("2024-02-01"),
      isFavorite: false
    },
  ],
  movies: [
    {
      id: "3",
      type: "movie",
      title: "Inception",
      author: "Christopher Nolan",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
      review: "A mind-bending exploration of dreams and reality. The visual effects and score create an unforgettable experience.",
      dateConsumed: new Date("2024-01-20"),
      isFavorite: true
    },
    {
      id: "4",
      type: "movie",
      title: "The Grand Budapest Hotel",
      author: "Wes Anderson",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop",
      review: "Quirky, charming, and visually stunning. Anderson's attention to detail and symmetry creates a unique viewing experience.",
      dateConsumed: new Date("2024-02-15"),
      isFavorite: false
    },
  ],
  games: [
    {
      id: "5",
      type: "game",
      title: "Elden Ring",
      author: "FromSoftware",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065&auto=format&fit=crop",
      review: "A masterclass in open-world design. The sense of discovery and achievement is unparalleled.",
      dateConsumed: new Date("2024-01-10"),
      isFavorite: true
    },
    {
      id: "6",
      type: "game",
      title: "Stardew Valley",
      author: "ConcernedApe",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?q=80&w=2071&auto=format&fit=crop",
      review: "A relaxing and addictive farming sim with surprising depth. The pixel art style is charming and nostalgic.",
      dateConsumed: new Date("2024-02-10"),
      isFavorite: false
    },
  ]
};

export function MediaTabs() {
  return (
    <Tabs defaultValue="books" className="w-full">
      <TabsList className="grid w-full max-w-[400px] grid-cols-3 mb-8">
        <TabsTrigger value="books">Books</TabsTrigger>
        <TabsTrigger value="movies">Movies</TabsTrigger>
        <TabsTrigger value="games">Games</TabsTrigger>
      </TabsList>
      <TabsContent value="books">
        <MediaGrid items={mediaItems.books} type="book" />
      </TabsContent>
      <TabsContent value="movies">
        <MediaGrid items={mediaItems.movies} type="movie" />
      </TabsContent>
      <TabsContent value="games">
        <MediaGrid items={mediaItems.games} type="game" />
      </TabsContent>
    </Tabs>
  )
}