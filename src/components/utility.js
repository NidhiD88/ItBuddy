export const hasValue = (prop) => {
    if( prop === 'undefined' && prop == null) {
        return false;
    } else {
        return true;
    }
}