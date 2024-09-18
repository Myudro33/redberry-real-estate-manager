export const agentSchema = {
  name: (value) => {
    if (!value) {
      return 'სახელი სავალდებულოა'
    } else if (value.length < 3) {
      return 'უნდა შედგებოდეს 2-ზე მეტი სიმბოლოსგან'
    }
    return true
  },

  surname: (value) => {
    if (!value) {
      return 'გვარი სავალდებულოა'
    } else if (value.length < 3) {
      return 'უნდა შედგებოდეს 2-ზე მეტი სიმბოლოსგან'
    }
    return true
  },
  email: (value) => {
    if (!value) {
      return 'ელ-ფოსტა სავალდებულოა'
    } else if (!value.endsWith('@redberry.ge')) {
      return 'მეილი უნდა მთავრდებოდეს @redberry.ge-თ '
    }
    return true
  },
  number: (value) => {
    const phoneRegex = /^5\d{8}$/
    if (!value) {
      return 'ნომერი სავალდებულოა'
    } else if (isNaN(value) || value.trim() === '') {
      return 'ნომერი უნდა შედგებოდეს რიცხვებისგან'
    } else if (!phoneRegex.test(value)) {
      return 'უნდა იყოს შემდეგი ფორმატით 5XXXXXXXX'
    }
    return true
  },
  file: (value) => {
    if (!value) return 'აირჩიეთ ფაილი'
    else if (typeof value !== 'string') {
      const fileSizeMB = value[0].size / (1024 * 1024)
      return fileSizeMB <= 1 ? true : `სურათი უნდა იყოს 1მბ-ზე ნაკლები`
    }
    return true
  }
}

export const schema = {
  deal: (value) => {
    if (value) {
      return true
    }
    return 'აირჩიეთ განცხადების ტიპი'
  },
  file: (value) => {
    if (!value) return 'აირჩიეთ ფაილი'
    else if (typeof value !== 'string') {
      const fileSizeMB = value[0].size / (1024 * 1024)
      return fileSizeMB <= 1 ? true : `სურათი უნდა იყოს 1მბ-ზე ნაკლები`
    }
    return true
  },
  address: (value) => {
    if (!value) {
      return 'მისამართი სავალდებულოა'
    } else if (value.length < 3) {
      return 'უნდა შედგებოდეს 2-ზე მეტი სიმბოლოსგან'
    }
    return true
  },
  postalCode: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'ფოსტის კოდი სავალდებულოა'
    }
    if (isNaN(value) || value.trim() === '') {
      return 'უნდა შედგებოდეს რიცხვებისგან'
    }
    return true
  },
  region: (value) => {
    if (value) {
      return true
    }
    return 'რეგიონი სავალდებულოა'
  },
  city: (value) => {
    if (!value) {
      return 'ქალაქი სავალდებულოა'
    }
    return true
  },
  price: (value) => {
    if (!value) {
      return 'ფასი სავალდებულოა'
    } else if (isNaN(value) || value.trim() === '') {
      return 'უნდა შედგებოდეს რიცხვებისგან'
    }
    return true
  },
  area: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'ფართობი სავალდებულოა'
    } else if (isNaN(value) || value.trim() === '') {
      return 'უნდა შედგებოდეს რიცხვებისგან'
    }
    return true
  },
  bedrooms: (value) => {
    if (!value) return 'საძინებელი სავალდებულოა'
    else if (isNaN(value) || value.trim() === '') {
      return 'უნდა შედგებოდეს რიცხვებისგან'
    }
    const number = Number(value)
    return Number.isInteger(number) ? true : 'უნდა იყოს მთელი რიცხვი'
  },
  description: (value) => {
    if (value === undefined || value === null || value.trim() === '') {
      return 'აღწერა სავალდებულოა'
    }
    const wordCount = value.trim().split(/\s+/).length
    return wordCount > 4 ? true : `უნდა იყოს 5 სიტყვაზე მეტი`
  }
  // agent: (value) => {
  //   console.log(value, 'rules')
  //   if (value) {
  //     return true
  //   }
  //   return 'აგენტი სავალდებულოა'
  // }
}
