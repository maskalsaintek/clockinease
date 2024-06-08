// Attendance.js
class Attendance {
  constructor(inTime, outTime, statusPresence, isReturn) {
    this.in = inTime; // String or null, in format "HH:MM:SS"
    this.out = outTime; // String or null, in format "HH:MM:SS"
    this.statusPresence = statusPresence; // String, status of the presence
    this.isReturn = isReturn; // Boolean, indicates if the return status
  }
}

export default Attendance;
