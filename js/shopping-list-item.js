class ShoppingListItem{
    constructor(name, description){
      this.name = 'name';
      this.description = 'description'; 
      this.isDone = false;
    }

    check(){
        return this.isDone = true;
    };

    unCheck(){
        this.isDone = true;
        return this.isDone = false;
    };  

    
  };