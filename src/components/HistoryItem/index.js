import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistoryItem = () => {
    onDeleteItem(id)
  }
  return (
    <div>
      <li className="list-container">
        <div className="time-container">
          <div className="time-width">
            <p className="time">{timeAccessed}</p>
          </div>
          <div className="title-container">
            <img src={logoUrl} alt="domain logo" className="web-site-logo" />
            <p className="title">{title}</p>
          </div>

          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
            onClick={onDeleteHistoryItem}
            testid="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default HistoryItem
