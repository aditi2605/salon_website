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

## Frontend
✔ Next.js (App Router)
Server components
SEO-friendly
Great with API integration
Easy deployment on Vercel

✔ Tailwind CSS
Fast UI development
Perfect for responsive design
Good with salon luxury theme

## Backend → FastAPI

Why FastAPI?
Extremely simple & fast
Native async support
Works perfectly with PostgreSQL
Built-in docs (Swagger UI)
Strong ecosystem
Production-ready
Great for learning industry backend patterns
Ideal for your booking system where fast slot availability response is crucial.

## Database → PostgreSQL

Why PostgreSQL?
Excellent for relational data (services, slots, bookings)
Transaction-safe (needed for preventing double booking)
Free tiers available (Neon, Supabase)
Supports row locking for concurrency

## Slot Locking → Redis (Upstash)
Why Upstash Redis?
Free serverless Redis
No infrastructure needed
Perfect for:
Preventing double booking
Rate limiting
Caching slot availability
Traditional Redis is expensive & needs a server → Upstash solves this.

## File Storage → Azure Blob Storage
Why Azure Blob?
Extremely cheap
Reliable
Good for gallery images, staff photos
Easy integration with FastAPI

## Email Service → SendGrid
Why SendGrid?
Free 100 emails/day
Easy integration
Supports dynamic templates
Industry standard

## Deployment

Frontend	Vercel	Free + best for Next.js
Backend	Render	Free tier + auto deploy
DB	Neon	Free + scalable
Redis	Upstash	Free + no server
Storage	Azure Blob	Cheap + reliable
Email	SendGrid	Free

7. High-Level System Architecture
Next.js (Vercel)
     |
     v
FastAPI Backend (Render)
     |
     +---- PostgreSQL (Neon)     <-- Bookings, slots, services
     |
     +---- Upstash Redis         <-- Slot locking / caching
     |
     +---- Azure Blob Storage    <-- Images
     |
     +---- SendGrid              <-- Emails

8. Milestone Breakdown (Timeline)

## Week 1 — Planning & Backend Setup
Finalize ERD
Set up FastAPI project
Set up PostgreSQL
Build user & service models

## Week 2 — Booking Engine
Slot generation API
Slot availability API
Slot locking (Redis)
Appointment booking API
Email confirmation

## Week 3 — Admin Dashboard
Login & RBAC
Manage services
Manage capacity
Manage staff
Calendar view

## Week 4 — Final Features
Feedback system
Gallery integration
Full deployment
Testing + fixes