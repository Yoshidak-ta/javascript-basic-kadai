const isDay = new Date();
const day = isDay.getDate();
const year = isDay.getFullYear();
const month = isDay.getMonth() + 1;

const theDay = () => {
  console.log(year + '年' + month + '月'+ day + '日');
}

theDay();
