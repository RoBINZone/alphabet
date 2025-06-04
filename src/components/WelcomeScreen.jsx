export const WelcomeScreen = ({
  onStartGame
}) => {
  return <div>
    <p>Вітаємо в грі "Алфавіт". Правила прості: вибирайте з двох літер ту, що йде першою в алфавіті.</p>
    <button onClick={onStartGame}>Почати гру</button>
  </div>;
}