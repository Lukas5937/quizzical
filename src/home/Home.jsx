import Button from '../shared/components/Button'
export default function Home() {
  return (
    <header>
      <div className="home-content">
        <h1>Test your knowledge with QuizNerds!</h1>
        <p className="home-subtitle">
          Challenge yourself and compete with others in various categories.
        </p>
        <Button type="accent">New Quiz</Button>
        <Button>Watch High Scores</Button>
      </div>
      <div className="home-images"></div>
    </header>
  )
}
