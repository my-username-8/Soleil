export function validateField(name, value) {
  switch (name) {
    case "name":
      return value.trim() === "" ? "Name is required." : "";
    case "email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value)
        ? "Please enter a valid email address."
        : "";
    }
    case "password":
      return value.length < 6 ? "Password must be at least 6 characters." : "";
    case "username":
      return value.length < 6 ? "Username must be at least 6 characters." : "";
    default:
      return "";
  }
}
