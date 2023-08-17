export type City = 'Helsinki' | 'Turku' | 'Oulu' | 'Vaasa'

export type Country = 'Finland'

export type Location = `${City}, ${Country}`

export type TypeStay = 'Entire apartment' | 'Entire house' | 'Private room'

export type Beds = number | null

export interface Stay {
  city: City
  country: Country
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: TypeStay
  beds: Beds
  photo: string
}
