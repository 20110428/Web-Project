# News Application

A web application for managing news articles, built using Node.js, Express.js, and MySQL. The application supports multiple user roles with various functionalities: guest readers, subscribers, writers, editors, and administrators.

## Project Overview

This project is a news management system with the following features:
- **Guest** users can view and search articles.
- **Subscribers** can access premium content for a set duration.
- **Writers** can create, edit, and manage their articles.
- **Editors** can review and approve or reject articles submitted by writers.
- **Administrators** have full control over content, users, and categories.

## Features

- **Article Browsing:** Guests can browse by category or tag, view trending articles, and access full-text search.
- **Premium Content:** Subscribers have access to premium content for a limited time.
- **Article Management:** Writers can submit and edit articles, while editors approve or reject them.
- **User Management:** Administrators can manage users, assign roles, and manage categories and tags.
- **Authentication:** User authentication with session-based login, social media logins, and secure password handling.

## Technologies Used

- **Backend Framework:** Node.js with Express.js
- **Database:** MySQL (or compatible databases like PostgreSQL)
- **Authentication:** Passport.js
- **View Engine:** EJS or Handlebars
- **Styling:** CSS with additional carousel and slideshow effects
- **WYSIWYG Editors for Writers:** TinyMCE, CKEditor, Quill, or Summernote

## Project Structure
news_app/
├── app.js                     # Main application file
├── config/
│   └── db.config.js           # Database configuration
├── controllers/
│   ├── user.controller.js     # User-related logic
│   └── post.controller.js     # Post-related logic
├── models/
│   ├── User.js                # User model
│   ├── Post.js                # Post model
│   ├── Category.js            # Category model
│   └── Tag.js                 # Tag model
├── routes/
│   ├── index.js               # Main routes
│   ├── user.routes.js         # User routes
│   └── post.routes.js         # Post routes
├── views/
│   ├── index.ejs              # Homepage view
│   ├── login.ejs              # Login view
│   ├── register.ejs           # Registration view
│   ├── post.ejs               # Single post view
│   └── layout.ejs             # Layout template
├── public/
│   └── css/
│       └── style.css          # CSS styling
└── .env                       # Environment variables


## Getting Started

### Prerequisites

- **Node.js** (version >= 12)
- **MySQL** or **PostgreSQL** database
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/20110428/Web-Project.git
   cd news_app

