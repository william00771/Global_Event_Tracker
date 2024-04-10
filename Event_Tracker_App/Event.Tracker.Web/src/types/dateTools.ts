export const formatDateToStartDateEndDate = (date: Date) => {
    const startDate = date.getDate();
    const endDate = date.getDate() + 1;
    const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const year = date.getFullYear();
    
    return `${startDate}th - ${endDate}th ${monthFormat}, ${year}`;
}

export const formatDateAndDurationToHours = (startDateTime: Date, durationHours: number) => {
    const endDateTime = new Date(startDateTime.getTime() + durationHours * 60 * 60 * 1000);
  
    const startHour = startDateTime.getHours();
    const startMinute = startDateTime.getMinutes();
    const startAmPm = startHour >= 12 ? 'pm' : 'am';
    const formattedStartHour = startHour % 12 === 0 ? 12 : startHour % 12;
    const formattedStartMinute = String(startMinute).padStart(2, '0');
    const formattedStartTime = `${formattedStartHour}:${formattedStartMinute}${startAmPm}`;
  
    const endHour = endDateTime.getHours();
    const endMinute = endDateTime.getMinutes();
    const endAmPm = endHour >= 12 ? 'pm' : 'am';
    const formattedEndHour = endHour % 12 === 0 ? 12 : endHour % 12;
    const formattedEndMinute = String(endMinute).padStart(2, '0');
    const formattedEndTime = `${formattedEndHour}:${formattedEndMinute}${endAmPm}`;
  
    return `${formattedStartTime} - ${formattedEndTime}`;
}