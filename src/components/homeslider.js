import React from 'react'
import { Transition, animated } from 'react-spring'
import './slider.css'

import CutByBeam from '../components/images/slider/lg-cutbybeam.svg'
import ApplyWorks from '../components/images/slider/lg-applyworks03.png'

const pages = [
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${CutByBeam})`,
        backgroundSize: '880, 548',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${ApplyWorks})`,
        backgroundSize: '880, 548',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  ),
]

class HomeSlider extends React.PureComponent {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({ index: state.index === 1 ? 0 : state.index + 1 }))
  render() {
    return (
      <div className="main" onClick={this.toggle}>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {pages[this.state.index]}
        </Transition>
      </div>
    )
  }
}

export default HomeSlider
