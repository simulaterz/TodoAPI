# RESTful TodoAPI
Simple API 'to do' task list 
> Demo API Url: https://todo2ch.herokuapp.com

## API doc
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
