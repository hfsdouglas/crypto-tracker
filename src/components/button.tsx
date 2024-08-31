import clsx from "clsx";
import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode,
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
            className={
                clsx(
                    `h-auto bg-blue-950 p-2 justify-center items-center rounded-md ${className}`,
                )
            }
            {...rest}
        >
            <Text className="text-slate-50">{ children }</Text>
        </TouchableOpacity>
    )
}