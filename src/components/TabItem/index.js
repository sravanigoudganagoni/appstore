// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isActiveButton = isActive ? 'active-button' : ''

  const onClickActiveButton = () => {
    changeTabId(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        className={`button ${isActiveButton}`}
        type="button"
        onClick={onClickActiveButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
