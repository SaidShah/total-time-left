export function calculateDays(firstDate: string, secondDate: string): number {
    const startingDate:string[] = firstDate.split(" ");
    const endingDate:string[]   = secondDate.split(" ");
    const firstMonth = _getMonth(startingDate[1]);
    console.log("first month " , firstMonth);
    const secondMonth = _getMonth(endingDate[1]);
    console.log('Second Date ', secondMonth)
// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const firstDate = new Date(2008, 1, 12);
// const secondDate = new Date(2008, 1, 22);
    return -1;
}

function _getMonth(givenValue: string): number {

    switch(givenValue) {
        case "Jan":
            return 1;
        case "Feb":
            return 2;
        case "Mar":
            return 3;
        case "Apr":
            return 4;
        case "May":
            return 5;
        case "Jun":
            return 6;
        case "July":
            return 7;
        case "Aug":
            return 8;
        case "Sep":
            return 9;
        case "Oct":
            return 10;
        case "Nov":
            return 11;
        case "Dec":
            return 12;
        default:
            return 0;
    }
}