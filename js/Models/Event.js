
//when using database
//Event(id) and properties come from database
function Event(id, title, date, photo, max_seat_count, time_start, time_end)
{
    event_id                  = id;
    event_title               = title;
    event_date                = date;
    event_photo               = photo;
    event_max_seat_count      = max_seat_count;
    event_actual_seat_count   = 0;
    event_guest_list          =[""];
    event_time_start          = time_start;
    event_time_end            = time_end;
    
    //******** Get functions ***************
    this.getEventID = function()
    {
        return event_id;
    }

    this.getTitle = function()
    {
        return event_title;
    }

    this.getDate = function()
    {
        return event_date;
    }

    this.getPhoto = function()
    {
        return event_photo;
    }

    this.getMaxSeats =function()
    {
        return event_max_seat_count;
    }

    this.getSeatCount = function()
    {
        return event_actual_seat_count;
    }

    this.getGuestList = function()
    {
        return event_guest_list;
    }

    this.getStartTime = function()
    {
        return event_time_start;
    }

    this.getEndTime = function()
    {
        return event_time_end;
    }

    //******** Set/edit functions for Event Object *****
    this.setTitle = function(newTitle)
    {
        event_title = newTitle;
    }

    this.setDate = function(newDate)
    {
        event_date = newDate;
    }

    this.setPhoto = function(newPhoto)
    {
        event_photo = newPhoto;
    }

    this.setMaxGuests = function(newMaxGuests)
    {
        event_max_seat_count = newMaxGuests;
    }

    this.addGuest = function(Guest)//guest,quantity)
            //guest can sign up for multiple guests assuming 1 name
    {
        if( (event_actual_seat_count + Guest.getQuantity() ) <= event_max_seat_count)
        {
            event_guest_list.push(Guest.getName());
            event_actual_seat_count+= Guest.getQuantity();
        }
        else
        { 
            console.log("Failed to add Guests"+
                            "\nGuests:"+ event_actual_seat_count+
                                "\nMax Guests:"+event_max_seat_count+
                                    "\nTrying to Add:"+Guest.getQuantity()+" Guests"+
                                        "\nOnly "+(event_max_seat_count-event_actual_seat_count) +
                                            " seats available");
        }
    }

    this.deleteGuest = function(Guest)
            //guest can sign up for multiple guests assuming 1 name
    {
        
        //have guest qty of guests to delete
        console.log("actual - guest qty: "+(event_actual_seat_count - Guest.getQuantity())+"\n");
        if( (event_actual_seat_count - Guest.getQuantity() ) > 0)
        {
            function findName(name)
            {
                return name === Guest.getName();
            }
            //finds Guest.getname index in event_guest_list else -1
            guest_index = event_guest_list.findIndex(findName);

            //if Guest.getName found in array
            if(guest_index > 0)
            {
                event_guest_list.splice(guest_index,1);
                event_actual_seat_count-=Guest.getQuantity();
            }

            //Guest not found
            else
            {
                console.log("Could not delete Guest, Guest Not Found");
            }
        }
        //guest qty higher than actual seats
        else
        { 
            console.log("Failed to delete Guests"+
                            "\nGuests:"+ event_actual_seat_count+
                                "\nTrying to Delete:"+Guest.getQuantity()+" Guests");
        }
    }

    this.setStartTime = function(startTime)
    {
        event_time_start = startTime;
    }

    this.setEndTime = function(endTime)
    {
        event_time_end = endTime;
    }
}




