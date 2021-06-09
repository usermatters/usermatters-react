import { Fragment, createElement, MouseEventHandler, useEffect } from 'react'
import { create, Options } from 'usermatters-js'

export const FeedbackForm: React.FC<
  {
    children?: (ctx: {
      handleClick: MouseEventHandler<HTMLButtonElement>
    }) => React.ReactNode
  } & Options
> = ({ children, ...options }) => {
  const instance = create()

  useEffect(() => {
    return () => instance && instance.destroy()
  }, [])

  if (!children) {
    return createElement('usermatters-app', {
      ...options,
      open: true,
    })
  }

  const handleClick = (e: any) => {
    instance.show(e.target, options)
  }

  return createElement(Fragment, {}, children && children({ handleClick }))
}
