// This file now acts as a wrapper around the SQLite database functions
// No actual model definition is needed since we're using SQL directly

// Re-export the database functions
import db from "../lib/db";

export default db;
