
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function replace(str, idx, char) {
    if (idx > str.length - 1) return str;
    return str.substring(0, idx) + char + str.substring(idx+1);
};

export function getUnlockAt(idx) {
    let unlocks = localStorage.getItem('unlocks');
    if (idx > unlocks.length - 1) return null;
    return Array.from(unlocks)[idx];
}