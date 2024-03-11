
// Save data to localStorage
function saveToLocalStorage(key, data) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
}

// Fetch data from localStorage
function loadFromLocalStorage(key) {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error("Error loading from localStorage:", error);
        return null;
    }
}

// Remove data from localStorage
function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage:", error);
    }
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage
}