export const formatPhoneNumber = (phoneNumber: number | string): number | string => {
    const countryCode = phoneNumber.toString().slice(0, 1);
    const regionCode = phoneNumber.toString().slice(1, 4);
    const firstPart = phoneNumber.toString().slice(4, 7);
    const secondPart = phoneNumber.toString().slice(7, 9);
    const thirdPart = phoneNumber.toString().slice(9);

    const formattedNumber = `+${countryCode} (${regionCode}) ${firstPart}-${secondPart}-${thirdPart}`;

    return formattedNumber;
};

//79992220353
