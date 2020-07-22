import axios from 'axios'

export const getRandomCat = async () => {
  try {
    let { data } = await axios.get(`https://api.thecatapi.com/v1/images/search`)
    return { data }
  } catch ({ response }) {
    return { error: response }
  }
}
