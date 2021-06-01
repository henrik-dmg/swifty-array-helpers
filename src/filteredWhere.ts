import './blank'

declare global {
    interface Array<T> {
        /**
         * Returns a new array only containing the items that match the predicate
         * @param predicate the predicate used for matching elements
         */
        filteredWhere(predicate: (element: T) => boolean): Array<T>
    }
}

if (Array.prototype.filteredWhere === undefined) {
    Array.prototype.filteredWhere = function <T>(
        this: T[],
        predicate: (element: T) => boolean
    ) {
        let filteredArray: Array<T> = []
        for (let item of this) {
            if (predicate(item)) {
                filteredArray.push(item)
            }
        }
        return filteredArray
    }
}
