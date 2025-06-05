export const WelcomeScreen = ({ onStart }) => {
  return (
    <div>
      <p>
        Вітаємо в грі "Алфавіт". Правила прості: вибирайте з двох літер ту, що
        йде першою в алфавіті.
      </p>
      <button onClick={() => onStart()}>Почати гру</button>
    </div>
  );
};
