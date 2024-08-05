import { Component } from 'react';
import './intro'
import thor from '../../images/intro-thor.jpg';

class Intro extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='intro'>
        <div className='intro__random'>
          <img src={thor} width='180' height='180' alt='hero' data-hero-image/>
          <div className='intro__descr'>
            <h2 data-hero-name>Thor</h2>
            <p data-hero-text>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
            <div className='intro__buttons'>
              <a href='#' className='btn btn-red'>Homepage</a>
              <a href='#' className='btn btn--grey'>Wiki</a>
            </div>
          </div>
        </div>
        <div className='intro__static'>
          <p>Random character for today!<br />
            Do you want to get to know him better?</p>
          <p>Or choose another one</p>
          <a href='#' className='btn btn-red'>Try it</a>
        </div>
      </section>
    )
  }
}

export default Intro