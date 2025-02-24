<?php
try {
    // Verbindung zur SQLite-Datenbank herstellen
    $pdo = new PDO('sqlite:form_data.db');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Tabelle erstellen, falls sie nicht existiert
    $pdo->exec("CREATE TABLE IF NOT EXISTS form_entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL
    )");

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Daten in die Datenbank einfügen
        $stmt = $pdo->prepare("INSERT INTO form_entries (name, email, message) VALUES (:name, :email, :message)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);
        $stmt->execute();

        echo "Daten erfolgreich gespeichert!";
    }
} catch (PDOException $e) {
    echo "Fehler: " . $e->getMessage();
}
?>