import { Injectable } from '@angular/core';


@Injectable()

export class Services{
    
   findAll(){
        if(localStorage.getItem('key')!= null){
            return JSON.parse(localStorage.getItem('key'));
        }
        return null;
    }
    
    add (title){
       var obj={
            item:title,
            strike:'false',
            selected:'false'
        }
        if(localStorage.getItem('key') == null){
            let list=[];
            //let strike: boolean= false;
            list.push(obj);
           localStorage.setItem('key',JSON.stringify(list));
        }  

        else{
            let list= JSON.parse(localStorage.getItem('key'));
            list.push(obj);
            localStorage.setItem('key', JSON.stringify(list));
            //console.log(obj)   
        }
       
    }


    delete (index: number){
        let list=JSON.parse(localStorage.getItem('key'))
        list.splice(index,1); 
        localStorage.setItem('key', JSON.stringify(list));
    }

    select(index){
        let list=JSON.parse(localStorage.getItem('key'))
        //console.log(list[index].strike)
        if(list[index].strike!=true){
            list[index].strike = true
            localStorage.setItem('key', JSON.stringify(list));
           // console.log(list[index].strike)
        }else{
             list[index].strike=false
             localStorage.setItem('key', JSON.stringify(list));
            // console.log(list[index].strike)
        } 
    }

    
    
    del(){
        let list =JSON.parse(localStorage.getItem('key'));
         list= list.filter(function (selected){
            return selected.selected!=true
        })
        localStorage.setItem('key', JSON.stringify(list));
    }
    
    ind(index){
        let list= JSON.parse(localStorage.getItem('key'))
        if(list[index].selected!=true){
            list[index].selected=true;
            localStorage.setItem('key',JSON.stringify(list));
        }else{
            list[index].selected=false;
            localStorage.setItem('key',JSON.stringify(list));
            
        }
       
        
    }
}