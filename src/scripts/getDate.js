export default function getDate(date) {
    const months = [
        { name: 'Января', days: 31 },
        { name: 'Февраля', days: 28 },
        { name: 'Марта', days: 31 },
        { name: 'Апреля', days: 30 },
        { name: 'Мая', days: 31 },
        { name: 'Июня', days: 30 },
        { name: 'Июля', days: 31 },
        { name: 'Августа', days: 31 },
        { name: 'Сентября', days: 30 },
        { name: 'Октября', days: 31 },
        { name: 'Ноября', days: 30 },
        { name: 'Декабря', days: 31 },
    ];
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const time = new Date(date);
    const year = time.getFullYear();
    let day = time.getDate();
    let month = time.getMonth();
    let hour = time.getHours();
    let minute = time.getMinutes();
    const dayWeek = time.getDay();

    if (day > months[month].days) {
        day = 1;
        month += 1;
    }

    let fullMonth = month + 1;
    day < 10 ? (day = '0' + day) : day;
    hour < 10 ? (hour = '0' + hour) : hour;
    minute < 10 ? (minute = '0' + minute) : minute;
    fullMonth < 10 ? (fullMonth = '0' + fullMonth) : fullMonth;

    const arr = {
        full_date: day + ' ' + months[month].name + ' ' + year,
        short_date: days[dayWeek] + ' в ' + hour + ':' + minute,
        date_with_time: day + '.' + fullMonth + '.' + year + ' в ' + hour + ':' + minute,
    };
    return arr;
}
