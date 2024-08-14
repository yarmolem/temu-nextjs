import { useAuthStore } from '@/stores/auth.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BoxIcon, LockIcon, TruckIcon } from 'lucide-react'

interface OnboardingAuthFormProps {
  setEmail: (email: string) => void
}

const onboardingSchema = z.object({
  email: z.string().email()
})

type OnboardingValues = z.infer<typeof onboardingSchema>

const OnboardingAuthForm = (props: OnboardingAuthFormProps) => {
  const { setModalView } = useAuthStore((state) => ({
    setModalView: state.setModalView
  }))

  const form = useForm<OnboardingValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      email: 'user@dev.com'
    }
  })

  return (
    <>
      <div className="text-green-600 flex items-center justify-center gap-1 mb-6">
        <LockIcon className="w-4 h-4" />
        <p className="font-medium text-sm">Todos los datos se cifrarán</p>
      </div>
      <div className="grid grid-cols-2 gap-x-3 mb-6 px-3">
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 w-10 h-10 mb-1 rounded-full flex items-center justify-center">
            <TruckIcon className="w-6 h-6" />
          </div>

          <p className="font-semibold text-center text-sm">Envío gratis</p>
          <p className="text-center text-xs">En todos los pedidos</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 w-10 h-10 mb-1 rounded-full flex items-center justify-center">
            <BoxIcon className="w-6 h-6" />
          </div>

          <p className="font-semibold text-center text-sm">
            Devoluciones: 90 días
          </p>
          <p className="text-center text-xs">desde la fecha de compra</p>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => {
            props.setEmail(values.email)

            if (values.email === 'user@dev.com') {
              setModalView('sign-in')
            } else {
              setModalView('sign-up')
            }
          })}
        >
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Usa el correo user@dev.com para ir al login
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-3 space-y-1 flex flex-col w-full">
              <Button type="submit" className="w-full">
                Continuar
              </Button>
              <Button
                type="button"
                variant="link"
                className="w-full text-muted-foreground text-xs"
              >
                ¿Problemas al iniciar sesión?
              </Button>
            </div>

            <div className="w-full flex items-center justify-center h-[1px] bg-border">
              <span className="bg-background px-3 text-muted-foreground">
                O
              </span>
            </div>

            <div className="mt-6 space-y-2 mb-3">
              <Button variant="outline" className="w-full">
                Continuar con Google
              </Button>
              <Button variant="outline" className="w-full">
                Continuar con Facebook
              </Button>
              <Button variant="outline" className="w-full">
                Continuar con Apple
              </Button>
            </div>

            <p className="text-xs text-center font-medium">
              Al continuar, aceptas nuestros{' '}
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

export default OnboardingAuthForm
