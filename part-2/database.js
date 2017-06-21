allitems(){
  SELECT * FROM contacts
};

itemsInSection(arg1){
  SELECT ID, name FROM movies WHERE section = arg1;
}

itemsInSection('dairy');

cheapItems(){
  SELECT ID, price FROM contacts WHERE price <= 10;
}


countItemsInSection(arg1){
  SELECT count(*) FROM grocery WHERE section = arg1;
}

countItemsInSection('dairy')


mostRecentOrders(){
  
}
//The SQL ORDER BY clause is used to sort the data in ascending or descending order,
