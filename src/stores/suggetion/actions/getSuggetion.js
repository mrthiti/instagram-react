import { getRandomCat } from '../../../api/randomCat'

let mockType = () => {
  let types = ["Follows you", "Suggested for you"]
  return types[Math.floor((Math.random() * 100)) % types.length]
}

let mockSuggetion = async () => {
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

export const SET_SUGGETION = "SET_SUGGETION"
export const setSuggetion = (payload) => {
  return {
    type: SET_SUGGETION,
    payload
  }
}

export const getSuggetion = async () => async (dispatch, getState) => {
  let listSuggetion = await mockSuggetion()
  dispatch(setSuggetion(listSuggetion))
}