export default {
    //schema for our banner
    name: 'banner',
    title: 'Banner',
    type: 'document',
    // fields for our bannert based on name 
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {//large text field
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },
        {   // discount field
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {   //sale time field
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ],
  };