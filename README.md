## :heart: Star :heart: the repo to support the project or :smile:[Follow Me](https://github.com/harsh6768).Thanks!

# mysql-tuts
This project contains all the important concept of MySql Database


### 1. Play With JSON: 

APIS: 
1. Insert Json Data to DB:  

   API: localhost:8000/insert-json
   
   METHOD: POST
   
   body: 
   
              {
                      "first_name":"harsh1",
                      "last_name":"chaurasiya1",
                      "age":21,
                      "full_name":{
                        "first_name":"harsh1",
                        "middle_name":" ",
                        "last_name":"chaurasiya1"
                      },
                      "phone":["9876543210","9876543211","9987654321"],
                      "address":{
                        "address":{
                          "city":"maihar",
                          "pin_code":"485771",
                          "state":"M.P.",
                          "country":"india",
                          "country_symbol":"IN",
                          "currency":"rupee",
                          "currency_symbol":"INR"
                        }
                      }
                }
   
 2. Get Json Data: 
 
    API: localhost:8000/get-all-json
 
    METHOD: GET
    
    Response DATA:
    
    
             {
             "status": 200,
             "message": "Data fetched successfully!",
             "data": [
                 {
                     "id": 1,
                     "json_data": "{\"age\": 20, \"phone\": [\"9876543210\", \"9876543211\", \"9987654321\"], \"address\": {\"address\": {\"city\": \"maihar\", \"state\": \"M.P.\", \"country\": \"india\", \"currency\": \"rupee\", \"pin_code\": \"485771\", \"country_symbol\": \"IN\", \"currency_symbol\": \"INR\"}}, \"full_name\": {\"last_name\": \"chaurasiya\", \"first_name\": \"harsh\", \"middle_name\": \" \"}, \"last_name\": \"chaurasiya\", \"first_name\": \"harsh\"}"
                 },
                 {
                     "id": 2,
                     "json_data": "{\"age\": 21, \"phone\": [\"9876543210\", \"9876543211\", \"9987654321\"], \"address\": {\"address\": {\"city\": \"maihar\", \"state\": \"M.P.\", \"country\": \"india\", \"currency\": \"rupee\", \"pin_code\": \"485771\", \"country_symbol\": \"IN\", \"currency_symbol\": \"INR\"}}, \"full_name\": {\"last_name\": \"chaurasiya1\", \"first_name\": \"harsh1\", \"middle_name\": \" \"}, \"last_name\": \"chaurasiya1\", \"first_name\": \"harsh1\"}"
                 }
             ]
         }
 
 
 3. Get City Name: 
 
    API: localhost:8000/get-city
 
    METHOD: GET
    
    QUERY:  `select json_data->>'$.address.address.city' as city from json_table`;
    
    json_data->>'$.address.address.city'   // to get the city name from the nested json object
    
    
    ->         // it will add the doble quote("") to city name 
    
    ->>        // to remove the double quote("") from city name
    
4. Get Phone Number :
   
   API:   localhost:8000/get-phone
   
   METHOD: GET
   
   QUERY: `select json_data->>'$.phone[0]' as phone from json_table`
   
   
   json_data->>'$.phone[0]'           // to get specific phone number from array 
   

