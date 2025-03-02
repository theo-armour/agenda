# Python

## Email send

* https://dev.to/codepicker/10-python-scripts-to-automate-your-daily-tasks-1b3g
* https://viju-londhe.medium.com/how-to-send-an-email-with-an-attachment-using-python-3ca61e0ef582
* https://automatetheboringstuff.com/2e/chapter18/


Create a python script that reads first names and email addresses from an excel spreads, creates an email in HTML format with a salutation addressed to the first names and sends the email via Gmail

Require the user to input a password on first use and retain the password locally for use the future.

https://www.perplexity.ai/search/create-a-python-script-that-re-5vqfddQ4SfiG2E573cebuA

## Perplexity

import pandas as pd
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import getpass
import hashlib
import os

PASSWORD_FILE = "email_password.txt"

def set_password():
    while True:
        password = getpass.getpass("Set a new password for email access: ")
        if len(password) < 8:
            print("Password must be at least 8 characters long.")
        else:
            confirm_password = getpass.getpass("Confirm password: ")
            if password == confirm_password:
                hashed_password = hashlib.sha256(password.encode()).hexdigest()
                with open(PASSWORD_FILE, "w") as file:
                    file.write(hashed_password)
                print("Password set successfully.")
                return password
            else:
                print("Passwords do not match. Please try again.")

def get_password():
    if os.path.exists(PASSWORD_FILE):
        with open(PASSWORD_FILE, "r") as file:
            stored_hash = file.read().strip()
        attempt = getpass.getpass("Enter your password for email access: ")
        if hashlib.sha256(attempt.encode()).hexdigest() == stored_hash:
            return attempt
        else:
            print("Incorrect password. Access denied.")
            return None
    else:
        return set_password()

def send_emails(sender_email, password):
    # Read Excel file
    df = pd.read_excel('contacts.xlsx')

    # Gmail SMTP settings
    smtp_server = "smtp.gmail.com"
    port = 587

    # HTML email template
    html_template = """
    <html>
    <body>
        <h2>Hello {name},</h2>
        <p>This is a personalized email sent from Python.</p>
        <p>Have a great day!</p>
    </body>
    </html>
    """

    # Create SMTP session
    with smtplib.SMTP(smtp_server, port) as server:
        server.starttls()
        server.login(sender_email, password)
        
        # Iterate through Excel data
        for index, row in df.iterrows():
            name = row['First Name']
            recipient_email = row['Email']
            
            # Create message
            message = MIMEMultipart("alternative")
            message["Subject"] = "Personalized Email"
            message["From"] = sender_email
            message["To"] = recipient_email
            
            # Create HTML content
            html_content = html_template.format(name=name)
            html_part = MIMEText(html_content, "html")
            message.attach(html_part)
            
            # Send email
            server.sendmail(sender_email, recipient_email, message.as_string())
            print(f"Email sent to {name} at {recipient_email}")

    print("All emails sent successfully!")

def main():
    sender_email = input("Enter your Gmail address: ")
    password = get_password()
    
    if password:
        send_emails(sender_email, password)
    else:
        print("Email sending aborted due to authentication failure.")

if __name__ == "__main__":
    main()
