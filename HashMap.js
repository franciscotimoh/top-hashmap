import createLinkedList from "./LinkedList.js";

function createHashMap() {
    let loadFactor = 0.75;
    let capacity = 16;
    let entries = 0;
    let buckets = [];

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }

        return hashCode;
    }

    function rehash() {
        let newBuckets = [];
        capacity = capacity * 2;
        for (let node of buckets) {
            if (node) {
                const serialized = node.serialize();
                for (let [key, value] of serialized) {
                    const index = hash(key);
                    if (index < 0 || index >= capacity) {
                        throw new Error("Trying to access index out of bounds");
                    }

                    if (newBuckets[index] === undefined) {
                        newBuckets[index] = createLinkedList();
                    }

                    newBuckets[index].append(key, value);
                }
            }
        }

        buckets = newBuckets;
    }

    function set(key, value) {
        const index = hash(key);
        if (index < 0 || index >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        if (buckets[index] === undefined) {
            buckets[index] = createLinkedList();
        }

        if (!buckets[index].update(key, value)) {
            buckets[index].append(key, value);
            entries++;
        }

        if (entries / capacity >= loadFactor) {
            rehash();
        }
    }

    function get(key) {
        const index = hash(key);
        if (index < 0 || index >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        if (buckets[index] === undefined) {
            return null;
        }

        const serialized = buckets[index].serialize();
        for (let [nodeKey, nodeValue] of serialized) {
            if (key === nodeKey) {
                return nodeValue;
            }
        }

        return null;
    }

    function has(key) {
        const index = hash(key);
        if (index < 0 || index >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        if (buckets[index] === undefined) {
            return false;
        }

        const serialized = buckets[index].serialize();
        for (let [nodeKey, nodeValue] of serialized) {
            if (key === nodeKey) {
                return true;
            }
        }

        return false;
    }

    function toString() {
        for (let bucket of buckets) {
            if (bucket) {
                console.log(bucket.toString());
            } else {
                console.log("undefined");
            }
        }
        console.log(`Entries: ${entries}`);
        console.log(`Capacity: ${capacity}`);
    }

    return { set, get, has, toString };
}

export default createHashMap;
