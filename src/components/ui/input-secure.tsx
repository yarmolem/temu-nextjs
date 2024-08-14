import React, { type ElementRef, type ComponentPropsWithRef } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { Input } from './input'

const InputSecure = React.forwardRef<
  ElementRef<typeof Input>,
  ComponentPropsWithRef<typeof Input>
>((props, ref) => {
  const [show, setShow] = React.useState(false)

  return (
    <Input
      {...props}
      ref={ref}
      type={show ? 'text' : 'password'}
      rightIcon={
        <button type="button" onClick={() => setShow((x) => !x)}>
          {show ? (
            <EyeOff className="text-muted-foreground" />
          ) : (
            <Eye className="text-muted-foreground" />
          )}
          <span className="sr-only">
            {show ? 'Hide password' : 'Show password'}
          </span>
        </button>
      }
    />
  )
})
InputSecure.displayName = 'InputSecure'

export { InputSecure }
