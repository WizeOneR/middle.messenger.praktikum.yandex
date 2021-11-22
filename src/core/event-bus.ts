export class EventBus {
    protected readonly listeners: Record<string, Array<(...args: any[]) => void>> = {};

    constructor() {
        this.listeners = {};
    }

    on(eventName: string, callback: (...args: any[]) => void) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callback);
    }

    emit(eventName: string, ...args: any) {
        this.checkEvent(eventName);
        this.listeners[eventName].forEach(listener => listener(...args));
    }

    detach(eventName: string, callback: () => void) {
        this.checkEvent(eventName);
        this.listeners[eventName] = this.listeners[eventName].filter(
            listener => listener !== callback,
        );
    }

    protected checkEvent(eventName: string) {
        if (!this.listeners[eventName]) {
            throw new Error(`Event not found: ${eventName}`);
        }
    }
}
