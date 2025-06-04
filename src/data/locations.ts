export interface Location {
  id: string;
  name: string;
  role: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locations: Location[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    role: 'Middle East Hub',
    address: 'Dubai, UAE',
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    }
  },
  {
    id: 'new-delhi',
    name: 'New Delhi',
    role: 'Operations Center',
    address: 'New Delhi, India',
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    }
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    role: 'North American Hub',
    address: 'Vancouver, Canada',
    coordinates: {
      lat: 49.2827,
      lng: -123.1207
    }
  }
];

export const coverage = {
  countries: '50+',
  clients: '200+',
  deals: '1000+',
  volume: '1 Million+ MT'
};