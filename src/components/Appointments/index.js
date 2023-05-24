// Write your code h
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    userList: [],
    userInput: '',
    userDate: '',
    isStar: false,
  }

  onSubmit = event => {
    event.preventDefault()
    const {userInput, userDate, userList} = this.state
    console.log(userList)
    const userData = {
      userInputValue: userInput,
      userDateValue: userDate,
      id: uuid(),
      isTrue: false,
    }
    this.setState(prevState => ({
      userInput: '',
      userDate: '',
      userList: [...prevState.userList, userData],
    }))
  }

  onInputTitle = event => {
    console.log(event.target.value)
    this.setState({
      userInput: event.target.value,
    })
  }

  onInputDate = event => {
    console.log(event.target.value)
    this.setState({
      userDate: event.target.value,
    })
  }

  isFalseFun = starImg => {
    this.setState(prevState => ({
      userList: prevState.userList.map(eachObj => {
        if (eachObj.id === starImg) {
          return {...eachObj, isTrue: !eachObj.isTrue}
        }
        return eachObj
      }),
    }))
  }

  onStar = () => {
    this.setState(prevState => ({isStar: !prevState.isStar}))
  }

  render() {
    const {userList, userInput, userDate, isStar} = this.state
    const sample = new Date(userDate)
    console.log(sample.getDay())

    let userArr = userList
    if (isStar === true) {
      userArr = userList.filter(
        eachUserStar => eachUserStar.isTrue && eachUserStar,
      )
    }
    return (
      <div className="background-color">
        <div className="appointment-card">
          <div className="top-card">
            <form className="form-el" onClick={this.onS}>
              <h1 className="main-heading">Add Appointment</h1>
              <label className="label-text" htmlFor="input1">
                Title
              </label>
              <br />
              <input
                value={userInput}
                type="text"
                className="input-el"
                placeholder="Title"
                onChange={this.onInputTitle}
              />
              <br />
              <label className="label-text" htmlFor="input1">
                Date
              </label>
              <br />
              <input
                type="date"
                value={userDate}
                className="input-el"
                placeholder="dd/mm/yyyy"
                onChange={this.onInputDate}
              />
              <div>
                <button
                  type="submit"
                  className="add-btn"
                  onClick={this.onSubmit}
                >
                  Add
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appointment-img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="appoints-heading">
            <h1 className="main-heading">Appointments</h1>
            <button type="button" className="star-button" onClick={this.onStar}>
              Starred
            </button>
          </div>
          <ul className="user-input-card">
            {userArr.map(eachItem => (
              <AppointmentItem
                userInputVal={eachItem.userInputValue}
                userDateVal={eachItem.userDateValue}
                key={eachItem.id}
                isFalse={this.isFalseFun}
                id={eachItem.id}
                isTrue={eachItem.isTrue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
