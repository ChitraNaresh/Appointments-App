// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {userInputVal, userDateVal, isFalse, id, isTrue} = props

  const onImgChange = () => isFalse(id)

  const isImage = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="user-card">
      <div className="name-card">
        <h1 className="user-value-text">{userInputVal}</h1>
        <button type="button" onClick={onImgChange} className="user-star">
          <img src={isImage} alt="star" className="star-img" />
        </button>
      </div>
      <p className="user-date">
        Date : <span>{userDateVal}</span>
      </p>
    </li>
  )
}

export default AppointmentItem
