import axios from 'axios'
import { useModalStore } from './modal'
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
  async addAgent(data) {
    const modalStore = useModalStore()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('surname', data.surname)
    formData.append('email', data.email)
    formData.append('phone', data.number)
    formData.append('avatar', data.file[0] ? data.file[0] : data.file)
    try {
      await axios.post(
        'https://api.real-estate-manager.redberryinternship.ge/api/agents',
        formData,
        {
          headers: {
            Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
          }
        }
      )
      modalStore.modal = false
    } catch (error) {
      alert(error)
    }
  },
  async getAgents() {
    try {
      const response = await axios.get(
        'https://api.real-estate-manager.redberryinternship.ge/api/agents',
        {
          headers: {
            Authorization: `Bearer 9d016a33-abca-47eb-b541-400bdcf71b68`
          }
        }
      )
      this.agents = response.data
    } catch (error) {
      alert(error)
    }
  },
  async getCities() {
    try {
      const response = await axios.get(
        'https://api.real-estate-manager.redberryinternship.ge/api/cities'
      )
      this.cities = response.data.filter((city) => city.region_id == this.region_id)
    } catch (error) {
      alert(error)
    }
  },
  async getRegions() {
    try {
      const response = await axios.get(
        'https://api.real-estate-manager.redberryinternship.ge/api/regions'
      )
      this.regions = response.data
    } catch (error) {
      alert(error)
    }
  }
}
