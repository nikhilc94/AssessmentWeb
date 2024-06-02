export const Regex: any = {
  // Alphanumeric with atleast 8 characters
  PASSWORD: /^[a-zA-Z0-9]{8,30}$/,

  USERNAME: {
    // Alphanumeric with atleast 5 characters
    AE: /^[a-zA-Z0-9]{5,30}$/,

    // Atleast 6 characters & 1 @ or _
    IN: /^(?=.*[@_])[a-zA-Z0-9@_]{6,30}$/,

    // Alphanumeric with atleast 6 characters & 1 number
    SA: /^(?=.*[0-9])[a-zA-Z0-9]{6,30}$/,

    // Alphanumeric with atleast 9 characters
    EG: /^[a-zA-Z0-9]{9,30}$/,
  },
};
