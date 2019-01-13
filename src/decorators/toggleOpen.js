//HOC === Higher Order Component === Decorator
import React from 'react'

export default (OriginalComponent) =>
  class ToggleOpenComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleOpenItem = () => {
      this.setState((state) => {
        return {
          isOpen: !state.isOpen
        }
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
