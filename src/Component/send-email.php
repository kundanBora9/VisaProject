<?php
// Set the header to allow CORS (Cross-Origin Resource Sharing) if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $project = htmlspecialchars(trim($_POST['project']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the form data
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($project) && !empty($subject) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set the recipient email address and subject
            $to = "kb926464@gmail.com"; // Change this to your email address
            $mailSubject = "Contact Form: $subject";

            // Construct the email body
            $emailBody = "Name: $name\n";
            $emailBody .= "Email: $email\n";
            $emailBody .= "Phone: $phone\n";
            $emailBody .= "Project: $project\n";
            $emailBody .= "Message:\n$message\n";

            // Set the email headers
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            // Send the email
            if (mail($to, $mailSubject, $emailBody, $headers)) {
                // Send success response
                echo json_encode(["message" => "Email sent successfully!"]);
            } else {
                // Send error response
                http_response_code(500);
                echo json_encode(["message" => "Failed to send email."]);
            }
        } else {
            // Invalid email
            http_response_code(400);
            echo json_encode(["message" => "Invalid email address."]);
        }
    } else {
        // Missing required fields
        http_response_code(400);
        echo json_encode(["message" => "Please fill in all required fields."]);
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
}
?>
