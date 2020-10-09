import { Component, OnInit } from '@angular/core';
import { Services } from './services/service';
import { Validators, FormGroup,FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  doForm: FormGroup;
  works=[];
//check: boolean
 
  constructor (private service: Services, private formBuilder: FormBuilder ){ }
  ngOnInit(){
    this.doForm= this.formBuilder.group({
      title:['',[Validators.required]],
      
    })
    this.works= this.service.findAll()
    //console.log(this.works)
  }
  
  add(){
    this.service.add(this.doForm.value.title);
    this.works= this.service.findAll();
    //console.log(this.doForm.value.title)
  }

  delete(index){
      this.service.delete(index)
      this.works =this.service.findAll();
  }
  
  select(index){
    this.service.select(index)
    this.works =this.service.findAll();
  }

  del(){
    this.service.del()
    this.works =this.service.findAll();
    //console.log(this.checks)
  }
  check:boolean=false
 
  ind(i){
  this.service.ind(i)
   if(this.check!=true){
    this.check=true
    //console.log(this.check)
   }
  //  else{
  //   this.check=false
  //   //console.log(this.check)
  // }
  this.works= this.service.findAll();
  
  
 }
  
}
