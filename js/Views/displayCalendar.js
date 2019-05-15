
function displayCalendar(CurrentMonth)
{
    table = "";
    day_titles = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    columns = day_titles.length;
    idNum = 1;

    dayIndex = 0;
    
    table+="<tr>"

    day_titles.forEach(function(day)
    {
        table+="<th>" + day + "</th>";
    })

    table+="</tr>"

    for (var i=0;i<6;i++)
    {
        table+='<tr>';
        
        for(var j=0;j<columns;j++)
        {
            //Table blocks before Days in Current Month
            if(i<1 && j<(CurrentMonth.getFirstDay()) )
            {
                table+="<td class='block_'> </td>";
            }
            //Table blocks after Days in Current Month
            else if( (dayIndex+1)>CurrentMonth.getDayCount())
            {
                table+="<td class='block_'> </td>";
            }
            //Table blocks of Days in Current Month
            else
            {
                currentDay = CurrentMonth.getExactDay(dayIndex+1);
                
                table+="<td class='day'>";
                table+=currentDay.getDayNumber()+"<br><br>"; 
                table+="Events: "+currentDay.getEventCount();
                table+="</td>";
                dayIndex++;
            }

            idNum++;
        }
        table+='</tr>';
    }

    calendar = "";
    calendar+= "<h2>"+CurrentMonth.getTitle();
    calendar+= "  "+CurrentMonth.getYear()+"</h2>";
    calendar+= "<table>"+table+"</table>";

    document.write(calendar);
}