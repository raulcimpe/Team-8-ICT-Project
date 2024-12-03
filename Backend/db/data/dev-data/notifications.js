module.exports = [
    // Reminders for upcoming appointments
    {
      user_id: 1,
      notification_type: "Reminder",
      message: "Your follow-up appointment for App Development is scheduled for 2024-12-05 at 11:00 AM.",
      status: "Pending",
      sent_at: null,
    },
    {
      user_id: 2,
      notification_type: "Reminder",
      message: "Your cybersecurity audit appointment is tomorrow at 2:00 PM.",
      status: "Sent",
      sent_at: "2024-11-22 08:30:00",
    },
    {
      user_id: 3,
      notification_type: "Reminder",
      message: "Your budgeting consultation is scheduled for 2024-12-07 at 3:00 PM.",
      status: "Pending",
      sent_at: null,
    },
  
    // Alerts about updates
    {
      user_id: 4,
      notification_type: "Alert",
      message: "The branding session for your business has been canceled. Please reschedule at your convenience.",
      status: "Read",
      sent_at: "2024-11-20 16:15:00",
    },
    {
      user_id: 5,
      notification_type: "Alert",
      message: "The e-commerce platform upgrade consultation report is now available for download.",
      status: "Sent",
      sent_at: "2024-11-21 10:45:00",
    },
  
    // Updates about changes in schedules
    {
      user_id: 1,
      notification_type: "Update",
      message: "Your follow-up meeting has been rescheduled to 2024-12-06 at 10:00 AM.",
      status: "Sent",
      sent_at: "2024-11-22 09:30:00",
    },
    {
      user_id: 3,
      notification_type: "Update",
      message: "Your bookkeeping consultation summary has been approved. Please review it.",
      status: "Read",
      sent_at: "2024-11-20 14:00:00",
    },
  
    // General Notifications
    {
      user_id: 2,
      notification_type: "General",
      message: "New cybersecurity resources are now available on your dashboard.",
      status: "Sent",
      sent_at: "2024-11-19 12:00:00",
    },
    {
      user_id: 5,
      notification_type: "General",
      message: "A new webinar on e-commerce trends is scheduled for 2024-11-30. Register now!",
      status: "Pending",
      sent_at: null,
    },
    {
      user_id: 1,
      notification_type: "General",
      message: "Thank you for your feedback! Your input helps us improve our services.",
      status: "Read",
      sent_at: "2024-11-18 11:45:00",
    },
  ];
  