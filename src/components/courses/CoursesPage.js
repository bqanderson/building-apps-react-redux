import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as courseActions from '../../redux/actions/courseActions'

class CoursesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: {
        title: ''
      }
    }
  }

  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value }
    this.setState({ course })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage)
