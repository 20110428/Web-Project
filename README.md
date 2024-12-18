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
├── app.js                      # File chính của ứng dụng
├── package.json                # Khai báo dependencies và scripts
├── package-lock.json           # Khóa version dependencies
├── config/
│   ├── db.config.js            # Cấu hình database
│   ├── passport.config.js      # Cấu hình PassportJS
├── controllers/
│   ├── user.controller.js      # Xử lý logic người dùng
│   ├── post.controller.js      # Xử lý logic bài viết
│   ├── auth.controller.js      # Xử lý logic xác thực
├── models/
│   ├── User.js                 # Model người dùng
│   ├── Post.js                 # Model bài viết
│   ├── Category.js             # Model chuyên mục
│   ├── Tag.js                  # Model nhãn
├── routes/
│   ├── index.js                # Routes chính
│   ├── user.routes.js          # Routes người dùng
│   ├── guest.routes.js         # Routes độc giả vãng lai
│   ├── auth.routes.js          # Routes xác thực người dùng
│   ├── writer.routes.js        # Routes cho phóng viên
├── public/
│   ├── html/
│   │   ├── index.html          # Trang chủ
│   │   ├── category.html       # Danh sách bài viết
│   │   ├── article.html        # Chi tiết bài viết
│   │   ├── search.html         # Kết quả tìm kiếm
│   │   ├── write.html          # Trang đăng bài viết (phóng viên)
│   ├── css/
│   │   ├── index.css           # CSS trang chủ
│   │   ├── category.css        # CSS danh sách bài viết
│   │   ├── article.css         # CSS chi tiết bài viết
│   │   ├── search.css          # CSS kết quả tìm kiếm
│   ├── images/
│   │   └── placeholder.jpg     # Ảnh mẫu
│   ├── uploads/                # Lưu trữ ảnh bài viết
├── .env                        # Biến môi trường

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

