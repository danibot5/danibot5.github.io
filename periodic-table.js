// ============================================
// ИНТЕРАКТИВНА ПЕРИОДИЧНА ТАБЛИЦА - JS SKELETON
// ============================================
// 
// Този файл съдържа основната структура.
// Вашата задача е да попълните липсващите части
// според инструкциите за всяка седмица.

console.log("🧪 Периодичната таблица се зарежда...");

// ============================================
// СЕДМИЦА 5: TODO - МАСИВ С ЕЛЕМЕНТИ
// ============================================

/*
Инструкции:
Създайте масив const elements = [] с поне 25 елемента.
Всеки елемент трябва да бъде обект със следните свойства:

{
    number: 1,                  // Атомен номер
    symbol: 'H',                // Символ
    name: 'Водород',            // Име
    mass: 1.008,                // Атомна маса
    category: 'nonmetal',       // Категория
    period: 1,                  // Период
    group: 1,                   // Група
    row: 1,                     // Ред в таблицата
    col: 1,                     // Колона в таблицата
    description: 'Текст...'     // Описание
}

Категории: 'nonmetal', 'transitionmetal', 'post-transitionmetal', 'metalloid', 'noble-gas', 'alkali', 'alkaline', 'actinide', 'lanthanide'.

Примери за първите 3 елемента:
- H (Водород): number: 1, row: 1, col: 1, category: 'nonmetal'
- He (Хелий): number: 2, row: 1, col: 18, category: 'noble-gas'
- Li (Литий): number: 3, row: 2, col: 1, category: 'alkali'
*/

// TODO: Създайте масив elements с поне 25 елемента тук
const elements = [
   {
      number: 1,
      symbol: 'H',
      name: 'Водород',
      mass: '1.008',
      category: 'nonmetal',
      period: 1,
      group: 1,
      description: 'Най-лекият и най-често срещан елемент във Вселената.',
      position: { row: 1, col: 1 }
   },
   {
      number: 2,
      symbol: 'He',
      name: 'Хелий',
      mass: '4.003',
      category: 'noble-gas',
      period: 1,
      group: 18,
      description: 'Благороден газ, втори по разпространение елемент.',
      position: { row: 1, col: 18 }
   },
   {
      number: 3,
      symbol: 'Li',
      name: 'Литий',
      mass: '6.94',
      category: 'alkali metal',
      period: 2,
      group: 1,
      description: 'Мек, сребрист метал, използван в батерии и сплави. Реагира бурно с вода.',
      position: { row: 2, col: 1 }
   },
























];

console.log(`✅ Зареде${elements.length} елемента`);

// ============================================
// СЕДМИЦА 5: TODO - ГЛОБАЛНИ ПРОМЕНЛИВИ
// ============================================

/*
Инструкции:
Създайте следните променливи с let:

1. currentFilter = 'all'        // Текущ филтър
2. searchTerm = ''               // Текст за търсене
3. quizActive = false            // Дали викторината е активна
4. currentQuizQuestion = 0       // Номер на текущия въпрос
5. quizScore = 0                 // Точки във викторината
6. quizElements = []             // Масив с елементи за викторината
*/

// TODO: Създайте глобалните променливи тук







console.log("✅ Глобалните променливи са създадени");

// ============================================
// СЕДМИЦА 5: TODO - DOM ЕЛЕМЕНТИ
// ============================================

/*
Инструкции:
Свържете HTML елементите използвайки document.getElementById():

const periodicTableEl = document.getElementById('periodicTable');
const filterTypeEl = document.getElementById('filterType');
const searchInputEl = document.getElementById('searchInput');
const visibleCountEl = document.getElementById('visibleCount');
const elementDetailsEl = document.getElementById('elementDetails');
const closeDetailsBtn = document.getElementById('closeDetails');
const startQuizBtn = document.getElementById('startQuiz');
const quizGameEl = document.getElementById('quizGame');

За детайлите:
const detailName = document.getElementById('detailName');
const detailNumber = document.getElementById('detailNumber');
const detailSymbol = document.getElementById('detailSymbol');
const detailMass = document.getElementById('detailMass');
const detailCategory = document.getElementById('detailCategory');
const detailPeriod = document.getElementById('detailPeriod');
const detailGroup = document.getElementById('detailGroup');
const detailDescription = document.getElementById('detailDescription');

За викторината:
const quizQuestionEl = document.getElementById('quizQuestion');
const quizScoreEl = document.getElementById('quizScore');
const quizPromptEl = document.getElementById('quizPrompt');
const quizElementNumberEl = document.getElementById('quizElementNumber');
const quizElementSymbolEl = document.getElementById('quizElementSymbol');
const quizElementNameEl = document.getElementById('quizElementName');
const quizOptionsEl = document.getElementById('quizOptions');
const quizFeedbackEl = document.getElementById('quizFeedback');
*/

