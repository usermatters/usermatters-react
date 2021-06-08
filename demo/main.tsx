import './tailwind.css'
import React from 'react'
import { render } from 'react-dom'
import { UserMatters } from '../src'

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
          <UserMatters project="xxx">
            {({ handleClick }) => <button onClick={handleClick}>a</button>}
          </UserMatters>
          <UserMatters project="xxx">
            {({ handleClick }) => (
              <button className="ml-64" onClick={handleClick}>
                b
              </button>
            )}
          </UserMatters>
          <div className=" mt-20">
            <UserMatters project="xxx" />
          </div>
        </div>
      )}
    </div>
  )
}

render(<App />, document.getElementById('app'))
