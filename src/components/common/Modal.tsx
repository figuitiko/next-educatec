'use client'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const Modal = ({
  children,
  btnClassName,
  btnText
}: {
  btnClassName?: string
  btnText?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <Dialog>
      <DialogTrigger className={btnClassName}>{btnText}</DialogTrigger>
      <DialogContent className="p-0 max-w-[1200px]">{children}</DialogContent>
    </Dialog>
  )
}

export default Modal
