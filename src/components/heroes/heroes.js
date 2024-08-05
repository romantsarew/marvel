import { Component } from "react";
import loki from '../../images/loki.jpg'

class Heroes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="heroes__choose">
        <h2 className="visually-hidden">Hero cards</h2>
        <ul className="heroes__list">
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
          <li>
            <img src={loki} width={200} height={200} alt='hero photo' />
            <div>LOKI</div>
          </li>
        </ul>
        <button type="button" className="btn btn--long">LOAD MORE</button>
      </div>
    )
  }
}

export default Heroes