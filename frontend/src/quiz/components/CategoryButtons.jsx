import CategoryButton from './CategoryButton'

export default function CategoryButtons({ settingsData, handleChange }) {
  return (
    <>
      <fieldset>
        <legend>
          Select a category for your quiz questions from the options below.
        </legend>
        <CategoryButton
          value="general-knowledge"
          label="General knowledge"
          isChecked={settingsData.category === 'general-knowledge'}
          onChange={handleChange}
        />
        <CategoryButton
          value="science-and-nature"
          label="Science and Nature"
          isChecked={settingsData.category === 'science-and-nature'}
          onChange={handleChange}
        />
        <CategoryButton
          value="sports"
          label="Sports"
          isChecked={settingsData.category === 'sports'}
          onChange={handleChange}
        />
        <CategoryButton
          value="geography"
          label="Geography"
          isChecked={settingsData.category === 'geography'}
          onChange={handleChange}
        />
        <CategoryButton
          value="history"
          label="History"
          isChecked={settingsData.category === 'history'}
          onChange={handleChange}
        />
        <CategoryButton
          value="animals"
          label="Animals"
          isChecked={settingsData.category === 'animals'}
          onChange={handleChange}
        />
      </fieldset>
    </>
  )
}
