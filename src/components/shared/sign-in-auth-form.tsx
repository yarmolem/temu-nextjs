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
import { InputSecure } from '../ui/input-secure'

interface SignInAuthFormProps {
  defaultEmail?: string
}

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

type FormValues = z.infer<typeof formSchema>

const SignInAuthForm = (props: SignInAuthFormProps) => {
  const { login, setModalView, setOpenModal } = useAuthStore((state) => ({
    login: state.login,
    setModalView: state.setModalView,
    setOpenModal: state.setOpenModal
  }))

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: props.defaultEmail ?? '',
      password: '123456'
    }
  })

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-3"
          onSubmit={form.handleSubmit(() => {
            login()
            setOpenModal(false)
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>* Contraseña</FormLabel>
                  <FormControl>
                    <InputSecure placeholder="Contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Continuar
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setModalView('forgot-password')}
            >
              ¿Olvidaste tu contraseña?
            </Button>
            <Button
              type="button"
              variant="link"
              className="w-full text-muted-foreground text-xs"
            >
              ¿Problemas al iniciar sesión?
            </Button>

            <p className="text-xs text-center font-medium">
              Al registrarte, aceptas nuestros{' '}
              <span className="text-blue-600 underline">Términos de uso</span> y{' '}
              <span className="text-blue-600 underline">
                Política de privacidad.
              </span>
            </p>
          </>
        </form>
      </Form>
    </>
  )
}

export default SignInAuthForm
