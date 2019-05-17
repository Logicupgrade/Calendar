function Month(monthNumber,yearNumber)
{
    //current month number (starting at 0)
    year                    = yearNumber;
    month_of_year           = monthNumber;
    month_titles            = ["January","February","March","April",
                                "May","June","July","August",
                                "September","October","November","December"];
    current_month_title     = month_titles[monthNumber];

    //number of days in current month
    number_of_days          = new Date(yearNumber,(monthNumber+1),0); //monthNumber starts at 0 this does not
    number_of_days          =number_of_days.getDate();

    //Number of first day of month (0-6 : sun-sat)
    first_day_of_month      = new Date(yearNumber,(monthNumber),1);
    first_day_of_month      = first_day_of_month.getDay();

    //Creating Array of Days for every day in month
    day_array               = [];

    for(i=1;i<(number_of_days+1);i++)
    {
        day_array.push(new Day(i));
    }

    //******** Get functions ***************
    this.getYear = function()
    {
        return year;
    }
    
    this.getTitle = function()
    {
        return current_month_title;
    }

    this.getMonthNumber = function()
    {
        return month_of_year;
    }

    this.getDayCount = function()
    {
        return number_of_days;
    }

    this.getFirstDay = function()
    {
        return first_day_of_month;
    }

    this.getDays = function()
    {
        return day_array;
    }

    this.getExactDay = function(dayNumber)
    {
        if( (dayNumber < (day_array.length + 1) ) && (dayNumber > 0) )
        {
            console.log("array Length:"+day_array.length);
            return day_array[dayNumber-1];
        }

        else
        {
            console.log("Invalid Day Number");
        }
    }

}