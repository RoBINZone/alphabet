import { getStatistic } from "../services/statistic-service";

export const StatisticsScreen = ({
    onScreenChange,
}) => {
    const statistic = getStatistic();

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString() ;
    }

    return (<div className="statistics-screen">
        <div> дата / правильно / неправильно / середній час відповіді</div>
        {
            statistic && statistic.reverse().map((item, index) => (
                <div className="statistics-list-item" key={index}>
                    <div className="statistics-list-item-cell datetime">
                        {formatDate(item.datetime)}
                    </div>
                    <div className="statistics-list-item-cell correct">
                        {item.correct}
                    </div>
                    <div className="statistics-list-item-cell incorrect">
                        {item.incorrect}
                    </div>
                    <div className="statistics-list-item-cell average-response-time">
                        {item.averageResponseTime} c.
                    </div>
                </div>
            ))
        }
        <button onClick={() => onScreenChange("WELCOME")}>На початок</button>
    </div>);
}