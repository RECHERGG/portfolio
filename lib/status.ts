export const getStatusColor = (status: string) => {
    switch (status) {
        case "online":
            return "bg-green-500"
        case "idle":
            return "bg-yellow-500"
        case "dnd":
            return "bg-red-500"
        default:
            return "bg-gray-500"
    }
}

export const getStatusText = (status: string) => {
    switch (status) {
        case "online":
            return "Online"
        case "idle":
            return "Abwesend"
        case "dnd":
            return "Nicht stören"
        default:
            return "Offline"
    }
}