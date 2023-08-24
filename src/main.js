// This is the entry point
// Browserify will bundle up everything here and put it in assets/js/main.js
// This enables everything to be run in the web browser

const onePlusTwo = require("./onePlusTwo");
const {
  getNumberOfCalendars,
  updateCalList,
  setupNewIcal,
  setupNewManual,
  addCalendar,
  viewCombinedCalendar,
  uploadIcal,
  uploadManual,
  openCalendar,
  formatModal,
  addManualModal,
  addIcalModal,
  calList,
  cellList,
  setCell,
  initializeCellListeners,
} = require("./manageCalendars");

const onDisplay = require("./onDisplay");

console.log(onePlusTwo());
