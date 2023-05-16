import "./FormWrapper.scss"
import { ReactNode } from "react"

type FormWrapperProps =  {
  title : string 
  children : ReactNode
  //ReactNode :  a type that represents a React element, an array of React elements, or a string, number, or boolean
}

const FormWrapper = ({title , children} : FormWrapperProps) => {
  return (
    <>
    <h2>{title}</h2>
    <div className="Form">
      {children}
    </div>
    </>
  )
}

export default FormWrapper
