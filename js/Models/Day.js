
function Day(dayNumber)
{
    const day_number  = dayNumber;
    event_id_list   = [];
    event_count     = 0;

    //******** Get functions ***************
    this.getDayNumber = function()
    {
        return day_number;
    }

    this.getEvents = function()
    {
        return event_id_list;
    }

    this.getEventCount = function()
    {
        return event_count;
    }

    //******** Set functions ***************
    this.addEvent = function(EventID)
    {
        event_id_list.push(EventID);
        event_count++;
    }

    this.deleteEvent = function(EventID)
    {
        //have EventIDs to delete
        if( event_count > 0)
        {
            function findEventID(currentEventID)
            {
                return currentEventID === EventID;
            }

            //EventID index in event_id_list else -1
            event_id_list_index = event_id_list.findIndex(findEventID);

            //if EventID found in array
            if(event_id_list_index > 0)
            {
                event_guest_list.splice(event_id_list_index,1);
                event_count--;
            }

            //Guest not found
            else
            {
                console.log("Could not delete Event, Event Not Found\n");
            }
        }
        //guest qty higher than actual seats
        else
        { 
            console.log("Failed to delete Event"+
                            "\nEvent qty:"+ event_count+"\n");
        }
    }
}