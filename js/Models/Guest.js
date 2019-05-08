function Guest(first_name, last_name, quantity)
{
    const event_guest_first_name    = first_name;
    const event_guest_last_name    = last_name;
    const event_guest_quantity      = quantity;

    this.getName = function()
    {
        return event_guest_first_name+" "+event_guest_last_name;
    }

    this.getQuantity = function()
    {
        return event_guest_quantity;
    }
}