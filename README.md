# js-models - @musora/models
Data models for all Musora back-end services

[![Build Status](https://travis-ci.com/railroadmedia/js-models.png?branch=master)](https://travis-ci.com/railroadmedia/js-models)
[![Coverage Status](https://coveralls.io/repos/github/railroadmedia/js-models/badge.svg?branch=master)](https://coveralls.io/github/railroadmedia/js-models?branch=master)

## Installation

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
