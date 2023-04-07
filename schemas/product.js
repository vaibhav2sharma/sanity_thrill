export default{
    // field for products
    name:'product',
    title:'Product',
    type:'document',
    //for every products we have this fields
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],

            options:{
                hotspot:true,
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string'


        },
        {
            //slug is like a url this is how we create sanity schema
            name:'slug',
            title:"Slug",
            type:'slug',
            options:{
                //every slug will be craeated for every product name
                source:'name',
                maxLength:90,
            }
        },
        //price field in schema
        {
            name:'price',
            title:'Price',
            type:'number'


        },
        {//detail schema field
          name:'details',
          title:'Details',
          type:"string"
        },
        
        {
            name : 'dates',
            title : "Dates",
            type : 'string'
        },
            // itenary schema
        {
            name : 'day_1', 
            title: 'Day_1_Itinerary',
            type : 'string'


        },
        {
            name : 'day_2', 
            title: 'Day_2_Itinerary',
            type : 'string'


        },
        {
            name : 'day_3', 
            title: 'Day_3_Itinerary',
            type : 'string'


        },
        {
            name : 'day_4', 
            title: 'Day_4_Itinerary',
            type : 'string'


        },
        {
            name : 'day_5', 
            title: 'Day_5_Itinerary',
            type : 'string'


        },
        {
            name : 'day_6', 
            title: 'Day_6_Itinerary',
            type : 'string'


        },
        {
            name : 'day_7', 
            title: 'Day_7_Itinerary',
            type : 'string'


        },
        

        
        
    
    ]

}