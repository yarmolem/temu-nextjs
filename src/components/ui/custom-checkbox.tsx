import { cn } from '@/lib/utils'
import { CheckIcon, MinusIcon } from 'lucide-react'
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef
} from 'react'

const CustomCheckbox = forwardRef<
  ElementRef<'input'>,
  ComponentPropsWithoutRef<'input'> & { size?: number; indeterminate?: boolean }
>(({ size = 24, indeterminate, className, ...props }, ref) => (
  <label
    style={{ width: size, height: size }}
    className={cn('rounded-full grid place-items-center relative', className)}
  >
    <input ref={ref} type="checkbox" className="peer" hidden {...props} />
    <div className="w-full h-full rounded-full bg-muted border peer-checked:border-primary border-muted-foreground peer-checked:bg-primary transition-colors absolute inset-0 z-0" />

    {!indeterminate && (
      <CheckIcon
        size={size - 10}
        className={cn('stroke-transparent peer-checked:stroke-white z-10')}
      />
    )}

    {indeterminate && (
      <MinusIcon
        size={size - 10}
        className={cn('stroke-transparent peer-checked:stroke-white z-10')}
      />
    )}
  </label>
))

CustomCheckbox.displayName = 'CustomCheckbox'

export { CustomCheckbox }
