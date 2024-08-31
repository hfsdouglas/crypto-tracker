import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function AddButton({ ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            className="h-16 w-16 bg-blue-950 rounded-full justify-center items-center absolute bottom-8 right-8"
            {...rest}
        >
            <MaterialIcons name="add" size={26} color={"#FFFFFF"}/>
        </TouchableOpacity> 
    )
}