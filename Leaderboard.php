<?php
$host = 'localhost'; // Datenbank-Host
$db = 'Leaderboard.db'; // Datenbankname
$user = 'root'; // Benutzername
$pass = ''; // Passwort

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = json_decode(file_get_contents('php://input'), true);
        $name = $input['name'] ?? null;
        $time = $input['time'] ?? null;
    
        if ($name && $time) {
            $stmt = $pdo->prepare("INSERT INTO leaderboard (name, time) VALUES (:name, :time)");
            $stmt->execute(['name' => $name, 'time' => $time]);
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Ungültige Eingabedaten']);
        }
    }
    
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>
