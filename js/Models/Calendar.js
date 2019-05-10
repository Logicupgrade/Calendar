
class Calendar{
    
    constructor(){
        this.today = new Date();
        this._monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "Septempber", "October", "November", "December"];
    }

    
    getCurrentDay(){
        return this.today;
    }

    // Returns String
    getCurrentMonth(format = 'name'){
        let month = '';
        if(format === 'name'){
            month = this._monthNames[this.today.getMonth()];
        }
        if(format === 'integer'){
            month = this.today.getMonth();
        }
        
        return month;
    }

    // Returns Integer
    getCurrentYear(){
        return this.today.getFullYear();
    }

    draw(year,month,events){

        // Set defualts if year or month is undefined to avoid errors.
        year = (typeof year === 'undefined' ? this.getCurrentYear():year);
        month = (typeof month === 'undefined' ? this.getCurrentMonth('integer'):month);

        let firstDay = (new Date(year, month)).getDay();
        console.log(firstDay);

    }

};

[{id:1,description:'hello sup'},{id:3}]

0,1



$('.delete').on('click', function(){

    var event = $(this).data('event').id

    jsonEvent[event].description
})


$event = new Event();
$event->setDate('4882');
$event->setDescription();
$event->save();


$event->delete();





static 

$one = Event::findByID('4');
$one->delete();









