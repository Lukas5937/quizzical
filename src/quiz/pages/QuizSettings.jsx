import Input from '../components/Input'
import CategoryButton from '../../shared/components/CategoryButton'
import Button from '../../shared/components/Button'

export default function QuizSettings() {
  return (
    <>
      <h2>Quiz Settings</h2>
      <form action="">
        <Input
          name="user-name"
          label="Please provide a username to personalize your quiz experience."
        />
        <p></p>
        <fieldset>
          <legend>
            Select a category for your quiz questions from the options below.
          </legend>
          <CategoryButton name="general-knowledge" label="General knowledge" />
          <CategoryButton
            name="science-and-nature"
            label="Science and Nature"
          />
          <CategoryButton name="sports" label="Sports" />
          <CategoryButton name="geography" label="Geography" />
          <CategoryButton name="history" label="History" />
          <CategoryButton name="politics" label="Politics" />
          <CategoryButton name="arts" label="Arts" />
          <CategoryButton name="animals" label="Animals" />
        </fieldset>
        <fieldset>
          <legend>Choose the difficulty level for your quiz questions.</legend>
          <CategoryButton name="general-knowledge" label="General knowledge" />
          <CategoryButton
            name="science-and-nature"
            label="Science and Nature"
          />
          <CategoryButton name="easy" label="Easy" />
          <CategoryButton name="medium" label="Medium" />
          <CategoryButton name="hard" label="Hard" />
        </fieldset>
        <Button className="start-quiz-button">Start Quiz</Button>
      </form>
    </>
  )
}
