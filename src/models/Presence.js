// Presence.js
import Attendance from './Attendance'; // Adjust the path as necessary based on your project structure

class Presence {
  constructor(month, data) {
    this.month = month; // String, e.g., "Januari"
    this.data = data.map(
      item =>
        new Attendance(item.in, item.out, item.statusPresence, item.isReturn),
    ); // Array of Attendance objects
  }
}

export default Presence;
