import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import {  IDropdownSettings,} from 'ng-multiselect-dropdown';





@Component({
  selector: 'app-jobber',
  templateUrl: './jobber.component.html',
  styleUrls: ['./jobber.component.css']
  
})
export class JobberComponent implements OnInit  {
  

  
  demo = new FormGroup({
    dropdown: new FormControl(''),
    field: new FormControl('', Validators.required),
    addquestion: new FormControl('',Validators.required),
    addquestion1:new FormControl(''), 
    addNegativequestion: new FormControl('',Validators.required),
    addNegativequestion1: new FormControl(''),
    evidence:  new FormControl('',Validators.required),
    poor: new FormControl('',Validators.required),
    Area_of_concern: new FormControl('',Validators.required),
    Satisfactory: new FormControl('',Validators.required),
    ADD_GRADE: new FormControl('',Validators.required),
    
    });


    
  
  result = [];

  servicesfeature_id: any = [];
  servicesfeature_length: number = 0;
  servicesfeature_id1:any = [];
  servicesfeature_length1: number = 0;
  update = '';
  update1 = '';
  upadte2 = '';
  items: any;
  service: any;
  
  // const question = []
  
   


  ngOnInit(): void {
  }


      addFeature(){
        this.servicesfeature_id.push( this.servicesfeature_length);
        this.servicesfeature_length += 1;
      }

          deleteFeature(d)
          {
            if (d !== -1) this.servicesfeature_id.splice(d, 1);
            
          }
            addNegativeFeature()
            {
              this.servicesfeature_id1.push(this.servicesfeature_length1);
              this.servicesfeature_length1 += 1;
            }
              deleteNegativeFeature(d1)
              {
                if (d1!== -1) this.servicesfeature_id1.splice(d1, 1);
                    
                  }
                
      public showRate;
      public selectionModel;
      public data = [
        {        
                id: 0,
                title:'Item 1 '
              }, 
              {       
                id: 1,          
                title:'Item 2',
          
                subs: [
                  {    
                    d: 10,          
                    title:'Item 2-1'          
                  }, 
                  {        
                    id: 11,          
                    title:'Item 2-2'        
                  }, 
                  {          
                    id: 12,          
                    title:'Item 2-3'          
                  }          
                ]          
              }, 
              {          
                id: 2,        
                title:'Item 3'          
              },
          
              
        
          ];
     
      

    
    // public rateData:any[]=[
    //       {
    //         rate: 10,
    //         name: "Java",
    //       },
    //       {
    //         rate: 20,
    //         name: "cpp",
    //       },
    //       {
    //         rate: 30,
    //         name: "Networking",
    //       }
    // ]
    

    submitted = false;

    get fval() {
      return this.demo.controls;
      }

    
    loginSubmit(v) {
      // const question = []
      this.submitted = true;
      
      if (this.demo.invalid) {
        return;
        }
        alert('form fields are validated successfully!');
        this.result.push(v); 
        this.demo.reset();
    
                  
    }
    
    Reset()
    {
      if (this.demo.valid) {
        console.log("Form Submitted!");
        this.demo.reset();
      }
    }
      
    edit(a){
        this.demo = new FormGroup({
        dropdown: new FormControl(this.result[a].dropdown),
        field: new FormControl(this.result[a].field),
        addquestion: new FormControl(this.result[a].addquestion),
        addquestion1:new FormControl(this.result[a].addquestion1), 
        addNegativequestion: new FormControl(this.result[a].addNegativequestion),
        addNegativequestion1: new FormControl(this.result[a].addNegativequestion1),
        evidence:  new FormControl(this.result[a].evidence),
        poor: new FormControl(this.result[a].poor),
        Area_of_concern: new FormControl(this.result[a].Area_of_concern),
        Satisfactory: new FormControl(this.result[a].Satisfactory),
        ADD_GRADE: new FormControl(this.result[a].ADD_GRADE),
        
        });   
        
    }
    
      }  
      
  





