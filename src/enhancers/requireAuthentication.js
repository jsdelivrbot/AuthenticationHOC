import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function(EnhancedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      return <EnhancedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
