import { ToastNotification, ModalNotification } from './Notification.js';

class NotificationCreator {
    // Este es el "Factory Method"
    createNotification(type) {
        if (type === 'toast') {
            return new ToastNotification();
        } else if (type === 'modal') {
            return new ModalNotification();
        }
        throw new Error("Tipo de notificación no soportado");
    }
}

export default new NotificationCreator();