import axios from 'axios'
export default {
  async getRegions() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/regions'
    )
    this.regions = response.data
  }
}
