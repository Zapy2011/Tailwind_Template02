export class ClockData {
  id: string;
  city: string;
  country: string;
  state: string;
  continent: string;
  utcOffset: number;

  constructor({ id, city, country, state, continent, utcOffset }: {
    id: string;
    city: string;
    country: string;
    state: string;
    continent: string;
    utcOffset: number;
  }) {
    this.id = id;
    this.city = city;
    this.country = country;
    this.state = state;
    this.continent = continent;
    this.utcOffset = utcOffset;
  }
}
