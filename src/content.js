import { DateTime } from 'luxon';

/** @class ContentModel */
export class ContentModel {
    /**
     * Create a Content Model
     *
     * @param {String} brand - The brand you wish to parse the ContentModel for
     * @param {Object} post - The post to bind to the class
     * */
    constructor(brand, post){
        this.post = post;
        this.brand = brand;
    }

    /**
     * @type {String} The published on date of the post
     */
    get publishedOn() {
        return DateTime.fromSQL(this.post.published_on).toFormat('LLL d/yy');
    }

    /**
     * @type {String} The content type of the post
     */
    get type() {
        return this.post.type.replace('bundle-', '').replace(/-/g, ' ');
    }

    /**
     * Get a content posts field by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {String} The value of the field
     */
    getField(key) {
        const postField = this.post.fields.find(field => field.key === key);

        return postField ? postField.value : 'TBD';
    }

    /**
     * Get all of a contents post fields by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {Array} - An array of all the matching field values
     */
    getFieldMulti(key) {
        const postFields = this.post.fields.filter(field => field.key === key);

        return postFields.length ? postFields.map(field => field.value) : ['TBD'];
    }

    /**
     * Get a content posts field by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {String} The value of the field
     */
    getData(key) {
        const postData = this.post.data.find(data => data.key === key);

        return postData ? postData.value : 'TBD';
    }

    /**
     * Get all of a contents post fields by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {Array} - An array of all the matching field values
     */
    getDataMulti(key) {
        const postData = this.post.data.filter(data => data.key === key);

        return postData.length ? postData.map(datum => datum.value) : ['TBD'];
    }

    /**
     * Get a string with all the instructor names
     *
     * @returns {String} - A comma delimited string with all the instructors
     */
    getInstructors() {
        const instructors = this.getFieldMulti('instructor');

        if(instructors.length){
            return instructors
                .map(instructor => instructor.fields)  // Map only the fields
                .filter(field => field.key === 'name') // Filter only the name field
                .map(field => field.value)             // Map the field values
                .join(', ');                           // Join them by a comma
        }

        return 'TBD';
    }

    /**
     * Parse the post duration in minutes rounded down
     *
     * @returns {String} - The post duration in minutes
     */
    getPostDurationInMins() {
        const video = this.getField('video');

        if (video !== 'TBD') {
            let duration = 0;
            const videoLength = video.fields.find(field => field.key === 'length_in_seconds');

            if (videoLength) {
                duration = Math.round(videoLength.value / 60);
            }

            return `${duration} mins`;
        }

        return 'TBD';
    }

    /**
     * Get the posts thumbnail
     *
     * @returns {String} - The url of the posts thumbnail
     */
    getThumbnail() {
        const defaults = {
            drumeo: 'https://dmmior4id2ysr.cloudfront.net/assets/images/drumeo_fallback_thumb.jpg',
            pianote: 'https://dmmior4id2ysr.cloudfront.net/assets/images/pianote_fallback_thumb.jpg',
            guitareo: 'https://dmmior4id2ysr.cloudfront.net/assets/images/guitareo_fallback_thumb.jpg',
        };
        let thumb = this.getData('thumbnail_url');

        if (this.postType === 'learning-path' && this.brand === 'drumeo') {
            thumb = this.getData('background_image_url');
        }

        if (this.postType === 'chord and scale' && this.brand === 'guitareo') {
            thumb = this.getData('guitar_chord_image_url');
        }

        return thumb !== 'TBD' ? thumb : defaults[this.brand];
    }

    /**
     * Get the posts episode number
     *
     * @returns {String} - The episode number prepended by 'Episode #'
     */
    getEpisodeNumber() {
        return this.post.sort ? `Episode #${this.post.sort}` : 'TBD';
    }

    /**
     * Get the child lesson count of the post
     *
     * @returns {String} - The lesson count appended by ' Lessons'
     */
    getChildLessonCount() {
        return this.post.lesson_count ? `${this.post.lesson_count} Lessons` : 'TBD';
    }

    /**
     * Map the difficulty of a post to a predetermined string
     *
     * @returns {String} - The difficulty string
     */
    static mapDifficulty(post) {
        const difficultyField = post.fields.find(field => field.key === 'difficulty');
        const difficulty = difficultyField ? difficultyField.value : null;

        if (difficulty <= 3) {
            return `beginner ${difficulty}`;
        }
        if (difficulty > 3 && difficulty <= 6) {
            return `intermediate ${difficulty}`;
        }
        if (difficulty > 6) {
            return `advanced ${difficulty}`;
        }
        // Some content has difficulty already parsed as a word so we return that,
        // if its falsey, just default it to 'TBD'
        return difficulty || 'TBD';
    }
}