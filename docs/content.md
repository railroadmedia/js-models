<a name="ContentModel"></a>

## ContentModel
**Kind**: global class  

* [ContentModel](#ContentModel)
    * _instance_
        * [.ContentModel](#ContentModel+ContentModel)
            * [new exports.ContentModel(post)](#new_ContentModel+ContentModel_new)
        * [.id](#ContentModel+id) : <code>String</code> \| <code>Number</code>
        * [.slug](#ContentModel+slug) : <code>String</code>
        * [.brand](#ContentModel+brand) : <code>String</code>
        * [.publishedOn](#ContentModel+publishedOn) : <code>String</code>
        * [.type](#ContentModel+type) : <code>String</code>
        * [.status](#ContentModel+status) : <code>String</code>
        * [.xp](#ContentModel+xp) : <code>Number</code> \| <code>String</code>
        * [.bonusXp](#ContentModel+bonusXp) : <code>Number</code> \| <code>String</code>
        * [.webUrl](#ContentModel+webUrl) : <code>String</code>
        * [.isStarted](#ContentModel+isStarted) : <code>Boolean</code>
        * [.isAddedToList](#ContentModel+isAddedToList) : <code>Boolean</code>
        * [.isLiked](#ContentModel+isLiked) : <code>Boolean</code>
        * [.likeCount](#ContentModel+likeCount) : <code>String</code> \| <code>Number</code>
        * [.getField(key)](#ContentModel+getField) ⇒ <code>String</code>
        * [.getFieldMulti(key)](#ContentModel+getFieldMulti) ⇒ <code>Array</code>
        * [.getData(key)](#ContentModel+getData) ⇒ <code>String</code>
        * [.getDataMulti(key)](#ContentModel+getDataMulti) ⇒ <code>Array</code>
        * [.getInstructors()](#ContentModel+getInstructors) ⇒ <code>String</code>
        * [.getDifficulty()](#ContentModel+getDifficulty) ⇒ <code>String</code>
        * [.getDuration(format)](#ContentModel+getDuration) ⇒ <code>String</code>
        * [.getThumbnail()](#ContentModel+getThumbnail) ⇒ <code>String</code>
        * [.getChildLessonCount()](#ContentModel+getChildLessonCount) ⇒ <code>String</code>
    * _static_
        * [.mapDifficulty()](#ContentModel.mapDifficulty) ⇒ <code>String</code>

<a name="ContentModel+ContentModel"></a>

### contentModel.ContentModel
**Kind**: instance class of [<code>ContentModel</code>](#ContentModel)  
<a name="new_ContentModel+ContentModel_new"></a>

#### new exports.ContentModel(post)
Create a Content Model


| Param | Type | Description |
| --- | --- | --- |
| post | <code>Object</code> | The post to bind to the class |

<a name="ContentModel+id"></a>

### contentModel.id : <code>String</code> \| <code>Number</code>
The post database ID

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+slug"></a>

### contentModel.slug : <code>String</code>
The post slug

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+brand"></a>

### contentModel.brand : <code>String</code>
The brand that the content belongs to

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+publishedOn"></a>

### contentModel.publishedOn : <code>String</code>
The UTC published on date of the post

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+type"></a>

### contentModel.type : <code>String</code>
The content type of the post

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+status"></a>

### contentModel.status : <code>String</code>
The published status of the content (draft, scheduled, published, archived, deleted)

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+xp"></a>

### contentModel.xp : <code>Number</code> \| <code>String</code>
The base amount of XP the post gives

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+bonusXp"></a>

### contentModel.bonusXp : <code>Number</code> \| <code>String</code>
The bonus amount of XP the post gives

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+webUrl"></a>

### contentModel.webUrl : <code>String</code>
The URL to the post on the website

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+isStarted"></a>

### contentModel.isStarted : <code>Boolean</code>
Whether or not the current user has started the content

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+isAddedToList"></a>

### contentModel.isAddedToList : <code>Boolean</code>
Whether or not the current user has added the content to their list

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+isLiked"></a>

### contentModel.isLiked : <code>Boolean</code>
Whether or not the current user has liked the post

**Kind**: instance property of [<code>ContentModel</code>](#ContentModel)  
<a name="ContentModel+likeCount"></a>

### contentModel.likeCount : <code>String</code> \| <code>Number</code>
How many likes the post has

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
**Returns**: <code>Array</code> - An array of all the matching field values  

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
**Returns**: <code>Array</code> - An array of all the matching field values  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | The key of the property you wish to get |

<a name="ContentModel+getInstructors"></a>

### contentModel.getInstructors() ⇒ <code>String</code>
Get a string with all the instructor names

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - A comma delimited string with all the instructors  
<a name="ContentModel+getDifficulty"></a>

### contentModel.getDifficulty() ⇒ <code>String</code>
Get the difficulty of the post

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The difficulty of the post  
<a name="ContentModel+getDuration"></a>

### contentModel.getDuration(format) ⇒ <code>String</code>
Parse the post duration in seconds, minutes, or hours

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The post duration  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| format | <code>String</code> | <code>&#x27;mins&#x27;</code> | the format to parse the duration as. Accepted Values: `secs`, `mins`, `hours` |

<a name="ContentModel+getThumbnail"></a>

### contentModel.getThumbnail() ⇒ <code>String</code>
Get the posts thumbnail

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The url of the posts thumbnail  
<a name="ContentModel+getChildLessonCount"></a>

### contentModel.getChildLessonCount() ⇒ <code>String</code>
Get the child lesson count of the post

**Kind**: instance method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The lesson count appended by ' Lessons'  
<a name="ContentModel.mapDifficulty"></a>

### ContentModel.mapDifficulty() ⇒ <code>String</code>
Map the difficulty of a post to a predetermined string

**Kind**: static method of [<code>ContentModel</code>](#ContentModel)  
**Returns**: <code>String</code> - The difficulty string  
