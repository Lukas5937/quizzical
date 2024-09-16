import CategoryButton from './CategoryButton'
import GeneralIcon from '../../assets/Categories/GeneralIcon.jsx'
import ScienceIcon from '../../assets/Categories/ScienceIcon.jsx'
import SportsIcon from '../../assets/Categories/SportsIcon.jsx'
import GeographyIcon from '../../assets/Categories/GeographyIcon.jsx'
import HistoryIcon from '../../assets/Categories/HistoryIcon.jsx'
import AnimalsIcon from '../../assets/Categories/AnimalsIcon.jsx'

export default function CategoryButtons({
  settingsData,
  handleChange,
  margin,
  formIsInvalid,
}) {
  return (
    <>
      <fieldset className={`input-container ${margin && 'input-margin'}`}>
        <legend>Select a quiz category from the options below</legend>
        <div className="category-buttons-container">
          <CategoryButton
            value="general-knowledge"
            label="General knowledge"
            isChecked={settingsData.category === 'general-knowledge'}
            onChange={handleChange}
          >
            <GeneralIcon
              color={
                settingsData.category === 'general-knowledge'
                  ? '#95bca6'
                  : '#BABDE6'
              }
            />
          </CategoryButton>
          <CategoryButton
            value="science-and-nature"
            label="Science + Nature"
            isChecked={settingsData.category === 'science-and-nature'}
            onChange={handleChange}
          >
            <ScienceIcon
              color={
                settingsData.category === 'science-and-nature'
                  ? '#95bca6'
                  : '#BABDE6'
              }
            />
          </CategoryButton>
          <CategoryButton
            value="sports"
            label="Sports"
            isChecked={settingsData.category === 'sports'}
            onChange={handleChange}
          >
            <SportsIcon
              color={settingsData.category === 'sports' ? '#95bca6' : '#BABDE6'}
            />
          </CategoryButton>
          <CategoryButton
            value="geography"
            label="Geography"
            isChecked={settingsData.category === 'geography'}
            onChange={handleChange}
          >
            <GeographyIcon
              color={
                settingsData.category === 'geography' ? '#95bca6' : '#BABDE6'
              }
            />
          </CategoryButton>
          <CategoryButton
            value="history"
            label="History"
            isChecked={settingsData.category === 'history'}
            onChange={handleChange}
          >
            <HistoryIcon
              color={
                settingsData.category === 'history' ? '#95bca6' : '#BABDE6'
              }
            />
          </CategoryButton>
          <CategoryButton
            value="animals"
            label="Animals"
            isChecked={settingsData.category === 'animals'}
            onChange={handleChange}
          >
            <AnimalsIcon
              color={
                settingsData.category === 'animals' ? '#95bca6' : '#BABDE6'
              }
            />
          </CategoryButton>
        </div>
        {formIsInvalid.category && (
          <p className="invalid-data-text category-validation">
            Please select a category.
          </p>
        )}
      </fieldset>
    </>
  )
}
