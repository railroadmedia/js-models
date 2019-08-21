/** @class ContentModel */
export class ContentModel {
    /**
     * Create a Content Model
     *
     * @param {Object} post - The post to bind to the class
     * */
    constructor(post) {
        this.post = post;
    }

    /**
     * @type {String|Number} The post database ID
     */
    get id() {
        return this.post.id;
    }

    /**
     * @type {String} The post slug
     */
    get slug() {
        return this.post.slug;
    }

    /**
     * @type {String} The brand that the content belongs to
     */
    get brand() {
        return this.post.brand;
    }

    /**
     * @type {String} The UTC published on date of the post
     */
    get publishedOn() {
        return this.post.published_on || 'TBD';
    }

    /**
     * @type {String} The content type of the post
     */
    get type() {
        return this.post.type;
    }

    /**
     * @type {String} The published status of the content (draft, scheduled, published, archived, deleted)
     */
    get status() {
        return this.post.status;
    }

    /**
     * @type {Number|String} The base amount of XP the post gives
     */
    get xp() {
        return this.post.xp || 0;
    }

    /**
     * @type {Number|String} The bonus amount of XP the post gives
     */
    get bonusXp() {
        return this.post.xp_bonus || 0;
    }

    /**
     * @type {String} The URL to the post on the website
     */
    get webUrl() {
        return this.post.url;
    }

    /**
     * @type {Boolean} Whether or not the current user has started the content
     */
    get isStarted() {
        return this.post.started === true;
    }

    set isStarted(value) {
        this.post.started = value;
    }

    /**
     * @type {Boolean} Whether or not the current user has completed the content
     */
    get isCompleted() {
        return this.post.completed === true;
    }

    set isCompleted(value) {
        this.post.completed = value;
    }

    /**
     * @type {Boolean} Whether or not the current user has added the content to their list
     */
    get isAddedToList() {
        return this.post.is_added_to_primary_playlist;
    }

    set isAddedToList(value) {
        this.post.is_added_to_primary_playlist = value;
    }

    /**
     * @type {Boolean} Whether or not the current user has liked the post
     */
    get isLiked() {
        return this.post.is_liked === true;
    }

    set isLiked(value) {
        this.post.is_liked = value;
    }

    /**
     * @type {String|Number} How many likes the post has
     */
    get likeCount() {
        return this.post.like_count;
    }

    set likeCount(value) {
        this.post.like_count = value;
    }

    /**
     * Get a content posts field by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {String} The value of the field
     */
    getField(key) {
        const postField = this.post.fields.find((field) => field.key === key);

        return postField ? postField.value : 'TBD';
    }

    /**
     * Get all of a contents post fields by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {Array|String} An array of all the matching field values, returns a string 'TBD' if no values match
     */
    getFieldMulti(key) {
        const postFields = this.post.fields.filter((field) => field.key === key);

        return postFields.length ? postFields.map((field) => field.value) : 'TBD';
    }

    /**
     * Get a content posts field by key
     *
     * @param {Object} key - The key of the property you wish to get
     * @returns {String} The value of the field
     */
    getData(key) {
        const postData = this.post.data.find((data) => data.key === key);

        return postData ? postData.value : 'TBD';
    }

    /**
     * Get a string with all the instructor names
     *
     * @returns {String} A comma delimited string with all the instructors
     */
    getInstructors() {
        const instructors = this.getFieldMulti('instructor');

        if (instructors.length) {
            return instructors
                // Get all the instructor fields
                .map((instructor) => instructor.fields
                    // Find only the name field
                    .find((field) => field.key === 'name'))
                // Map the field values
                .map((field) => field.value)
                // Join them with a comma
                .join(', ');
        }

        return 'TBD';
    }

    /**
     * Get the difficulty of the post
     *
     * @returns {String} The difficulty of the post
     */
    getDifficulty() {
        const difficulty = this.getField('difficulty');

        return ContentModel.mapDifficulty(difficulty);
    }

    /**
     * Parse the post duration in seconds, minutes, or hours
     *
     * @param {String} format='mins' - the format to parse the duration as. Accepted Values: `secs`, `mins`, `hours`
     * @returns {String} The post duration
     */
    getDuration(format = 'mins') {
        const video = this.getField('video');

        if (video !== 'TBD') {
            let duration = 0;
            const videoLength = video.fields.find((field) => field.key === 'length_in_seconds');
            const coefficients = {
                secs: 1,
                mins: 60,
                hours: 3600,
            };

            if (videoLength) {
                duration = Math.round(videoLength.value / coefficients[format]);
            }

            return `${duration} ${format}`;
        }

        return 'TBD';
    }

    /**
     * Get the posts thumbnail
     *
     * @returns {String} The url of the posts thumbnail
     */
    getThumbnail() {
        const defaults = {
            drumeo: 'https://dmmior4id2ysr.cloudfront.net/assets/images/drumeo_fallback_thumb.jpg',
            pianote: 'https://dmmior4id2ysr.cloudfront.net/assets/images/pianote_fallback_thumb.jpg',
            guitareo: 'https://dmmior4id2ysr.cloudfront.net/assets/images/guitareo_fallback_thumb.jpg',
        };
        let thumb = this.getData('thumbnail_url');

        if (this.type === 'learning-path' && this.brand === 'drumeo') {
            thumb = this.getData('background_image_url');
        }

        if (this.type === 'chord and scale' && this.brand === 'guitareo') {
            thumb = this.getData('guitar_chord_image_url');
        }

        return thumb !== 'TBD' ? thumb : defaults[this.brand];
    }

    /**
     * Get the child lesson count of the post
     *
     * @returns {String} The lesson count appended by ' Lessons'
     */
    getChildLessonCount() {
        return this.post.lesson_count ? `${this.post.lesson_count} Lessons` : 'TBD';
    }

    /**
     * Map the difficulty of a post to a predetermined string
     *
     * @returns {String} The difficulty string
     */
    static mapDifficulty(difficulty) {
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
