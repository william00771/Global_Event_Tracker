export const logFormData = (formData: FormData) => {
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
};