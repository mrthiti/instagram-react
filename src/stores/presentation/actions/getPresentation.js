import { getRandomCat } from '../../../api/randomCat'

let mockPresentation = async () => {
  let catData = []

  for (let i = 0; i < 7; i++) {
    let { data } = await getRandomCat()
    catData.push({
      name: data[0].id,
      imageUrl: data[0].url
    })
  }

  return catData
}

export const GET_PRESENTATION = "GET_PRESENTATION"

export default async () => {
  return {
    type: GET_PRESENTATION,
    payload: await mockPresentation()
  }
}