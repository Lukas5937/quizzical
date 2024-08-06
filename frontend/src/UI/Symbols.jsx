import Symbol from './Symbol'

import HighLightEffect from '../assets/Symbols/HighlightEffect.svg'
import HighlightSparkle from '../assets/Symbols/HighlightSparkle.svg'
import HighlightStars from '../assets/Symbols/HighlightStars.svg'
import SpringLineCurly from '../assets/Symbols/SpringLineCurly.svg'

export default function Symbols({ size }) {
  return (
    <div className="symbols-container">
      <Symbol
        image={HighLightEffect}
        alt="Highlight effect symbol"
        size={size}
      />
      <Symbol
        image={HighlightSparkle}
        alt="Highlight sparkle symbol"
        size={size}
      />
      <Symbol image={HighlightStars} alt="Highlight stars symbol" size={size} />
      <Symbol
        image={SpringLineCurly}
        alt="Spring line curly symbol"
        size={size}
      />
    </div>
  )
}
