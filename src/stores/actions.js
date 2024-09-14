import axios from 'axios'
export default {
  filterBy(state) {
    for (const key in this.filter) {
      if (key === state) {
        this.filter[key] = !this.filter[key]
      } else {
        this.filter[key] = key === state
      }
    }
  },
  async getCities() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/cities'
    )
    this.cities = response.data.filter((city) => city.region_id == this.region_id)
  },
  async getRegions() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/regions'
    )
    this.regions = response.data
  }
}
