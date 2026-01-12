/**
 * EventEmitter - простий pub/sub pattern
 */
export class EventEmitter<T = any> {
    private listeners: Set<(data: T) => void> = new Set();

    /**
     * Підписатись на подію
     */
    subscribe(listener: (data: T) => void): () => void {
        this.listeners.add(listener);

        // Повернути функцію відписки
        return () => this.unsubscribe(listener);
    }

    /**
     * Відписатись від події
     */
    unsubscribe(listener: (data: T) => void): void {
        this.listeners.delete(listener);
    }

    /**
     * Відправити подію
     */
    emit(data: T): void {
        this.listeners.forEach((listener) => {
            try {
                listener(data);
            } catch (error) {
                console.error('EventEmitter error:', error);
            }
        });
    }

    /**
     * Очистити всі підписки
     */
    clear(): void {
        this.listeners.clear();
    }

    /**
     * Кількість слухачів
     */
    get listenerCount(): number {
        return this.listeners.size;
    }
}

/**
 * Утиліта для затримки
 */
export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Експортувати версію пакету
 */
export const VERSION = '1.0.0';