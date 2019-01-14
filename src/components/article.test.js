import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render article', () => {
    const container = shallow(<Article article={articles[0]} />)
    expect(container.find('.test__article').length).toEqual(1)
  })

  it('should render all articles closed by default', () => {
    const container = render(<Article article={articles[0]} />)

    expect(container.find('.test__article--body').length).toEqual(0)
  })

  it('should open an article on click', () => {
    const toggleOpen = jest.fn()
    const container = mount(<Article article={articles[0]} toggleOpen={toggleOpen} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(toggleOpen).toBeCalled()
  })
})
