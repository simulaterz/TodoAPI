# RESTful TodoAPI
Simple API 'to do' task list 
> Demo API Url: https://todo2ch.herokuapp.com

## API document
  1. **View all item in the list**
        * Url: `/gettodoslist`
        * Method: `GET`
        * Success Response: 
           ```
           Code: 200 
           Content: [
                     {
                       id: 1
                       subj: 'Clean the room',
                       detail: 'clean the room in the morning',
                       status: 'pending'
                     }
                    ]
           ```

  2. **View a single task in the list**
     * Url: `/gettodo/:id`
     * Method: `GET`
     * URL Params: `id=[integer]`
     * Success Response: 
        ```
           Code: 200 
           Content: {
                       id: 1
                       subj: 'Clean the room',
                       detail: 'clean the room in the morning',
                       status: 'pending'
                     }
        ```
      
  3. **Add a task to the list**
     * Url: `/addtask`
     * Method: `POST`
     * Data Params: 
        ```
          {
            "subj": "Clean the room",
            "detail": "clean the room in the morning"
          }
        ```
     * Success Response: 
        ```
        Code: 200 
        Content: {
                    id: 1
                    subj: 'Clean the room',
                    detail: 'clean the room in the morning',
                    status: 'pending'
                  }
        ```
        
  4. **Edit existing task**
     * Url: `/edittask/:id`
     * Method: `PATCH`
     * URL Params: `id=[integer]`
     * Data Params: 
        ```
          {
            "subj": "Edit Clean",
            "detail": "clean the room in the morning"
          }
        ```
     * Success Response: 
        ```
        Code: 200 
        Content: {
                    id: 1
                    subj: 'Edit Clean',
                    detail: 'clean the room in the morning',
                    status: 'pending'
                  }
        ```
        
  5. **Set the task status "Pending" or "Done"**
     * Url: `/changestatus/:id`
     * Method: `PATCH`
     * URL Params: `id=[integer]`
     * Success Response: 
        ```
        Code: 200 
        Content: {
                    id: 1
                    subj: Clean the room',
                    detail: 'clean the room in the morning',
                    status: 'done'
                  }
        ```
        
  6. **Delete a task form the list**
     * Url: `/deletetask/:id`
     * Method: `DELETE`
     * URL Params: `id=[integer]`
     * Success Response: 
        ```
        Code: 200 
        Content: {
                    id: 1
                    subj: Clean the room',
                    detail: 'clean the room in the morning',
                    status: 'pending'
                  }
        ```
        
## How to set up web API (Ubuntu)
  * เครื่องที่จะทำการติดตั้ง ต้องทำการติดตั้งโปรแกรม Nodejs ก่อน
  * นำ source code ไปใส่ใน directory ใดๆที่สร้างขึ้นมาใหม่
  * ทำการกำหนดค่า variable PORT ในระบบปฏิบัติการที่ใช้ ตัวอย่างเช่น ubuntu ใช้คำสั่ง export PORT=หมายเลขพอร์ตที่ต้องการ
  * เข้า directory ของ web api ผ่านทาง Terminal
  * รันคำสั่ง npm start
  * สามารถทดสอบหน้า Wep api ได้โดยผ่าน url = localhost:PORT/ หรือ localhost:3000/ (default PORT=3000)
