export type City = 'Helsinki' | 'Turku' | 'Oulu' | 'Vaasa'

export type Country = 'Finland'

export type Location = `${City}, ${Country}`

export interface Stay {
  city: City
  country: Country
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: 'Entire apartment' | 'Entire house' | 'Private room'
  beds: number | null
  photo: string
}
