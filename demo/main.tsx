import './tailwind.css'
import React from 'react'
import { render } from 'react-dom'
import { FeedbackPopup } from '../src'

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
          <FeedbackPopup project="xxx">
            {({ handleClick }) => <button onClick={handleClick}>a</button>}
          </FeedbackPopup>
          <FeedbackPopup project="xxx">
            {({ handleClick }) => (
              <button className="ml-64" onClick={handleClick}>
                b
              </button>
            )}
          </FeedbackPopup>
          <div className=" mt-20">
            <FeedbackPopup project="xxx" />
          </div>
        </div>
      )}
    </div>
  )
}

render(<App />, document.getElementById('app'))
