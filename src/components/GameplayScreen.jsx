import { useState, useEffect } from 'react'

export const GameplayScreen = () => {
    const [correctCount, setCorrectCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)
    const letters = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const [selectedLettersIndexes, setSelectedLettersIndexes] = useState([])

    function get2RandomLetters() {
        const randomIndex = Math.floor(Math.random() * letters.length)
        const randomIndex2 = (randomIndex + Math.floor(Math.random() * (letters.length - 1))) % letters.length
        setSelectedLettersIndexes([randomIndex, randomIndex2])
    }

    function checkAnswer(clickedLetterIndex) {
        if (clickedLetterIndex === 0 && selectedLettersIndexes[0] <= selectedLettersIndexes[1]) {
            setCorrectCount(correctCount + 1)
        } else if (clickedLetterIndex === 1 && selectedLettersIndexes[0] >= selectedLettersIndexes[1]) {
            setCorrectCount(correctCount + 1)
        } else {
            setIncorrectCount(incorrectCount + 1)
        }
        get2RandomLetters()
    }

    useEffect(() => {
        get2RandomLetters()
    }, [])

    return (
        <>
            <div className="counter">
                <div>
                    <div className='correct'>Правильно: {correctCount}</div>
                    <div className='incorrect'>Неправильно: {incorrectCount}</div>
                </div>
            </div>
            <div>Яка з цих літер іде першою в алфавіті?</div>
            <div className="container">
                <div className="letter" onClick={() => checkAnswer(0)}>{letters[selectedLettersIndexes[0]]}</div>
                <div className="letter" onClick={() => checkAnswer(1)}>{letters[selectedLettersIndexes[1]]}</div>
            </div>
        </>
    )
}