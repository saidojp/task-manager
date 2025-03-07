// SQLite database connection using sqlite3 directly
import sqlite3 from "sqlite3";
import path from "path";
import { open } from "sqlite";

// Database file path
const dbPath = path.join(process.cwd(), "tickets.sqlite");

// Create a SQLite database connection
let db = null;

async function openDb() {
  if (db) return db;

  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  console.log("SQLite database connection has been established successfully.");

  // Create tickets table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      priority INTEGER,
      progress INTEGER,
      status TEXT,
      active BOOLEAN DEFAULT 1,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("Database schema initialized successfully.");

  return db;
}

// Initialize the database connection
openDb();

// Function to get all tickets
export async function getAllTickets() {
  const db = await openDb();
  return db.all("SELECT * FROM tickets ORDER BY createdAt DESC");
}

// Function to get a ticket by ID
export async function getTicketById(id) {
  const db = await openDb();
  return db.get("SELECT * FROM tickets WHERE id = ?", id);
}

// Function to create a new ticket
export async function createTicket(ticketData) {
  const db = await openDb();
  const { title, description, category, priority, progress, status, active } =
    ticketData;

  const result = await db.run(
    `INSERT INTO tickets (title, description, category, priority, progress, status, active)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      title,
      description,
      category,
      priority,
      progress,
      status,
      active === undefined ? 1 : active,
    ]
  );

  return result.lastID;
}

// Function to update a ticket
export async function updateTicket(id, ticketData) {
  const db = await openDb();
  const { title, description, category, priority, progress, status, active } =
    ticketData;

  // Update the updatedAt timestamp
  const now = new Date().toISOString();

  await db.run(
    `UPDATE tickets SET 
      title = ?, 
      description = ?, 
      category = ?, 
      priority = ?, 
      progress = ?, 
      status = ?, 
      active = ?,
      updatedAt = ?
     WHERE id = ?`,
    [title, description, category, priority, progress, status, active, now, id]
  );

  return getTicketById(id);
}

// Function to delete a ticket
export async function deleteTicket(id) {
  const db = await openDb();
  await db.run("DELETE FROM tickets WHERE id = ?", id);
}

export default {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
