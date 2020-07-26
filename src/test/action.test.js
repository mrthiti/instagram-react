import { setPresentation } from '../stores/presentation/actions/getPresentation'
import { setSuggetion } from '../stores/suggetion/actions/getSuggetion'
import { setPost } from '../stores/post/actions/getPost'

describe('Action', () => {
  it('SET_PRESENTATION', () => {
    let expectActionType = {
      type: 'SET_PRESENTATION',
      payload: []
    }

    let action = setPresentation(expectActionType.payload)

    expect(action).toEqual(expectActionType)
  })

  it('SET_SUGGETION', () => {
    let expectActionType = {
      type: 'SET_SUGGETION',
      payload: []
    }

    let action = setSuggetion(expectActionType.payload)

    expect(action).toEqual(expectActionType)
  })

  it('SET_POST', () => {
    let expectActionType = {
      type: 'SET_POST',
      payload: []
    }

    let action = setPost(expectActionType.payload)

    expect(action).toEqual(expectActionType)
  })
})