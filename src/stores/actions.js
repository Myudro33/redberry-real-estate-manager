import axios from 'axios'
export default {
  filterListingByRegion(id) {
    this.loading = true
    const test = this.listings.filter((item) => item.city.region_id == id)
    this.filteredListing = test
    this.loading = false
  },
  async getSingleListing(id) {
    this.loading = true
    const response = await axios.get(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,
      {
        headers: {
          Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
        }
      }
    )
    this.singleListing = response.data
    this.filterListingByRegion(response.data.city.region_id)
  },
  async getListing() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/real-estates',
      {
        headers: {
          Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
        }
      }
    )
    this.listings = response.data
  },
  async addListing(data) {
    const formData = new FormData()
    formData.append('address', data.address)
    formData.append('image', data.file[0])
    formData.append('region_id', data.region)
    formData.append('description', data.description)
    formData.append('city_id', data.city)
    formData.append('zip_code', data.postalCode)
    formData.append('price', data.price)
    formData.append('area', data.area)
    formData.append('bedrooms', data.bedrooms)
    formData.append('is_rental', data.listing_type)
    formData.append('agent_id', data.agent)
    const response = await axios.post(
      'https://api.real-estate-manager.redberryinternship.ge/api/real-estates',
      formData,
      {
        headers: {
          Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
        }
      }
    )
    this.listings.push(response.data)
  },
  convertBlobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  },
  async urltoFile(url, filename, mimeType) {
    const res = await fetch(url)
    const buf = await res.arrayBuffer()
    return new File([buf], filename, { type: mimeType })
  },
  filterBy(state) {
    for (const key in this.filter) {
      if (key === state) {
        this.filter[key] = !this.filter[key]
      } else {
        this.filter[key] = key === state
      }
    }
  },
  async getAgents() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/agents',
      {
        headers: {
          Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
        }
      }
    )
    this.agents = response.data
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
