import React from 'react'
import { Transition, animated } from 'react-spring'
import './slider.css'

import CutByBeam from '../components/images/slider/lg-cutbybeam.svg'
import Redgrave from '../components/images/slider/lg-redgrave.png'
import ApplyWorks from '../components/images/slider/lg-applyworks.png'
import Apperley from '../components/images/slider/lg-apperley.jpg'
import Clays from '../components/images/slider/lg-clays.jpg'
import ClaysTshirt from '../components/images/slider/lg-clays-tshirt.jpg'
import ClaysFlyer from '../components/images/slider/lg-clays-flyer.jpg'
import SkinflintFlyer from '../components/images/slider/lg-skinflint-flyer.jpg'
import CutByBeamIcons from '../components/images/slider/lg-cut-by-beam-icons.jpg'
import SkinflintBox from '../components/images/slider/lg-skinflint-box.jpg'

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
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${Redgrave})`,
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
        backgroundImage: `url(${Apperley})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${Clays})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${ClaysTshirt})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${ClaysFlyer})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${SkinflintFlyer})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${CutByBeamIcons})`,
      }}
    />
  ),
  style => (
    <animated.div
      style={{
        ...style,
        backgroundImage: `url(${SkinflintBox})`,
      }}
    />
  ),
]

class HomeSlider extends React.PureComponent {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({ index: state.index === 9 ? 0 : state.index + 1 }))
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
