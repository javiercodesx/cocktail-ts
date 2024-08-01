import { StateCreator } from "zustand";

type Notification = {
    text: string,
    error: boolean,
    show: boolean
}

export type NotificationStoreType = {
    notification: Notification
}

export const notificationStore : StateCreator<NotificationStoreType> = () => ({
    notification: {
        text: '',
        error: false,
        show: false
    }
})
