"""
Infrastructure Layer: Email Service
Handles email notifications for contact form submissions.
"""
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from typing import Dict, Any
import logging

logger = logging.getLogger(__name__)


class ContactEmailService:
    """
    Infrastructure Service: Handles email notifications
    Sends emails when contact forms are submitted.
    """

    @staticmethod
    def send_contact_notification(contact_data: Dict[str, Any]) -> bool:
        """
        Send email notification to admin when contact form is submitted
        
        Args:
            contact_data: Dictionary containing contact submission data
            
        Returns:
            True if email sent successfully, False otherwise
        """
        try:
            admin_email = getattr(settings, 'ADMIN_EMAIL', None)
            if not admin_email:
                logger.warning("ADMIN_EMAIL not configured. Skipping email notification.")
                return False

            # Prepare email content
            subject = f"New Contact Form Submission from {contact_data.get('first_name', '')} {contact_data.get('last_name', '')}"
            
            # Build email body
            message = f"""
New Contact Form Submission Received

Contact Details:
----------------
Name: {contact_data.get('first_name', '')} {contact_data.get('last_name', '')}
Email: {contact_data.get('email', '')}
Phone: {contact_data.get('phone', 'N/A')}

Message:
--------
{contact_data.get('message', '')}

---
Submitted at: {contact_data.get('created_at', 'N/A')}
Contact ID: {contact_data.get('id', 'N/A')}
            """.strip()

            # Send email
            from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', settings.EMAIL_HOST_USER)
            
            send_mail(
                subject=subject,
                message=message,
                from_email=from_email,
                recipient_list=[admin_email],
                fail_silently=False,
            )
            
            logger.info(f"Contact notification email sent to {admin_email} for contact ID: {contact_data.get('id')}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send contact notification email: {str(e)}", exc_info=True)
            return False

    @staticmethod
    def send_confirmation_email(contact_data: Dict[str, Any]) -> bool:
        """
        Send confirmation email to the user who submitted the form
        
        Args:
            contact_data: Dictionary containing contact submission data
            
        Returns:
            True if email sent successfully, False otherwise
        """
        try:
            user_email = contact_data.get('email')
            if not user_email:
                return False

            subject = "Thank you for contacting us!"
            
            message = f"""
Dear {contact_data.get('first_name', '')},

Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

Your Message:
{contact_data.get('message', '')}

Best regards,
Truck Dispatch Team
            """.strip()

            from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', settings.EMAIL_HOST_USER)
            
            send_mail(
                subject=subject,
                message=message,
                from_email=from_email,
                recipient_list=[user_email],
                fail_silently=False,
            )
            
            logger.info(f"Confirmation email sent to {user_email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send confirmation email: {str(e)}", exc_info=True)
            return False
