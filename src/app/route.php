<?php
// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);

    // Check if JSON is valid
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit();
    }

    // Extract and sanitize form data
    $name = isset($input['name']) ? trim(htmlspecialchars($input['name'])) : '';
    $email = isset($input['email']) ? trim(htmlspecialchars($input['email'])) : '';
    $subject = isset($input['subject']) ? trim(htmlspecialchars($input['subject'])) : '';
    $message = isset($input['message']) ? trim(htmlspecialchars($input['message'])) : '';

    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'All fields are required']);
        exit();
    }

    // Email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit();
    }

    // Prepare email content
    $to = 'learning@triquetratech.co.za';
    $email_subject = "Website Contact from " . $name . ": " . $subject;
    $timestamp = date('F j, Y \a\t g:i A');

    // HTML email content (matching your original design)
    $html_message = "
    <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;\">
        <div style=\"background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);\">
            <h2 style=\"color: #333; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;\">
                New Contact Form Submission from " . htmlspecialchars($name) . "
            </h2>
            
            <div style=\"background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #10b981;\">
                <p style=\"margin: 0; color: #2d5a2d; font-weight: bold;\">
                    Reply directly to this email to respond to " . htmlspecialchars($name) . "
                </p>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <strong style=\"color: #555;\">Name:</strong>
                <p style=\"margin: 5px 0; color: #333;\">" . htmlspecialchars($name) . "</p>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <strong style=\"color: #555;\">Email:</strong>
                <p style=\"margin: 5px 0; color: #333;\">
                    <a href=\"mailto:" . htmlspecialchars($email) . "\" style=\"color: #10b981; text-decoration: none;\">" . htmlspecialchars($email) . "</a>
                </p>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <strong style=\"color: #555;\">Subject:</strong>
                <p style=\"margin: 5px 0; color: #333;\">" . htmlspecialchars($subject) . "</p>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <strong style=\"color: #555;\">Message:</strong>
                <div style=\"background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;\">
                    <p style=\"margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;\">" . nl2br(htmlspecialchars($message)) . "</p>
                </div>
            </div>
            
            <div style=\"margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;\">
                <p style=\"color: #666; font-size: 14px; margin: 0;\">
                    This message was sent from your website contact form on " . $timestamp . ".
                </p>
            </div>
        </div>
    </div>";

    // Plain text version
    $text_message = "New Contact Form Submission\n\n";
    $text_message .= "Name: " . $name . "\n";
    $text_message .= "Email: " . $email . "\n";
    $text_message .= "Subject: " . $subject . "\n\n";
    $text_message .= "Message:\n" . $message . "\n\n";
    $text_message .= "Sent on: " . $timestamp;

    // Email headers
    $headers = array(
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: noreply@' . $_SERVER['HTTP_HOST'], // Use your domain
        'Reply-To: ' . $email,
        'Return-Path: noreply@' . $_SERVER['HTTP_HOST'],
        'X-Mailer: PHP/' . phpversion()
    );

    // Send email
    $mail_sent = mail($to, $email_subject, $html_message, implode("\r\n", $headers));

    if ($mail_sent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email sent successfully'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
} catch (Exception $e) {
    // Log error (you can customize this)
    error_log('Contact form error: ' . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email'
    ]);
}
