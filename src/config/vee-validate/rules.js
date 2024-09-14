export const schema = {
  deal: (value) => {
    if (value) {
      return true
    }
    return 'You must choose a drink'
  },
  file: (value) => {
    if (!value) return 'No file selected'
    const fileSizeMB = value[0].size / (1024 * 1024)
    return fileSizeMB <= 1 ? true : `File must be less than or equal to 1 MB`
  },
  address: (value) => {
    if (value) {
      if (value.length < 3) {
        return 'address must be more than 2 symbols'
      }
      return true
    }
    return 'you must choose a file'
  },
  postalCode: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'This field is required'
    }
    if (isNaN(value) || value.trim() === '') {
      return 'Value must be numeric'
    }
    return true
  },
  region: (value) => {
    if (value) {
      return true
    }
    return 'you must choose region'
  },
  city: (value) => {
    if (value) {
      return true
    }
    return 'you must choose city'
  },
  price: (value) => {
    if (value) {
      return true
    }
    return 'you must choose price'
  },
  area: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'This field is required'
    }
    if (isNaN(value) || value.trim() === '') {
      return 'Value must be numeric'
    }
    return true
  },
  bedrooms: (value) => {
    if (!value) return 'This field is required'
    const number = Number(value)
    return Number.isInteger(number) ? true : 'Value must be a whole number'
  },
  description: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'This field is required'
    }
    const wordCount = value.trim().split(/\s+/).length
    return wordCount > 5 ? true : `Must be more than 5 words`
  },
  agent: (value) => {
    if (value) {
      return true
    }
    return 'you must choose an agent'
  }
}
