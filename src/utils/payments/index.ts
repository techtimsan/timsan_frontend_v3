import { PaystackProps } from "react-paystack/dist/types"
import { PAYSTACK_PUBLIC_KEY } from "../constants"

const convertToKobo = (amount: number) => {
  return amount * 100
}

export const handlePaystackPayment = (paymentData: {
  email: string
  amount: number
  reference?: string
}) => {
  const config: PaystackProps = {
    ...paymentData,
    amount: convertToKobo(paymentData.amount),
    publicKey: PAYSTACK_PUBLIC_KEY,
  }

  return config
}