// TODO: Свържете основните DOM елементи тук









// TODO: Свържете детайлните DOM елементи тук









// TODO: Свържете викторина DOM елементи тук









console.log("✅ DOM елементите са свързани");

// ============================================
// СЕДМИЦА 6: TODO - ФУНКЦИЯ ЗА РЕНДЕРИРАНЕ
// ============================================

/*
Инструкции за функция renderPeriodicTable():

1. Изчистете periodicTableEl: periodicTableEl.innerHTML = '';

2. Обходете масива elements с for цикъл:
   for (let i = 0; i < elements.length; i++) {
       const element = elements[i];
       // ...
   }

3. За всеки елемент създайте div:
   const elementDiv = document.createElement('div');

4. Задайте класове:
   elementDiv.className = 'element ' + element.category;

5. Задайте Grid позиция:
   elementDiv.style.gridRow = element.row;
   elementDiv.style.gridColumn = element.col;

6. Задайте dataset атрибути:
   elementDiv.dataset.number = element.number;
   elementDiv.dataset.symbol = element.symbol;
   elementDiv.dataset.name = element.name;
   elementDiv.dataset.category = element.category;

7. Създайте HTML съдържание:
   elementDiv.innerHTML = `
       <div class="element-number">${element.number}</div>
       <div class="element-symbol">${element.symbol}</div>
       <div class="element-name">${element.name}</div>
       <div class="element-mass">${element.mass}</div>
   `;

8. Добавете click event:
   elementDiv.addEventListener('click', function() {
       showElementDetails(element);
   });

9. Добавете към таблицата:
   periodicTableEl.appendChild(elementDiv);

10. След цикъла, обновете броя:
    updateVisibleCount();
*/

function renderPeriodicTable() {
   console.log("🎨 Рендериране на таблицата...");

   // TODO: Изчистете periodicTableEl


   // TODO: Направете for цикъл през elements


   // TODO: Вземете текущия елемент


   // TODO: Създайте div елемент


   // TODO: Задайте className


   // TODO: Задайте gridRow и gridColumn



   // TODO: Задайте dataset атрибути





   // TODO: Задайте innerHTML







   // TODO: Добавете click event listener




   // TODO: Добавете към periodicTableEl




   // TODO: Обновете видимия брой


   console.log("✅ Таблицата е рендерирана");
}

// ============================================
// СЕДМИЦА 7: TODO - ПОКАЗВАНЕ НА ДЕТАЙЛИ
// ============================================

/*
Инструкции за функция showElementDetails(element):

1. Попълнете всички полета с данни от element обекта:
   detailName.textContent = element.name;
   detailNumber.textContent = element.number;
   detailSymbol.textContent = element.symbol;
   detailMass.textContent = element.mass;
   detailPeriod.textContent = element.period;
   detailGroup.textContent = element.group;
   detailDescription.textContent = element.description;

2. За категорията използвайте switch за превод:
   switch(element.category) {
       case 'nonmetal':
           detailCategory.textContent = 'Неметал';
           break;
       case 'metal':
           detailCategory.textContent = 'Метал';
           break;
       // ... останалите категории
   }

3. Scroll до детайлите:
   elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
*/

function showElementDetails(element) {
   console.log("📋 Показване на детайли за:", element.name);

   // TODO: Попълнете detailName


   // TODO: Попълнете detailNumber


   // TODO: Попълнете detailSymbol


   // TODO: Попълнете detailMass


   // TODO: Попълнете detailPeriod


   // TODO: Попълнете detailGroup


   // TODO: Попълнете detailDescription


   // TODO: Използвайте switch за detailCategory





















   // TODO: Scroll до елемента

}

// ============================================
// СЕДМИЦА 7: TODO - ФИЛТРИРАНЕ
// ============================================

