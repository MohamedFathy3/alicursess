'use client'
import React, { useState, useEffect } from 'react';

// مثال على الأسئلة التي يمكن استخدامها
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 3,
    question: "What is the color of the sky?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Blue",
  }
];

export default function Exam() {
  // الحالة لإدارة الأسئلة والإجابات
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]); // لحفظ الإجابات في localStorage
  const [timer, setTimer] = useState(600); // 10 دقائق بالثواني
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    // إذا كان هناك بيانات مخزنة في localStorage عند تحميل الصفحة
    const savedAnswers = JSON.parse(localStorage.getItem("answers"));
    const savedTimer = parseInt(localStorage.getItem("timer"), 10);
    if (savedAnswers) setAnswers(savedAnswers);
    if (savedTimer) setTimer(savedTimer);
    
    // ضبط المؤقت
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval); // إيقاف التوقيت عند الوصول إلى الصفر
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // إيقاف المؤقت عند إلغاء التحميل
  }, []);

  // دالة لاختيار الإجابة
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    // تحديث الإجابة في البيانات المخزنة
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  // دالة لتغيير اللون عند الانتقال بين الأسئلة
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setColor(color === 'yellow' ? 'transparent' : 'yellow');
    setCurrentQuestion(currentQuestion + 1);
  };

  // دالة للرجوع للسؤال السابق
  const handlePreviousQuestion = () => {
    setSelectedAnswer(answers[currentQuestion - 1] || null);
    setColor('yellow');
    setCurrentQuestion(currentQuestion - 1);
  };

  // دالة لإعادة تعيين المؤقت
  const resetTimer = () => {
    setTimer(600);
  };

  return (
    <div className="container">
      {/* عرض المؤقت */}
      <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>
        Time Left: {Math.floor(timer / 60)}:{timer % 60}
      </div>

      {/* الأسئلة */}
      <div className="question-section" style={{ backgroundColor: color, padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <div className="question-header" style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Question {currentQuestion + 1}: {questions[currentQuestion]?.question}
        </div>

        {/* الخيارات */}
        <div>
          {questions[currentQuestion]?.options.map((option, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                backgroundColor: selectedAnswer === option ? 'orange' : '',
                cursor: 'pointer',
                borderRadius: '4px',
                margin: '5px 0'
              }}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {/* الأزرار للتنقل */}
        <div style={{ marginTop: '20px' }}>
          {currentQuestion > 0 && (
            <button onClick={handlePreviousQuestion} style={{ marginRight: '10px' }}>
              Previous
            </button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button disabled>
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

