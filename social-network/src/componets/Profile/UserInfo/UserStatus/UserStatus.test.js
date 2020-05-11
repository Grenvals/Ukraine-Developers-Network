import React from 'react'
import { create } from 'react-test-renderer'
import UserStatus from './UserStatus'

describe('UserStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<UserStatus status="test-text" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('test-text')
  })

  test('after creation <span> should be displayed', () => {
    const component = create(<UserStatus status="test-text" />)
    const root = component.root
    let span = root.findByType('p')
    expect(span).not.toBeNull()
  })

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<UserStatus status="test-text" />)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })

  test('after creation <span> should contains correct status', () => {
    const component = create(<UserStatus status="test-text" />)
    const root = component.root
    let span = root.findByType('p')
    expect(span.children[0]).toBe('test-text')
  })

  test('input should be dysplayed in editMode instead of span', () => {
    const component = create(<UserStatus status="test-text" />)
    const root = component.root
    let span = root.findByType('p')
    span.props.onClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('test-text')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(
      <UserStatus status="test-text" updateUserStatus={mockCallback} />
    )
    const instanse = component.getInstance()
    instanse.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