/*
Инструкции за функция filterElements():

1. Вземете всички елементи:
   const allElements = document.querySelectorAll('.element');

2. Нулирайте броя: let visibleCount = 0;

3. Обходете с for цикъл:
   for (let i = 0; i < allElements.length; i++) {
       const elementDiv = allElements[i];
       // ...
   }

4. Вземете данните:
   const category = elementDiv.dataset.category;
   const name = elementDiv.dataset.name.toLowerCase();
   const symbol = elementDiv.dataset.symbol.toLowerCase();

5. Проверете филтъра с if-else:
   const categoryMatch = (currentFilter === 'all' || category === currentFilter);

6. Проверете търсенето:
   const searchMatch = (searchTerm === '' || name.includes(searchTerm) || symbol.includes(searchTerm));

7. Покажете/скрийте елемента:
   if (categoryMatch && searchMatch) {
       elementDiv.classList.remove('hidden');
       visibleCount++;
   } else {
       elementDiv.classList.add('hidden');
   }

8. Обновете броя:
   visibleCountEl.textContent = visibleCount;
*/

function filterElements() {
   console.log("🔍 Филтриране...");

   // TODO: Вземете всички елементи


   // TODO: Нулирайте visibleCount


   // TODO: Направете for цикъл


   // TODO: Вземете текущия div


   // TODO: Вземете category, name, symbol от dataset




   // TODO: Проверете categoryMatch


   // TODO: Проверете searchMatch  


   // TODO: Използвайте if-else за показване/скриване









   // TODO: Обновете visibleCountEl

}

// ============================================
// СЕДМИЦА 7: TODO - ОБНОВЯВАНЕ НА БРОЯ
// ============================================

/*
Инструкции за функция updateVisibleCount():

1. Вземете всички елементи които НЕ са hidden:
   const visible = document.querySelectorAll('.element:not(.hidden)');

2. Обновете текста:
   visibleCountEl.textContent = visible.length;
*/

function updateVisibleCount() {
   // TODO: Вземете видимите елементи


   // TODO: Обновете текста

}

// ============================================
// СЕДМИЦА 9: TODO - СТАРТ НА ВИКТОРИНА
// ============================================

/*
Инструкции за функция startQuiz():

1. Нулирайте променливите:
   quizActive = true;
   currentQuizQuestion = 0;
   quizScore = 0;

2. Избeрете 10 случайни елемента:
   quizElements = getRandomElements(10);

3. Обновете UI:
   quizScoreEl.textContent = '0';
   quizQuestionEl.textContent = '1';

4. Покажете викторината:
   startQuizBtn.style.display = 'none';
   quizGameEl.style.display = 'block';

5. Покажете първия въпрос:
   showQuizQuestion();
*/

function startQuiz() {
   console.log("🎮 Стартиране на викторина...");

   // TODO: Нулирайте променливите




   // TODO: Вземете случайни елементи


   // TODO: Обновете UI



   // TODO: Покажете викторината



   // TODO: Покажете първия въпрос

}

// ============================================
// СЕДМИЦА 9: TODO - СЛУЧАЙНИ ЕЛЕМЕНТИ
// ============================================

/*
Инструкции за функция getRandomElements(count):

1. Създайте копие на масива:
   const shuffled = [...elements];

2. Разбъркайте с Fisher-Yates алгоритъм:
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = shuffled[i];
       shuffled[i] = shuffled[j];
       shuffled[j] = temp;
   }

3. Върнете първите count елемента:
   return shuffled.slice(0, count);
*/

function getRandomElements(count) {
   // TODO: Създайте копие на elements


   // TODO: Разбъркайте с Fisher-Yates







   // TODO: Върнете първите count елемента

}

// ============================================
// СЕДМИЦА 9: TODO - ПОКАЗВАНЕ НА ВЪПРОС
// ============================================

/*
Инструкции за функция showQuizQuestion():

1. Проверете дали викторината е завършена:
   if (currentQuizQuestion >= quizElements.length) {
       showQuizResults();
       return;
   }

2. Вземете текущия елемент:
   const element = quizElements[currentQuizQuestion];

3. Обновете номера на въпроса:
   quizQuestionEl.textContent = currentQuizQuestion + 1;

4. Изчистете feedback-а:
   quizFeedbackEl.textContent = '';
   quizFeedbackEl.className = 'quiz-feedback';

5. Изберете тип въпрос (случайно):
   const questionType = Math.random() < 0.5 ? 'symbol' : 'name';

6. Ако е 'symbol':
   - quizPromptEl.textContent = 'Какъв е символът на този елемент?';
   - quizElementNumberEl.textContent = element.number;
   - quizElementSymbolEl.textContent = '?';
   - quizElementNameEl.textContent = element.name;
   - options = generateSymbolOptions(element);
   - renderQuizOptions(options, element.symbol);

7. Ако е 'name':
   - quizPromptEl.textContent = 'Кой е този елемент?';
   - quizElementNumberEl.textContent = element.number;
   - quizElementSymbolEl.textContent = element.symbol;
   - quizElementNameEl.textContent = '?';
   - options = generateNameOptions(element);
   - renderQuizOptions(options, element.name);
*/

