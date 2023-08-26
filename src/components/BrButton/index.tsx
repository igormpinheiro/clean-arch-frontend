// import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
//
// export interface ButtonProps
//   extends DetailedHTMLProps<
//     ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   children: React.ReactNode
//   variant?:
//     | 'primary'
//     | 'secondary'
//     | 'tertiary'
//     | 'danger'
//     | 'warning'
//     | 'success'
// }
//
// export default function BrButton({
//   children,
//   variant,
//   className,
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       className={`br-button ${variant} ${className}`}
//       {...props}
//       type="button"
//     >
//       {children}
//     </button>
//   )
// }
