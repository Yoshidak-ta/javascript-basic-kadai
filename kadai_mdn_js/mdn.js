const isDay = new Date("Seputember 22, 2023");
const day = isDay.getDate();
const year = isDay.getFullYear();
const month = isDay.getMonth();

const theDay = () => {
  console.log(year + '年' + month + '月'+ day + '日');
}

theDay();
