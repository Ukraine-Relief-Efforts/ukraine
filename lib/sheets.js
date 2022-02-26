import { google } from "googleapis";

const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const jwt = new google.auth.JWT(
  process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_SHEETS_PRIVATE_KEY,
  scopes
);

const sheets = google.sheets({ version: "v4", auth: jwt });
export default sheets;
