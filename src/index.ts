import React from 'react'
import { create, Options } from 'usermatters-js'

export const FeedbackForm: React.FC<
  {
    children?: (ctx: {
      handleClick: React.MouseEventHandler<HTMLButtonElement>
    }) => React.ReactNode
  } & Options
> = ({ children, ...options }) => {
  const instance = React.useMemo(() => create(), [])

  React.useEffect(() => {
    return () => instance && instance.destroy()
  }, [])

  if (!children) {
    return React.createElement('usermatters-app', {
      ...options,
      open: true,
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
