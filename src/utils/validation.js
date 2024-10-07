// utils/validation.js

// A simple function to check required fields
export const isRequired = 
(value) => value !== null &&
 value !== undefined && value !== '';

// Check if the value meets a minimum length
export const minLength = (value, length) =>
   value && value.length >= length;

// Validate a pattern, like an email regex
export const matchesPattern = (value, pattern) => pattern.test(value);

// Main function to validate the form based on config
export const validateForm = (fields, formData) => {
  const errors = {};
  

  fields.forEach((field) => {
    const value = formData[field.name];

    // Check if the field is required and missing
    if (field.validation?.required && !isRequired(value)) {
      errors[field.name] = `${field.label} is required`;
    }

    // Check for minimum length validation
    if (field.validation?.minLength && !minLength(value, field.validation.minLength)) {
      errors[field.name] = `${field.label} must be at least ${field.validation.minLength} characters`;
    }

    // Check for pattern matching (e.g., email)
    if (field.validation?.pattern && !matchesPattern(value, field.validation.pattern)) {
      errors[field.name] = `${field.label} is invalid`;
    }
  });

  return errors;
};
