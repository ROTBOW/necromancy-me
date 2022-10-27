
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function replace(str, idx, char) {
    if (idx > str.length - 1) return str;
    return str.substring(0, idx) + char + str.substring(idx+1);
};

export function getUnlockAt(idx) {
    let unlocks = localStorage.getItem('unlocks');
    if (idx > unlocks.length - 1) throw new Error('there is no Unlock at that index');
    return Array.from(unlocks)[idx];
}

export function setUnlockAt(idx, newVal) {
    let unlocks = localStorage.getItem('unlocks');
    if (idx > unlocks.length - 1) throw new Error('there is no Unlock at that index');
    localStorage.setItem('unlocks', replace(unlocks, idx, newVal))
}