export interface TravelLocation {
  countryCode: string // ISO 3166-1 numeric (e.g., "124" for Canada)
  countryName: string
  visitYear: string
  note?: string
  highlight?: boolean
}

// ISO 3166-1 numeric codes (used by world-atlas TopoJSON)
// Canada = 124, India = 356
export const visitedCountries: TravelLocation[] = [
  { countryCode: "356", countryName: "India", visitYear: "1999" },
  { countryCode: "124", countryName: "Canada", visitYear: "2018", note: "Home 🏠" },
]
