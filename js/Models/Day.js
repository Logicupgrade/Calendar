
function Day(dayNumber)
{
    const day_number    = dayNumber;
    event_array         = [];
    event_count         = 0;

    //******** Get functions ***************
    this.getDayNumber = function()
    {
        return day_number;
    }

    this.getEvents = function()
    {
        return event_array;
    }

    this.getEventCount = function()
    {
        return event_count;
    }

    //******** Set functions ***************
    this.addEvent = function(Event)
    {
        //may wish to incorporate max event count
        event_array.push(Event);
        event_count++;
    }

    this.deleteEvent = function(Event)
    {
        //have Events to delete
        if( event_count > 0)
        {
            function findEvent(currentEvent)
            {
                return currentEvent.getID() == Event.getID();
            }

            //EventID index in event_id_list else -1
            event_list_index = event_array.findIndex(findEvent);

            //if EventID found in array
            if(event_list_index > 0)
            {
                event_array.splice(event_list_index,1);
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