var restaurantlist=[
    {
        restaurantname:"food adda",
        address:"borivali-west",
        city:"mumbai"
    },
    {
        restaurantname:"mcDonald's",
        address:"Miraroad",
        city:"Mumbai"
    },
    {
        restaurantname:"Shalimar",
        address:"Mohammad Ali Road",
        city:"Ahmedabad"
    }
]

    function printAllRestaurantNames()
        {
            for(var i=0;i<=restaurantlist.length;i++)
            {
                 console.log(restaurantlist[i].restaurantname)
            }
        }
    
    function filterRestaurantByCity(cityname)
        {
            for(var i=0;i<=restaurantlist.length;i++)
            {
                if(restaurantlist[i].city=="Ahmedabad")
                {
                    console.log(restaurantlist[i].restaurantname)
                }
            }
        }

