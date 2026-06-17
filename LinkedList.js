function createNode(key, value, nextNode = null) {
    return {
        key,
        value,
        nextNode,
    };
}

function createLinkedList() {
    let headNode = null;
    let tailNode;

    function append(key, value) {
        let newNode = createNode(key, value);
        if (headNode === null) {
            headNode = newNode;
            tailNode = headNode;
        } else {
            tailNode.nextNode = newNode;
            tailNode = tailNode.nextNode;
        }
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

    const toString = () => {
        if (headNode === null) {
            return "";
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

    return { append, update, serialize, toString };
}

export default createLinkedList;
