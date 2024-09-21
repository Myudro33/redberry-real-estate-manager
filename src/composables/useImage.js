export const useConvertToBase64 = (image, file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    localStorage.setItem('file', e.target.result)
    file.value = e.target.result
  }
  reader.readAsDataURL(image) // This converts the file to Base64
}
export const useRetrieveFile = (file) => {
  const base64Data = localStorage.getItem('file')
  if (base64Data?.startsWith('data')) {
    useBase64ToFile(base64Data, 'downloaded-file')
    file.value = base64Data
  }
}

export const useBase64ToFile = (base64String, fileName) => {
  if (base64String.startsWith('data')) {
    const arr = base64String.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], fileName, { type: mime })
  }
}
