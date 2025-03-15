import { neon } from "@neondatabase/serverless";

// Load environment variables
import { config } from "dotenv";
config();  // Make sure .env.local is loaded

const sql = neon(process.env.DATABASE_URL!);  // Use your actual DATABASE_URL here

const testConnection = async () => {
  try {
    // Execute a simple query using neon
    const result = await sql`SELECT 1`;  // Using the tagged template literal to execute a query
    console.log("Connection successful:", result);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

testConnection();
