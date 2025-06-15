function getStatistic() {
  const statistic = localStorage.getItem("statistic");
  return statistic ? JSON.parse(statistic) : [];
}

function clearStatistics() {
  localStorage.setItem("statistic", JSON.stringify([]));
}

function getDateTime() {
  return Date.now();
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

function setStatistic(datetime, correct, incorrect, averageResponseTime) {
  const statistic = getStatistic();
  statistic.push({ datetime, correct, incorrect, averageResponseTime });
  localStorage.setItem("statistic", JSON.stringify(statistic));
}

export const StatisticsService = {
  getStatistic,
  clearStatistics,
  setStatistic,
  getDateTime,
  formatDate,
};
