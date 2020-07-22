import { getRandomCat } from '../../../api/randomCat'

let mockType = () => {
  let types = ["Follows you", "Suggested for you"]
  return types[Math.floor((Math.random() * 100)) % types.length]
}

let mockPresentation = async () => {
  let catData = []

  for (let i = 0; i < 5; i++) {
    let { data } = await getRandomCat()
    catData.push({
      name: data[0].id,
      imageUrl: data[0].url,
      type: mockType()
    })
  }

  return catData
}

export const GET_SUGGETION = "GET_SUGGETION"

export default async () => {
  return {
    type: GET_SUGGETION,
    payload: await mockPresentation()
  }
}