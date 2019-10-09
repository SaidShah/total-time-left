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

export const checkDays:any = (firstDate: string, secondDate: string) => {
    const startingDate:string[] = firstDate.split(" ");
    const endingDate:string[]   = secondDate.split(" ");
    const firstMonth:number     = _getMonth(startingDate[1]);
    const secondMonth:number    = _getMonth(endingDate[1]);
    const oneDay:number         = 24 * 60 * 60 * 1000;
    const startDate:Date        = new Date(parseInt(startingDate[3], 10), firstMonth-1, parseInt(startingDate[2], 10));
    const endDate:Date          = new Date(parseInt(endingDate[3], 10), secondMonth-1, parseInt(endingDate[2], 10));
    if(startDate > endDate) {
        return -1;
    }
    return Math.floor(Math.abs(startDate.getTime() - endDate.getTime()) / oneDay);
};

export default checkDays;