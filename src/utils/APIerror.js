class APIerror extends Error {
    constructor(
        statusCode,
        message = "Something went wrong", // Default message in case no message is provided
        error = [], // Optional array to hold error details
        stack = "" // Optional stack trace
    ) {
        super(message);
        
        // Attach properties to the error instance
        this.statusCode = statusCode;
        this.data = error;  // Use `error` as the value for `data`
        this.success = false;  // Fixed typo: 'succes' → 'success'
        this.message = message; // Inherited from `Error` constructor, but kept for clarity
        
        // Set the stack trace
        if (stack) {
            this.stack = stack;  // If a custom stack is provided
        } else {
            Error.captureStackTrace(this, this.constructor);  // Otherwise, capture stack automatically
        }
    }
}

export default APIerror;
