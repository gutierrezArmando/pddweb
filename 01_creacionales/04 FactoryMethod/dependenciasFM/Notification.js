// Ambas deben tener el mismo "contrato" (método show).

// Producto 1
export class ToastNotification {
    show(message) {
        return `
            <div class="toast show align-items-center text-white bg-primary border-0 mb-2" role="alert">
                <div class="d-flex">
                    <div class="toast-body">${message}</div>
                </div>
            </div>`;
    }
}

// Producto 2
export class ModalNotification {
    show(message) {
        return `
            <div class="alert alert-warning alert-dismissible fade show shadow" role="alert">
                <strong>Notificación de Sistema:</strong> ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`;
    }
}