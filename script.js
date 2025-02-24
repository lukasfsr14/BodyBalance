let timeElapsed = 0; // Startzeit bei 0
let timerInterval; // Variable für den Timer

// Funktion zum Starten des Quiz
function startQuiz() {
    const username = document.getElementById('username').value;

    if (!username) {
        alert("Bitte gib deinen Namen ein, bevor du startest!");
        return;
    }

    // Timer starten
    timeElapsed = 0;
    document.getElementById('timer').textContent = `Zeit: ${timeElapsed} Sekunden`;
    timerInterval = setInterval(() => {
        timeElapsed++;
        document.getElementById('timer').textContent = `Zeit: ${timeElapsed} Sekunden`;
    }, 1000);

    // Quiz anzeigen und Start-Button ausblenden
    document.getElementById('startButton').style.display = "none";
    document.getElementById('quizContent').style.display = "block";
}

// Funktion zum Überprüfen der Antworten
function checkAnswers() {
    let correctAnswers = 0;
    const username = document.getElementById('username').value || "Unbekannter Teilnehmer";
    let timeElapsed = 0; // Startzeit bei 0
    let timerInterval; // Variable für den Timer
    
    // Funktion zum Starten des Quiz
    function startQuiz() {
        const username = document.getElementById('username').value;
    
        if (!username) {
            alert("Bitte gib deinen Namen ein, bevor du startest!");
            return;
        }
    
        // Timer starten
        timeElapsed = 0;
        document.getElementById('timer').textContent = `Zeit: ${timeElapsed} Sekunden`;
        timerInterval = setInterval(() => {
            timeElapsed++;
            document.getElementById('timer').textContent = `Zeit: ${timeElapsed} Sekunden`;
        }, 1000);
    
        // Quiz anzeigen und Start-Button ausblenden
        document.getElementById('startButton').style.display = "none";
        document.getElementById('username').style.display = "none"; // Namensfeld ausblenden
        document.querySelector('label[for=username]').style.display = "none"; // Label ausblenden
        document.getElementById('quizContent').style.display = "block";
    }
    
    // Funktion zum Überprüfen der Antworten
    function checkAnswers() {
        let correctAnswers = 0;
        const username = document.getElementById('username').value || "Unbekannter Teilnehmer";
    
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        const q4 = document.querySelector('input[name="q4"]:checked');
        const q5 = document.querySelector('input[name="q5"]:checked');
        const q6 = document.querySelector('input[name="q6"]:checked');
    
        if (q1 && q1.value === 'correct') correctAnswers++;
        if (q2 && q2.value === 'correct') correctAnswers++;
        if (q3 && q3.value === 'correct') correctAnswers++;
        if (q4 && q4.value === 'correct') correctAnswers++;
        if (q5 && q5.value === 'correct') correctAnswers++;
        if (q6 && q6.value === 'correct') correctAnswers++;
    
        const result = document.getElementById('result');
    
        if (correctAnswers === 6) {
            clearInterval(timerInterval); // Timer stoppen
            result.textContent = `🎉 Herzlichen Glückwunsch, ${username}! Du hast alle Fragen richtig beantwortet in ${timeElapsed} Sekunden! 🎉`;
            
            // Optional: Konfetti-Effekt starten
            // const jsConfetti = new JSConfetti();
            // jsConfetti.addConfetti();
            
        } else {
            result.textContent = `${username}, du hast ${correctAnswers} von 6 Fragen richtig beantwortet! Die Zeit läuft weiter...`;
        }
    }
}    