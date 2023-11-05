const isDay = new Date("November 5, 2023");
const day = isDay.getDate();
const year = isDay.getFullYear();
const month = isDay.getMonth() + 1;

const theDay = () => {
  console.log(year + '年' + month + '月'+ day + '日');
}

theDay();
