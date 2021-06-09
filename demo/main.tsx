import './tailwind.css'
import React from 'react'
import { render } from 'react-dom'
import { FeedbackForm } from '../src'

const App = () => {
  const [show, setShow] = React.useState(true)
  return (
    <div className="mx-auto max-w-3xl">
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && (
        <div
          style={{
            borderTop: '1px solid',
            marginTop: '20px',
            paddingTop: '20px',
          }}
        >
          <FeedbackForm project="xxx">
            {({ handleClick }) => <button onClick={handleClick}>a</button>}
          </FeedbackForm>
          <FeedbackForm project="xxx">
            {({ handleClick }) => (
              <button className="ml-64" onClick={handleClick}>
                b
              </button>
            )}
          </FeedbackForm>
          <div className=" mt-20">
            <FeedbackForm project="xxx" />
          </div>
        </div>
      )}
    </div>
  )
}

render(<App />, document.getElementById('app'))
