## PROJECT DOCUMENTATION — SALON BOOKING PLATFORM (Beige & Blush Systems)

1. Project Overview
The Beige & Blush Salon Booking System is a full-stack appointment scheduling platform for salon and spa businesses. The system allows customers to book services based on real-time slot availability, while providing an internal admin dashboard to manage staff, capacity, schedules, and bookings.
The system includes:
Customer-facing booking portal
Admin dashboard
Email automation
Calendar integration
Feedback workflow
Real-time slot locking (to prevent double booking)

2. Goals & Purpose 

## Primary Goals
Provide a smooth and user-friendly online booking experience.
Ensure accurate real-time availability to avoid double-bookings.
Give salon staff a central dashboard to manage daily operations.
Automate confirmations, reminders, and feedback collection.
Build a scalable, production-grade full-stack project for portfolio.
🎯 Secondary Goals
Support future mobile app integration
Allow flexible service capacity
Allow photo gallery & CMS-like features
Support multi-branch scalability (optional future requirement)

3. Target Users

1. Customers (Clients)
Book appointments
View available services
Select date/time based on availability
Receive confirmation email
Add event to calendar
Provide post-appointment feedback
2. Admin / Salon Manager
Adjust service availability
Set capacity per service
Manage staff schedule
View daily/weekly calendar
Track bookings & feedback
Manage content (gallery, staff photos, service details)
3. Staff
View appointments assigned to them
Check schedule
Update availability (optional future feature)
4. Core Features (Functional Requirements)
A. Customer Portal
Browse services
Live availability calendar
Dynamic time slot filtering
Slot capacity (e.g., 5 chairs → 5 bookings per slot)
Booking creation
Confirmation email + .ics calendar event
Feedback link sent after service
B. Admin Dashboard
Authentication (JWT) + RBAC (Admin / Staff)
Add/update/delete services
Manage capacity (set chairs/stations)
Staff schedule management
Manually block slots
View daily/weekly calendar
Export booking reports
View user feedback
Manage gallery/staff photos (optional)
C. Automation & Integrations
Automated confirmation emails
Automated feedback email (post-service)
Reminder notifications (optional)
Calendar (.ics) integration
5. System Requirements (Non-Functional)
✔ Scalability
Slot locking must handle burst traffic (e.g., holiday rush).
✔ Reliability
Bookings must never double-book.
✔ Performance
Booking API must be fast (< 200ms).
✔ Security
JWT auth
Role-based access
Rate limiting
Input validation
Password hashing
✔ Maintainability
Clean folder structure in both backend & frontend.
✔ Portability
Works easily on cloud providers.
6. Technology Stack (with justification)

## Here is the tech stack chosen based on cost, simplicity, scalability, and developer experience.

FrontEnd: Next.JS, Tailwind CSS
BackEnd: Fast API
DB: PostgresSQL
EMail Service: SendGrid
Deployment: Frontend: Vercel, BackEnd: Render, Images: Azure Blob Storage, Emails: SendGrid.


