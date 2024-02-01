import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: '2000'}

  updatedAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="cash-card">
          <div className="name-container">
            <div className="alpha-container">
              <p className="name-alpha">S</p>
            </div>
            <div className="user-name-container">
              <p className="name">Sarah Williams</p>
            </div>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-count">
              <p className="amount">
                {amount} <br />
                <span className="rupees">In Rupees</span>
              </p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="rs-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updatedAmount={this.updatedAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
