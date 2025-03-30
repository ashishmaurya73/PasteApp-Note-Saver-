export const FormatDate = (date)=>{
    // Ensure the date is a valid Date object
    const _date=new Date(date);

    // check if the date is valid 

    if(isNaN(_date)){
        console.error("Invalid date");
        return "Ivalid Date";
    }

    // Format the date using Intl.DatetimeFormat
    const formattedDate=new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(_date);

    return formattedDate;
};