---
published: true
order: 5
name: tccs
description: Logistics and transport management backend with type-safe database access and RESTful APIs.
github: https://github.com/haibaaa/tccs
date: 2025-05-01
---

TCCS is a backend web application for logistics and transport management, built with Java, Javalin, and jOOQ for type-safe database access.

## features

- **Consignment management** — track shipments through the pipeline
- **Truck allocation** — assign vehicles to consignments with pricing
- **Dispatch tracking** — manage delivery lifecycle
- **User authentication** — role-based access control (Admin, Operator, Driver)
- **Dashboard and reporting** — real-time statistics and analytics
- **RESTful API endpoints** for all operations

## implementation

The application uses Javalin as the web framework and jOOQ for compile-time SQL verification. PostgreSQL schemas drive automated code generation, ensuring database consistency throughout the application. The service layer separates business logic from HTTP handling, with dedicated handlers for each domain (Allocation, Consignment, Dispatch, Pricing, Truck, User).

## tech stack

- **Java** — primary language
- **Javalin** — web framework
- **jOOQ** — type-safe database access via code generation
- **PostgreSQL** — relational database
- **Maven** — build and dependency management
