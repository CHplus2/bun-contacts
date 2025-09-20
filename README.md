# Bun Contacts

A simple contact management web app built with **Bun.js**.  
It allows you to add contacts through a frontend HTML form and view saved contacts in real time.

## Features

- Add new contacts (Name, Email, Message) via a form.
- View all saved contacts.
- Built with **Bun.js** runtime and a lightweight server.
- No database required — data is stored in memory (resets on server restart).

## Project Structure

```

bun-contacts/
├─ index.js        # Bun server code
├─ frontend.html   # Simple HTML frontend
├─ package.json    # Project metadata & scripts

````

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/chplus2/bun-contacts.git
   cd bun-contacts
````

2. Install Bun (Windows / Mac / Linux):

   ```bash
   # Windows PowerShell
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

3. Run the server:

   ```bash
   bun index.js
   ```

4. Open your browser at `http://localhost:3000` to use the app.

## Notes

* Data is stored in memory, so all contacts are lost if the server restarts.
* This is a learning project to practice **Bun.js** and building lightweight APIs.

```

Do you want me to also **add badges** for Bun.js and Node version to make it look more professional?
```
