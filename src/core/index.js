export function toggleLoader() {
    const toggleHTML = document.querySelector('#loader');
    const isHidden = toggleHTML.hasAttribute('hidden');
    if (isHidden) {
        toggleHTML.removeAttribute('hidden');
    } else {
        toggleHTML.setAttribute('hidden', '');
    }
};