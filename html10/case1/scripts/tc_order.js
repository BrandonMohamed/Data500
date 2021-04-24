"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Brandon Mohamed
   Date:   03-26-21
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

// The item array contains the ID numbers of the items ordered by the customer
var item = [10582, 23015, 41807,10041];

// The itemDescription array contains the description of each item
var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582", 
						"Tom Landry 1955 Football Card (unsigned), Item 23015", 
						"1916 Army-Navy Game, Framed Photo (signed), Item 41807",
						"Protective Card Sheets, Item 10041"];

// The itemPrice array contains the price of each item
var itemPrice = [149.93, 89.98, 334.93,22.67];

// The itemQty array contains the quantity ordered of each item
var itemQty = [1, 1, 1, 4];

var itemArrayLength = item.length;

var itemCost = itemPrice[i]*itemQty[i];