'use client'

import React, { ReactNode } from 'react'

import {
  Credenza,
  CredenzaBody,
  CredenzaHeader,
  CredenzaContent,
  CredenzaTitle,
  CredenzaDescription
} from '@/components/ui/credenza'
import { AuthModalView, useAuthStore } from '@/stores/auth.store'
import { Logo } from '../ui/logo'
import OnboardingAuthForm from './onboarding-auth-form'
import SignInAuthForm from './sign-in-auth-form'
import { cn } from '@/lib/utils'
import SignUpAuthForm from './sign-up-auth-form'
import { Button } from '../ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import ForgotPasswordAuthForm from './forgot-password-auth-form'

const AuthModal = () => {
  const [email, setEmail] = React.useState<string>('')

  const { view, isOpenModal, setModalView, setOpenModal } = useAuthStore(
    (state) => ({
      view: state.view,
      isOpenModal: state.isOpenModal,
      setOpenModal: state.setOpenModal,
      setModalView: state.setModalView
    })
  )

  const record: Record<AuthModalView, ReactNode> = {
    onboarding: <OnboardingAuthForm setEmail={setEmail} />,
    'sign-in': <SignInAuthForm defaultEmail={email} />,
    'sign-up': <SignUpAuthForm defaultEmail={email} />,
    'forgot-password': <ForgotPasswordAuthForm defaultEmail={email} />
  }

  return (
    <>
      <Credenza open={isOpenModal} onOpenChange={setOpenModal}>
        <CredenzaContent className="pb-4 md:pb-8 md:max-w-md h-[90dvh]">
          <div className="grid grid-cols-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setModalView('onboarding')}
              className={cn(
                view === 'onboarding' && 'opacity-0 pointer-events-none'
              )}
            >
              <ChevronLeftIcon />
            </Button>
            <Logo className="mb-3 mx-auto mt-3" />
          </div>

          <CredenzaHeader className={cn(view === 'onboarding' && 'hidden')}>
            <CredenzaTitle className="text-left">
              {view === 'onboarding'
                ? 'Bienvenido'
                : view === 'sign-in'
                ? 'Iniciar sesión'
                : view === 'sign-up'
                ? 'Crea tu cuenta'
                : 'Olvide mi contraseña'}
            </CredenzaTitle>
            <CredenzaDescription className="text-left">
              {view === 'onboarding'
                ? 'Bienvenido'
                : view === 'sign-in'
                ? 'Inicia sesión con tu cuenta'
                : view === 'sign-up'
                ? 'El registro es fácil, solo tienes que ingresar la contraseña.'
                : 'Confirma tu dirección de email a continuación y te enviaremos un código de 6 dígitos para el restablecimiento de tu contraseña.'}
            </CredenzaDescription>
          </CredenzaHeader>

          {
            <CredenzaBody className="space-y-4 ">
              {record[view ?? 'onboarding']}
            </CredenzaBody>
          }
        </CredenzaContent>
      </Credenza>
    </>
  )
}

export default AuthModal