function showQuizQuestion() {
   // TODO: Проверете дали викторината е завършена





   // TODO: Вземете текущия елемент


   // TODO: Обновете quizQuestionEl


   // TODO: Изчистете feedback



   // TODO: Изберете тип въпрос


   // TODO: Използвайте if-else за двата типа


















}

// ============================================
// СЕДМИЦА 9: TODO - ГЕНЕРИРАНЕ НА ОПЦИИ
// ============================================

/*
Инструкции за функция generateSymbolOptions(correctElement):

1. Създайте масив с правилния отговор:
   const options = [correctElement.symbol];

2. Добавете 3 грешни с while:
   while (options.length < 4) {
       const randomElement = elements[Math.floor(Math.random() * elements.length)];
       if (!options.includes(randomElement.symbol)) {
           options.push(randomElement.symbol);
       }
   }

3. Разбъркайте опциите:
   return shuffleArray(options);
*/

function generateSymbolOptions(correctElement) {
   // TODO: Създайте масив с правилния отговор


   // TODO: Добавете 3 грешни опции







   // TODO: Разбъркайте и върнете

}

/*
Инструкции за функция generateNameOptions(correctElement):
Същото като generateSymbolOptions, но с element.name
*/

function generateNameOptions(correctElement) {
   // TODO: Създайте масив с правилния отговор


   // TODO: Добавете 3 грешни опции







   // TODO: Разбъркайте и върнете

}

/*
Инструкции за функция shuffleArray(array):

1. Създайте копие: const shuffled = [...array];

2. Разбъркайте с Fisher-Yates:
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = shuffled[i];
       shuffled[i] = shuffled[j];
       shuffled[j] = temp;
   }

3. Върнете: return shuffled;
*/

function shuffleArray(array) {
   // TODO: Създайте копие


   // TODO: Разбъркайте







   // TODO: Върнете

}

// ============================================
// СЕДМИЦА 9: TODO - РЕНДЕРИРАНЕ НА ОПЦИИ
// ============================================

/*
Инструкции за функция renderQuizOptions(options, correctAnswer):

1. Изчистете: quizOptionsEl.innerHTML = '';

2. Обходете с for:
   for (let i = 0; i < options.length; i++) {
       // ...
   }

3. За всяка опция:
   - Създайте div: const optionDiv = document.createElement('div');
   - Задайте клас: optionDiv.className = 'quiz-option';
   - Задайте текст: optionDiv.textContent = options[i];
   - Добавете click event:
     optionDiv.addEventListener('click', function() {
         checkAnswer(options[i], correctAnswer, optionDiv);
     });
   - Добавете: quizOptionsEl.appendChild(optionDiv);
*/

function renderQuizOptions(options, correctAnswer) {
   // TODO: Изчистете quizOptionsEl


   // TODO: Направете for цикъл


   // TODO: Създайте div


   // TODO: Задайте className


   // TODO: Задайте textContent


   // TODO: Добавете click event




   // TODO: Добавете към quizOptionsEl



}

// ============================================
// СЕДМИЦА 9: TODO - ПРОВЕРКА НА ОТГОВОР
// ============================================

/*
Инструкции за функция checkAnswer(selectedAnswer, correctAnswer, optionDiv):

1. Вземете всички опции:
   const allOptions = document.querySelectorAll('.quiz-option');

2. Блокирайте всички опции:
   for (let i = 0; i < allOptions.length; i++) {
       allOptions[i].style.pointerEvents = 'none';
   }

3. Проверете с if-else:
   if (selectedAnswer === correctAnswer) {
       // Правилен отговор
       optionDiv.classList.add('correct');
       quizFeedbackEl.className = 'quiz-feedback correct';
       quizFeedbackEl.textContent = '✓ Браво! Верен отговор!';
       quizScore++;
   } else {
       // Грешен отговор
       optionDiv.classList.add('incorrect');
       quizFeedbackEl.className = 'quiz-feedback incorrect';
       quizFeedbackEl.textContent = '✗ Грешка! Верният отговор е: ' + correctAnswer;
       
       // Оцветете правилния отговор
       for (let i = 0; i < allOptions.length; i++) {
           if (allOptions[i].textContent === correctAnswer) {
               allOptions[i].classList.add('correct');
           }
       }
   }

4. Обновете точките:
   quizScoreEl.textContent = quizScore;

5. След 2 секунди - следващ въпрос:
   setTimeout(function() {
       currentQuizQuestion++;
       showQuizQuestion();
   }, 2000);
*/

