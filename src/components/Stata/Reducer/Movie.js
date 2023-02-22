import { movieStata } from "../Stata/Movie";

export function movieReducer(stata, action) {
    switch (action.type) {
        case "changePrimitiveType":
            return {...stata, [action.propertyId]: action.value }
        case "reset":
            return {...movieStata }
        default:
            break;
    }
}