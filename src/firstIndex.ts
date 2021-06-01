import './blank'

declare global {
    interface Array<T> {
        /**
         * Iterates over the array and finds the index of the first element that matches the predicate
         * @param predicate the predicate used for matching elements
         */
        firstIndex(predicate: (element: T) => boolean): number | null
    }
}

if (Array.prototype.firstIndex === undefined) {
    Array.prototype.firstIndex = function <T>(
        this: T[],
        predicate: (element: T) => boolean
    ) {
        if (this === undefined || this.length == 0) {
            return null
        }
        for (let i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                return i
            }
        }
        return null
    }
}
