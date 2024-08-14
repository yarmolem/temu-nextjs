import { useAuthStore } from '@/stores/auth.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface ForgotPasswordAuthFormProps {
  defaultEmail?: string
}

const formSchema = z.object({
  email: z.string().email()
})

type FormValues = z.infer<typeof formSchema>

const ForgotPasswordAuthForm = (props: ForgotPasswordAuthFormProps) => {
  const { setModalView } = useAuthStore((state) => ({
    setModalView: state.setModalView
  }))

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: props.defaultEmail ?? ''
    }
  })

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-3"
          onSubmit={form.handleSubmit(() => {
            setModalView('onboarding')
          })}
        >
          <>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>* Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </>
        </form>
      </Form>
    </>
  )
}

export default ForgotPasswordAuthForm
