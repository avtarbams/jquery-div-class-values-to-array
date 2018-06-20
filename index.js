// use get() method to get all div with the specified classname and map() function to push values in the array.
//By far the cleanest way to push div values into array using jquery

function combineBudgets(){
        var itemDesArray = $('.itemDesClass').get().map(function(e) { return e.value });
        var productInfoArray = $('.prodClass').get().map(function(e) { return e.value });
        var costArray = $('.costClass').get().map(function(e) { return e.value });
        var numberOfItemArray = $('.numberClass').get().map(function(e) { return e.value });
        var budgetArray = new Array();
        budgetArray['itemDescription'] = itemDesArray;
        budgetArray['productInfo'] = productInfoArray;
        budgetArray['cost'] = costArray;
        budgetArray['numberOfItem'] = numberOfItemArray;
        return budgetArray;
    }
