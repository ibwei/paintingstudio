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

export const getDateTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    month = month < 10 ? ('0' + month) : month;
    let day = today.getDate();
    day = day < 10 ? ('0' + day) : day;
    let hour = today.getHours();
    hour = hour < 10 ? ('0' + hour) : hour;
    let min = today.getMinutes();
    min = min < 10 ? ('0' + min) : min;
    let second = today.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return `${year}-${month}-${day} ${hour}:${min}:${second}`;
}