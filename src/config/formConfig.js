export const formConfig = {
    fields: [
      { name: "username", type: "text", label: "Username", placeholder: "Enter username", validation: { required: true, minLength: 3 } },
      { name: "email", type: "email", label: "Email", placeholder: "Enter email", validation: { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ } },
      { name: "age", type: "number", label: "Age", placeholder: "Enter age", validation: { required: false, min: 1 } },
    ],
    submitButton: { label: "Submit" },
  };