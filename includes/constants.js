/*
This module contains user defined constants used in the project
*/

// Data split
const TRAINING_MONTHS = 15;
const TESTING_MONTHS = 3;
const VALIDATION_MONTHS = 3;
// Compute the intervals to filter by.
const TESTING_START_MONTHS = TESTING_MONTHS;
const VALIDATION_START_MONTHS = TESTING_START_MONTHS + VALIDATION_MONTHS;
const TRAINING_START_MONTHS = VALIDATION_START_MONTHS + TRAINING_MONTHS;

// Inference months
const INFERENCE_MONTHS_REQUIRED = 2

// Model
const MODEL = "availability";

module.exports = {TESTING_START_MONTHS, VALIDATION_START_MONTHS, TRAINING_START_MONTHS, INFERENCE_MONTHS_REQUIRED, MODEL};
