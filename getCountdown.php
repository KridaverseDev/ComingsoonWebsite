<?php
header('Content-Type: application/json');

// Set the date for 45 days from now
$finalDate = time() + 45 * 24 * 60 * 60;

// Calculate the remaining time
$remainingTime = max(0, $finalDate - time());

// Return the remaining time in seconds
echo json_encode(['remainingTime' => $remainingTime]);
?>
