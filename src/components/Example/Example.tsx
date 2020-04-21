import React, { FunctionComponent } from "react"

type ExampleProps = {
  children: React.ReactElement
}

const Example: FunctionComponent<ExampleProps> = ({ children }) => {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}

export default Example
