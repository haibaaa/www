---
published: true
name: TCCS
description: Backend web application with type-safe database access and RESTful APIs.
thumbnail: thumbnail.png
images: [thumbnail.png]
date: 2025-05-01
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

TCCS is a backend web application built with Java, Javalin, and jOOQ for type-safe database access.

## features

- **Type-safe database access** via jOOQ code generation from PostgreSQL schemas
- **RESTful API endpoints** for data management and business logic
- **PostgreSQL** database with automated schema management

## implementation

The application uses Javalin as the web framework and jOOQ for compile-time SQL verification. PostgreSQL schemas drive automated code generation, ensuring database consistency throughout the application.

## tech stack

- **Java** — primary language
- **Javalin** — web framework
- **jOOQ** — type-safe database access
- **PostgreSQL** — relational database
