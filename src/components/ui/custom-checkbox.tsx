import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef
} from 'react'

const CustomCheckbox = forwardRef<
  ElementRef<'input'>,
  ComponentPropsWithoutRef<'input'> & { size?: number }
>(({ size = 24, className, ...props }, ref) => (
  <label
    style={{ width: size, height: size }}
    className={cn('rounded-full grid place-items-center relative', className)}
  >
    <input ref={ref} type="checkbox" className="peer" hidden {...props} />
    <div className="w-full h-full rounded-full bg-transparent border peer-checked:border-primary border-muted-foreground peer-checked:bg-primary transition-colors absolute inset-0 z-0" />

    <CheckIcon
      size={size - 10}
      className={cn('stroke-transparent peer-checked:stroke-white z-10')}
    />
  </label>
))

CustomCheckbox.displayName = 'CustomCheckbox'

export { CustomCheckbox }
