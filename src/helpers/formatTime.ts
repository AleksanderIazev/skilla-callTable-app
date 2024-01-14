export const formatTime = (time: number | string): string => {
    let result = '';
    if (typeof time === 'number') {
        let s = (time % 60).toString();
        let m = Math.floor((time / 60) % 60).toString();
        result = `${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
    } else {
        let date = time.split(' ')[1].split(':');
        date.pop();
        result = date.join(':');
    }

    return result;
};
