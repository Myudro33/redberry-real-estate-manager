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
  async addListing(data) {
    const formData = new FormData()
    formData.append('address', data.address)
    formData.append('image', data.file[0] ? data.file[0] : data.file)
    formData.append('region_id', data.region)
    formData.append('description', data.description)
    formData.append('city_id', data.city)
    formData.append('zip_code', data.postalCode)
    formData.append('price', data.price)
    formData.append('area', data.area)
    formData.append('bedrooms', data.bedrooms)
    formData.append('is_rental', data.listing_type)
    formData.append('agent_id', data.agent)
    try {
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
    } catch (error) {
      alert(error)
    }
  },
  filterListingByRegion(id) {
    this.loading = true
    const test = this.listings.filter((item) => item.city.region_id == id)
    this.filteredListing = test
    this.loading = false
  },
  async getSingleListing(id) {
    this.loading = true
    try {
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
    } catch (error) {
      alert(error)
    }
  },
  async getListing() {
    try {
      const response = await axios.get(
        'https://api.real-estate-manager.redberryinternship.ge/api/real-estates',
        {
          headers: {
            Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
          }
        }
      )
      this.listings = response.data
    } catch (error) {
      alert(error)
    }
  },
  async removeListing(id) {
    try {
      await axios.delete(
        `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,
        {
          headers: {
            Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
          }
        }
      )
      this.listings = this.listings.filter((item) => item.id != id)
    } catch (error) {
      alert(error)
    }
  }
}
