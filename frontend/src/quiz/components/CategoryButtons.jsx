import CategoryButton from './CategoryButton'
import General from '../../assets/Categories/General.svg'
import Science from '../../assets/Categories/Science.svg'
import Sports from '../../assets/Categories/Sports.svg'
import Geography from '../../assets/Categories/Geography.svg'
import History from '../../assets/Categories/History.svg'
import Animals from '../../assets/Categories/Animals.svg'

export default function CategoryButtons({ settingsData, handleChange }) {
  return (
    <>
      <fieldset className="input-container">
        <legend>Select a quiz category from the options below</legend>
        <div className="radio-buttons-container">
          <CategoryButton
            value="general-knowledge"
            label="General knowledge"
            isChecked={settingsData.category === 'general-knowledge'}
            onChange={handleChange}
            img={General}
          />
          <CategoryButton
            value="science-and-nature"
            label="Science + Nature"
            isChecked={settingsData.category === 'science-and-nature'}
            onChange={handleChange}
            img={Science}
          />
          <CategoryButton
            value="sports"
            label="Sports"
            isChecked={settingsData.category === 'sports'}
            onChange={handleChange}
            img={Sports}
          />
          <CategoryButton
            value="geography"
            label="Geography"
            isChecked={settingsData.category === 'geography'}
            onChange={handleChange}
            img={Geography}
          />
          <CategoryButton
            value="history"
            label="History"
            isChecked={settingsData.category === 'history'}
            onChange={handleChange}
            img={History}
          />
          <CategoryButton
            value="animals"
            label="Animals"
            isChecked={settingsData.category === 'animals'}
            onChange={handleChange}
            img={Animals}
          />
        </div>
      </fieldset>
    </>
  )
}
