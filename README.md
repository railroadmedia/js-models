# js-models - @musora/services
Data models for all Musora back-end services

## Installation

_Note that the package is not officially published yet so these commands will not work._

### Yarn
`yard add @musora/models`

### NPM
`npm install @musora/models --save`

## Usage

### ContentModel

#### Accessing Data
```javascript
import { ContentModel } from '@musora/models';

const content = new ContentModel(post);

const contentTitle = content.getField('title');
```

#### Extending Models for Data Binding
```javascript
import { ContentModel } from '@musora/models';

export class Song extends ContentModel {
    constructor(){
        super();
    
        this.cardTitle = this.getField('title');
        this.cardDescription = this.getData('description');
    }
}
```

##### React
```jsx harmony
<ContentCard 
    title={song.cardTitle}
    description={song.cardDescription}
/>
```

##### Vue
```vue
<ContentCard 
    :title="song.cardTitle"
    :description="song.cardDescription"
/>
```