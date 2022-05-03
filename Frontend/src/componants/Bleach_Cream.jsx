import { Producthead } from "./pagesHead";
import { Products } from "./products";
import { useState } from "react";
 export const BleachCream=()=>{
     const [data,setData]=useState({
         head:"Bleach Cream",
         info:"Providing you the best range of Fruit Bleach, Gold Bleach and Personal Bleach with effective & timely delivery.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg",
                 head:"Fruit Bleach",
                 info:["Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fairlook."]

             },
             {
                 img:"https://3.imimg.com/data3/GE/KN/MY-3792183/gold-bleach-500x500.jpg",
                 head:"Gold Bleach",
                 info:["Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fair look."]

            },
            {
                 img:"https://3.imimg.com/data3/PO/CT/MY-3792183/personal-bleach-500x500.jpg",
                 head:"Personal Bleach",
                 info:["Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fair look."]

            },
          
        ]
     })

     return <div>
         <Producthead productData={data}></Producthead>
         <Products products={data}></Products>
     </div>
 }