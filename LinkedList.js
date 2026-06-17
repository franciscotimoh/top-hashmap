function createNode(key, value, nextNode = null) {
    return {
        key,
        value,
        nextNode,
    };
}

function createLinkedList() {
    let headNode = null;
    let listSize = 0;

    function append(key, value) {
        let newNode = createNode(key, value);
        if (headNode === null) {
            headNode = newNode;
        } else {
            let temp = headNode;
            while (temp.nextNode) {
                temp = temp.nextNode;
            }

            temp.nextNode = newNode;
        }

        listSize++;
    }

    function update(key, value) {
        let temp = headNode;
        while (temp) {
            if (temp.key === key) {
                temp.value = value;
                return true;
            }

            temp = temp.nextNode;
        }

        return false;
    }

    function serialize() {
        const result = [];
        let temp = headNode;
        while (temp) {
            result.push([temp.key, temp.value]);
            temp = temp.nextNode;
        }

        return result;
    }

    function remove(index) {
        if (index == 0) {
            headNode = null;
            return;
        }

        let temp = headNode;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.nextNode;
        }

        temp.nextNode = temp.nextNode.nextNode;
    }

    const toString = () => {
        if (headNode === null) {
            return "HEAD IS NULL";
        }

        const result = [];
        let temp = headNode;
        while (temp.nextNode) {
            result.push(`( ${temp.key}: ${temp.value} )`);
            temp = temp.nextNode;
        }

        result.push(`( ${temp.key}: ${temp.value} )`);
        result.push("null");
        return result.join(" -> ");
    };

    return { append, update, serialize, remove, toString };
}

export default createLinkedList;