function checkAnswer(selectedAnswer, correctAnswer, optionDiv) {
   // TODO: Вземете всички опции


   // TODO: Блокирайте всички опции




   // TODO: Проверете с if-else


   // TODO: Правилен отговор







   // TODO: Грешен отговор





   // TODO: Оцветете правилния отговор








   // TODO: Обновете quizScoreEl


   // TODO: След 2 секунди - следващ въпрос




}

// ============================================
// СЕДМИЦА 10: TODO - РЕЗУЛТАТИ
// ============================================

/*
Инструкции за функция showQuizResults():

1. Изчистете опциите: quizOptionsEl.innerHTML = '';

2. Променете текста:
   quizPromptEl.textContent = 'Викторината завърши!';
   quizElementNumberEl.textContent = '';
   quizElementSymbolEl.textContent = '🎉';
   quizElementNameEl.textContent = '';

3. Изчислете процент:
   const percentage = (quizScore / quizElements.length) * 100;

4. Изберете съобщение с if-else:
   let message = '';
   if (percentage === 100) {
       message = '🏆 Перфектен резултат!';
   } else if (percentage >= 80) {
       message = '⭐ Отлично!';
   } else if (percentage >= 60) {
       message = '👍 Добър резултат!';
   } else {
       message = '📚 Трябва повече да практикуваш!';
   }

5. Покажете резултата:
   quizFeedbackEl.className = 'quiz-feedback correct';
   quizFeedbackEl.innerHTML = `
       <div style="font-size: 1.5rem; margin-bottom: 15px;">${message}</div>
       <div>Точки: ${quizScore} / ${quizElements.length} (${percentage.toFixed(0)}%)</div>
       <button class="btn-primary" style="margin-top: 20px;" onclick="resetQuiz()">Нова викторина</button>
   `;
*/

function showQuizResults() {
   // TODO: Изчистете quizOptionsEl


   // TODO: Променете текстовете





   // TODO: Изчислете процента


   // TODO: Изберете съобщение с if-else












   // TODO: Покажете резултата






}

// ============================================
// СЕДМИЦА 10: TODO - RESET НА ВИКТОРИНА
// ============================================

/*
Инструкции за функция resetQuiz():

1. Нулирайте променливите:
   quizActive = false;

2. Скрийте викторината:
   quizGameEl.style.display = 'none';
   startQuizBtn.style.display = 'block';
*/

function resetQuiz() {
   // TODO: Нулирайте quizActive


   // TODO: Скрийте викторината


}

// ============================================
// СЕДМИЦА 8: TODO - EVENT LISTENERS
// ============================================

/*
Инструкции за функция attachEventListeners():

1. Филтър:
   filterTypeEl.addEventListener('change', function(e) {
       currentFilter = e.target.value;
       filterElements();
   });

2. Търсене:
   searchInputEl.addEventListener('input', function(e) {
       searchTerm = e.target.value.toLowerCase();
       filterElements();
   });

3. Затваряне на детайли:
   closeDetailsBtn.addEventListener('click', function() {
       elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
   });

4. Старт на викторина:
   startQuizBtn.addEventListener('click', startQuiz);
*/

function attachEventListeners() {
   console.log("🎧 Добавяне на event listeners...");

   // TODO: Добавете change event за filterTypeEl





   // TODO: Добавете input event за searchInputEl





   // TODO: Добавете click event за closeDetailsBtn




   // TODO: Добавете click event за startQuizBtn


   console.log("✅ Event listeners са добавени");
}

// ============================================
// СЕДМИЦА 8: TODO - ИНИЦИАЛИЗАЦИЯ
// ============================================

/*
Инструкции за функция init():

1. Рендерирайте таблицата:
   renderPeriodicTable();

2. Добавете event listeners:
   attachEventListeners();
*/

function init() {
   console.log("🚀 Инициализация...");

   // TODO: Рендерирайте таблицата


   // TODO: Добавете event listeners


   console.log("✅ Приложението е готово!");
}

// ============================================
// СТАРТИРАНЕ НА ПРИЛОЖЕНИЕТО
// ============================================

// Стартирайте при зареждане на страницата
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', init);
} else {
   init();
}

console.log("🎉 JavaScript файлът е зареден!");
