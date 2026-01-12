export type Listener<T> = (data: T) => void;

export interface EventEmitterOptions {
    maxListeners?: number;
}