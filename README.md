## Instructions

Using one of the included `.csv` datasets:

* Build a light web server
* Return the entire collection as JSON when you `GET` the index (`/`) of the server
* Return an individual item as JSON when you `GET` the id of that item (eg., `/4`) 
* Deploy your server to the internet
* Test your API with a headless browser like Postman

## Notes

* Your server should include appropriate CORS headers

## Examples

Your returned data list should look like this:

```
{
    data: [{
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    },{
        "id": 2,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }]
}
```

Your returned data item should look like this:

```
{
    data: {
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }
}
```
