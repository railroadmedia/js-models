<a name="ContentModel"></a>

## ContentModel
**Kind**: global class  

* [ContentModel](#ContentModel)
    * _instance_
        * [.ContentModel](#ContentModel+ContentModel)
            * [new exports.ContentModel(brand, post)](#new_ContentModel+ContentModel_new)
        * [.publishedOn](#ContentModel+publishedOn) : <code>String</code>
        * [.type](#ContentModel+type) : <code>String</code>
        * [.getField(key)](#ContentModel+getField) ⇒ <code>String</code>
        * [.getFieldMulti(key)](#ContentModel+getFieldMulti) ⇒ <code>Array</code>
        * [.getData(key)](#ContentModel+getData) ⇒ <code>String</code>
        * [.getDataMulti(key)](#ContentModel+getDataMulti) ⇒ <code>Array</code>
        * [.getInstructors()](#ContentModel+getInstructors) ⇒ <code>String</code>
        * [.getPostDurationInMins()](#ContentModel+getPostDurationInMins) ⇒ <code>String</code>
        * [.getThumbnail()](#ContentModel+getThumbnail) ⇒ <code>String</code>
        * [.getEpisodeNumber()](#ContentModel+getEpisodeNumber) ⇒ <code>String</code>
        * [.getChildLessonCount()](#ContentModel+getChildLessonCount) ⇒ <code>String</code>
    * _static_
        * [.mapDifficulty()](#ContentModel.mapDifficulty) ⇒ <code>String</code>

<a name="ContentModel+ContentModel"></a>

### contentModel.ContentModel
**Kind**: instance class of [<code>ContentModel</code>](#ContentModel)  
<a name="new_ContentModel+ContentModel_new"></a>

#### new exports.ContentModel(brand, post)
Create a Content Model


| Param | Type | Description |
| --- | --- | --- |
| brand | <code>String</code> | The brand you wish to parse the ContentModel for |
| post | <code>Object</code> | The post to bind to the class |

<a name="ContentModel+publishedOn"></a>

### contentModel.publishedOn : <code>String</code>
The published on date of the post

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+type"></a>

### contentModel.type : <code>String</code>
The content type of the post

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+getField"></a>

### contentModel.getField(key) ⇒ <code>String</code>
Get a content posts field by key

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The value of the field  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | The key of the property you wish to get |

<a name="ContentModel+getFieldMulti"></a>

### contentModel.getFieldMulti(key) ⇒ <code>Array</code>
Get all of a contents post fields by key

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>Array</code> - - An array of all the matching field values  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | The key of the property you wish to get |

<a name="ContentModel+getData"></a>

### contentModel.getData(key) ⇒ <code>String</code>
Get a content posts field by key

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The value of the field  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | The key of the property you wish to get |

<a name="ContentModel+getDataMulti"></a>

### contentModel.getDataMulti(key) ⇒ <code>Array</code>
Get all of a contents post fields by key

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>Array</code> - - An array of all the matching field values  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | The key of the property you wish to get |

<a name="ContentModel+getInstructors"></a>

### contentModel.getInstructors() ⇒ <code>String</code>
Get a string with all the instructor names

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - A comma delimited string with all the instructors  
<a name="ContentModel+getPostDurationInMins"></a>

### contentModel.getPostDurationInMins() ⇒ <code>String</code>
Parse the post duration in minutes rounded down

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - The post duration in minutes  
<a name="ContentModel+getThumbnail"></a>

### contentModel.getThumbnail() ⇒ <code>String</code>
Get the posts thumbnail

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - The url of the posts thumbnail  
<a name="ContentModel+getEpisodeNumber"></a>

### contentModel.getEpisodeNumber() ⇒ <code>String</code>
Get the posts episode number

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - The episode number prepended by 'Episode #'  
<a name="ContentModel+getChildLessonCount"></a>

### contentModel.getChildLessonCount() ⇒ <code>String</code>
Get the child lesson count of the post

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - The lesson count appended by ' Lessons'  
<a name="ContentModel.mapDifficulty"></a>

### ContentModel.mapDifficulty() ⇒ <code>String</code>
Map the difficulty of a post to a predetermined string

**Kind**: static method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - - The difficulty string  
