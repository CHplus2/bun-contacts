# Bun Contacts

A simple contact form application built with **Bun** runtime and vanilla HTML/JS.  
Users can submit their name, email, and message, and view all saved contacts via a REST API.

## Features

- Submit contact information through a form
- View all submitted contacts
- REST API built using Bun’s built-in `serve` function
- Lightweight and easy to run (no external dependencies required)

## Project Structure

```

bun-contacts/
├─ index.js        # Bun server code
├─ frontend.html   # Static HTML frontend
├─ package.json    # Project metadata + start script
├─ README.md       # Project documentation
├─ .gitignore      # Optional 

````

## Getting Started

### Prerequisites

- Install **Bun**: [https://bun.sh](https://bun.sh)

### Running the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/bun-contacts.git
cd bun-contacts
````

2. Install dependencies (none required for now, but keep this for future packages):

```bash
bun install
```

3. Start the server:

```bash
bun start
```

4. Open your browser and go to:

```
http://localhost:3000
```


## Notes

* Currently, this project has **no external dependencies**, so `package.json` is mainly used for metadata and the start script.
* If you add new dependencies with `bun add <package>`, Bun will automatically update `package.json` and `bun.lockb`.
