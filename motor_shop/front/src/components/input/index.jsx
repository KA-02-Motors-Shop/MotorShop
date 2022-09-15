import { Input } from "./style"

export const InputComponent = ({placeholder, type, label, className}) => {
    return(
        <Input className={className} placeholder={placeholder} type={type} label={label}/>
        )
}
