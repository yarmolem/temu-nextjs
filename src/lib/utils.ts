import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import currencyJs from 'currency.js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function evaluatePasswordStrength(password: string) {
  if (!password)
    return {
      value: 0,
      label: 'Débil'
    }

  let value = 0
  // Check password length
  if (password.length > 8) value += 1
  // Contains lowercase
  if (/[a-z]/.test(password)) value += 1
  // Contains uppercase
  if (/[A-Z]/.test(password)) value += 1
  // Contains numbers
  if (/\d/.test(password)) value += 1
  // Contains special characters
  if (/[^A-Za-z0-9]/.test(password)) value += 1

  return {
    value,
    label: value < 3 ? 'Débil' : value < 4 ? 'Regular' : 'Fuerte'
  }
}

export function currencyFormatter(value: number) {
  const options: currencyJs.Options = {
    symbol: 'S/ '
  }

  return currencyJs(value, options).format()
}

export function scrollToElementWithOffset(id: string, offset: number = 0) {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({
      behavior: 'smooth',
      top: offsetPosition
    })
  }
}
