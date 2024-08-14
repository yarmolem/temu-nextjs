import { useAuthStore } from '@/stores/auth.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
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
import { cn, evaluatePasswordStrength } from '@/lib/utils'
import { Progress } from '../ui/progress'

interface SignUpAuthFormProps {
  defaultEmail?: string
}

const formSchema = z.object({
  email: z.string().email('El correo no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
})

type FormValues = z.infer<typeof formSchema>

const SignUpAuthForm = (props: SignUpAuthFormProps) => {
  const { login, setOpenModal } = useAuthStore((state) => ({
    login: state.login,
    setOpenModal: state.setOpenModal
  }))

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: props.defaultEmail ?? '',
      password: ''
    }
  })

  const password = useWatch({ control: form.control, name: 'password' })
  const score = evaluatePasswordStrength(password)
  const passwordScore = (score.value * 100) / 5

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
                    <Input placeholder="Contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Progress
              value={passwordScore}
              className="h-1"
              indicatorClassName={cn({
                'bg-red-500': passwordScore < 20,
                'bg-yellow-500': passwordScore >= 20 && passwordScore < 40,
                'bg-green-500': passwordScore >= 40
              })}
            />
            <p className="text-xs font-medium">
              Calidad de contraseña:{' '}
              {password.trim().length === 0 ? '-' : score.label}
            </p>

            <p className="text-xs text-muted-foreground">
              No utilices una contraseña de otro sitio ni algo demasiado obvio
              como el nombre de tu mascota.
            </p>

            <Button type="submit" className="w-full">
              Regístrate
            </Button>
            <p className="text-xs text-center font-medium">
              Al hacer click en Regístrate, aceptas nuestros{' '}
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

export default SignUpAuthForm
