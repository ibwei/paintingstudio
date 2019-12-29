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

export const getDay = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    month = month < 10 ? ('0' + month) : month;
    let day = today.getDate();
    day = day < 10 ? ('0' + day) : day;
    return `${year}-${month}-${day}`;
}