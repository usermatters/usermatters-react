import React from 'react'
import { create, Options } from 'usermatters-js'

export const FeedbackPopup: React.FC<
  {
    children?: (ctx: {
      handleClick: React.MouseEventHandler<HTMLButtonElement>
    }) => React.ReactNode
  } & Options
> = ({ children, ...options }) => {
  const instance = React.useMemo(() => create(), [])

  React.useEffect(() => {
    document.addEventListener('click', instance.handleDocumentClick)

    return () => {
      document.removeEventListener('click', instance.handleDocumentClick)
      instance.destroy()
    }
  }, [])

  if (!children) {
    return React.createElement('usermatters-app', {
      ...options,
      open: true,
      inline: true,
    })
  }

  const handleClick = (e: any) => {
    instance.show(e.target, options)
  }

  return React.createElement(
    React.Fragment,
    {},
    children && children({ handleClick }),
  )
}
