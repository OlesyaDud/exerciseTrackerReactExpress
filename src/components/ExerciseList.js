import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import Exercise from './Exercise';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
    <Link to={"/edit/"+props.exercise._id }>Edit </Link>
      | <a href="#" onClick={()=> {props.deleteExercise(props.exercise._id)}}> Delete </a>
        </td>
    </tr>

)

export default class ExerciseList extends Component {

  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
    .then(res => {
      this.setState({ exercises: res.data })
    })
      .catch((err) => {console.log(err)});
}

deleteExercise(id) {
  axios.delete('http://localhost:5000/exercises/' + id)
  .then(res => console.log(res.data));

  this.setState({
    exercises: this.state.exercises.filter(el => el._id !== id)
  })
}

exerciseList() {
  return this.state.exercises.map(currentExercise => {
    return <Exercise exercise ={currentExercise} 
    deleteExercise={this.deleteExercise} 
    key={currentExercise._id} />;
  })
}

  render() {
    return (
      <div>
        <h1>Logged Exercises</h1>
        <table>
          <thread>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thread>

          <tbody>
            {this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}
