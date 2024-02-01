import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedAmount} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    updatedAmount(value)
  }

  return (
    <li className="denomination-items">
      <button type="button" className="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
