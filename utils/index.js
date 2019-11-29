/**
 * @method 判断是否是处于移动端
 * @param null
 * @return [true|false] 
 */
export const isPhone = () => {
    const width = document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 781) {
        return true;
    }
    return false;
}