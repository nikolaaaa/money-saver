export function onFocus(e) {
        e.target.classList.add('active');
}

export function onBlur(e) {
    if (e.target.value === '') {
        e.target.classList.remove('active');
    }
}