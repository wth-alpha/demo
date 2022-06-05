export const isEmpty = val => {
  return typeof val == "undefined" || val == null || val == "" || val.toString().replace(/\s/g, "").length == 0;
}

export const isNotEmpty = val => {
  return !isEmpty(val);
}

// 数字格式化为至少两位
export const formatNumber = num => {
  num = num.toString();
  return num[1] ? num : '0' + num;
}

// 时间格式化，传入isDetail表示需要日期和时间
export const formatTime = (date, isDetail) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let dateStr = [year, month, day].map(formatNumber).join('-');
  let timeStr = [hour, minute, second].map(formatNumber).join(':');
  if (isDetail) {
    return dateStr + ' ' + timeStr;
  } else {
    return dateStr;
  }
}

// 生成随机数 Math.round()四舍五入
export const getRandomNum = (min, max) => {
  let range = max - min;
  let rand = Math.random();
  return (min + Math.round(range * rand));
}