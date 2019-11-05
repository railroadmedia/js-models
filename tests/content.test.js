import { ContentModel } from "../index";
import * as testContent from "../assets/test-content.json";
import * as testContentWithChildren from "../assets/test-content-with-children.json";

describe('ContentModel', () => {
    const content = new ContentModel(testContent);
    const emptyContent = new ContentModel({});
    const contentWithChildren = new ContentModel(testContentWithChildren);

    it('constructs', () => {
        expect(content).toBeDefined();
    });

    describe('id', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('id');
            expect(content.id).toBe(227483);
        });
    });

    describe('slug', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('slug');
            expect(content.slug).toBe('make-your-chord-progressions-more-exciting');
        });
    });

    describe('brand', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('brand');
            expect(content.brand).toBe('pianote');
        });
    });

    describe('publishedOn', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('publishedOn');
            expect(content.publishedOn).toBe('2019-07-15 19:00:00');
        });

        it('returns TBD if the value does not exist', () => {
            expect(emptyContent.publishedOn).toBe('TBD');
        });
    });

    describe('type', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('type');
            expect(content.type).toBe('quick-tips');
        });

        it('returns TBD if the value does not exist', () => {
            expect(emptyContent.type).toBe('TBD');
        });
    });

    describe('status', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('status');
            expect(content.status).toBe('published');
        });

        it('returns TBD if the value does not exist', () => {
            expect(emptyContent.status).toBe('TBD');
        });
    });

    describe('xp', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('xp');
            expect(content.xp).toBe(100);
        });

        it('returns 0 if the value does not exist', () => {
            expect(emptyContent.xp).toBe(0);
        });
    });

    describe('bonusXp', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('bonusXp');
            expect(content.bonusXp).toBe(100);
        });

        it('returns 0 if the value does not exist', () => {
            expect(emptyContent.bonusXp).toBe(0);
        });
    });

    describe('webUrl', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('webUrl');
            expect(content.webUrl).toBe('https://dev.pianote.com/members/quick-tips/make-your-chord-progressions-more-exciting/227483');
        });

        it('returns TBD if the value does not exist', () => {
            expect(emptyContent.webUrl).toBe('TBD');
        });
    });

    describe('isStarted', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('isStarted');
            expect(content.isStarted).toBe(false);
        });

        it('can be set', () => {
            content.isStarted = !content.isStarted;
            expect(content.isStarted).toBe(true);
        });
    });

    describe('isCompleted', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('isCompleted');
            expect(content.isCompleted).toBe(false);
        });

        it('can be set', () => {
            content.isCompleted = !content.isCompleted;
            expect(content.isCompleted).toBe(true);
        });
    });

    describe('isAddedToList', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('isAddedToList');
            expect(content.isAddedToList).toBe(false);
        });

        it('can be set', () => {
            content.isAddedToList = !content.isAddedToList;
            expect(content.isAddedToList).toBe(true);
        });
    });

    describe('isLiked', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('isLiked');
            expect(content.isLiked).toBe(false);
        });

        it('can be set', () => {
            content.isLiked = !content.isLiked;
            expect(content.isLiked).toBe(true);
        });
    });

    describe('likeCount', () => {
        it('exists and is equal to the test data', () => {
            expect(content).toHaveProperty('likeCount');
            expect(content.likeCount).toBe(17);
        });

        it('can be set', () => {
            content.likeCount = content.likeCount + 1;
            expect(content.likeCount).toBe(18);
        });
    });

    describe('getField', () => {
        it('returns a value if it exists', () => {
            const field = content.getField('title');

            expect(field).toBeDefined();
            expect(field).toBe('Make Your Chord Progressions More Exciting');
        });

        it('returns \'TBD\' if the value doesn\'t exist', () => {
            const field = content.getField('DOES_NOT_EXIST');

            expect(field).toBeDefined();
            expect(field).toBe('TBD');
        });
    });

    describe('getFieldMulti', () => {
        it('returns the values if they exist', () => {
            const fields = content.getFieldMulti('tag');

            expect(fields).toBeDefined();
            expect(Array.isArray(fields)).toBe(true);
            expect(fields).toMatchObject([
                'exciting chords',
                'unique chord progressions',
                'chord substitutions',
            ]);
        });

        it('returns \'TBD\' if the value doesn\'t exist', () => {
            const fields = content.getFieldMulti('DOES_NOT_EXIST');

            expect(fields).toBeDefined();
            expect(fields).toBe('TBD');
        });
    });

    describe('getData', () => {
        it('returns a value if it exists', () => {
            const data = content.getData('description');

            expect(data).toBeDefined();
            expect(data).toBe('<p>Are you in a chord progression rut? This lesson will show you how to make your chord progressions more interesting by making different chord choices and using different voicings to create these chords!</p>');
        });

        it('returns \'TBD\' if the value doesn\'t exist', () => {
            const data = content.getData('DOES_NOT_EXIST');

            expect(data).toBeDefined();
            expect(data).toBe('TBD');
        });
    });

    describe('getInstructors', () => {
        it('returns all instructors', () => {
            const instructors = content.getInstructors();

            expect(instructors).toBeDefined();
            expect(instructors).toBe('Jordan Leibel, Jordan Leibel 2');
        });
    });

    describe('getDifficulty', () => {
        it('returns a parsed difficulty string', () => {
            const difficulty = content.getDifficulty();

            expect(difficulty).toBeDefined();
            expect(difficulty).toBe('beginner 2');
        });
    });

    describe('getDuration', () => {
        it('returns a parsed lesson duration in seconds', () => {
            const duration = content.getDuration('secs');

            expect(duration).toBeDefined();
            expect(duration).toBe('137 secs');
        });

        it('returns a parsed lesson duration in minutes', () => {
            const duration = content.getDuration('mins');

            expect(duration).toBeDefined();
            expect(duration).toBe('2 mins');
        });

        it('returns a parsed lesson duration in hours', () => {
            const duration = content.getDuration('hours');

            expect(duration).toBeDefined();
            expect(duration).toBe('0 hours');
        });
    });

    describe('getThumbnail', () => {
        it('returns a thumbnail url', () => {
            const thumbnail = content.getThumbnail();

            expect(thumbnail).toBeDefined();
            expect(thumbnail).toBe('https://d1923uyy6spedc.cloudfront.net/227483-card-thumbnail-1562661868.jpg');
        });
    });

    describe('getChildLessonCount', () => {
        it('returns the amount of child lessons', () => {
            const children = contentWithChildren.getChildLessonCount();

            expect(children).toBeDefined();
            expect(children).toBe('7 Lessons');
        });

        it('returns TBD with no children', () => {
            const children = content.getChildLessonCount();

            expect(children).toBeDefined();
            expect(children).toBe('TBD');
        })
    });

    describe('mapDifficulty', () => {
        it('returns beginner - for any number less or equal to 3', () => {
            const difficulty = ContentModel.mapDifficulty(2);

            expect(difficulty).toBe('beginner 2');
        });

        it('returns intermediate - for any number less or equal to 6 and greater than 3', () => {
            const difficulty = ContentModel.mapDifficulty(5);

            expect(difficulty).toBe('intermediate 5');
        });

        it('returns advanced - for any number greater than 6', () => {
            const difficulty = ContentModel.mapDifficulty(8);

            expect(difficulty).toBe('advanced 8');
        });

        it('returns the input for any truthy value that is not a number', () => {
            const difficulty = ContentModel.mapDifficulty('easy');

            expect(difficulty).toBe('easy');
        });

        it('returns TBD if the input does not exist', () => {
            const difficulty = ContentModel.mapDifficulty(undefined);

            expect(difficulty).toBe('TBD');
        });
    });
});