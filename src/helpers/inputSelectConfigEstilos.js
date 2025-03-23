export const estiloPersonalizado = {
    control: (base) => ({
        ...base,
        backgroundColor: "rgba(209, 213, 219, 0.3)",  
        borderRadius: "20px", 
        padding: "0 16px", 
        borderColor: "transparent", 
        boxShadow: "none", 
        "&:hover": {
            borderColor: "transparent", 
        },
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "10px", 
        marginTop: "8px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#0080B9" 
            : isFocused
                ? "#E0F7FA" 
                : "white", 
        color: isSelected ? "white" : "#333", 
        padding: "8px 16px", 
        "&:hover": {
            backgroundColor: "#E0F7FA",
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: "#333", 
    }),
    placeholder: (base) => ({
        ...base,
        color: "#6B7280", 
        opacity: 0.5
    }),
};

