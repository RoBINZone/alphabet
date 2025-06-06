export function getStatistic() {
  const statistic = localStorage.getItem("statistic");
  return statistic ? JSON.parse(statistic) : [];
}

export function clearStatistics() {
  localStorage.setItem("statistic", JSON.stringify([]));
}

export function getDateTime() {
  return Date.now();
}

export function setStatistic(
  datetime,
  correct,
  incorrect,
  averageResponseTime,
) {
  const statistic = getStatistic();
  statistic.push({ datetime, correct, incorrect, averageResponseTime });
  localStorage.setItem("statistic", JSON.stringify(statistic));
}
