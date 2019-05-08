
function table(tableHeading,columnHeadings,rows)
{
    var table = "";
    var columns = columnHeadings.length;
    var idNum = 1;
    
    table+="<tr>"

    columnHeadings.forEach(function(heading)
    {
        table+="<th>" + heading + "</th>";
    })

    table+="</tr>"

    for (var i=0;i<rows;i++)
    {
        table+='<tr>';
        
        for(var j=0;j<columns;j++)
        {
            table+="<td id='block_"+idNum+"'>" +"block_"+ idNum + "</td>";
            idNum++;
        }
        table+='</tr>';
    }

    return "<h2>"+tableHeading+"<h2>"+"<table>" + table + "</table>";
}