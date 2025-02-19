import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (x: Question): boolean => x.published === true
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (x: Question): boolean =>
            x.body !== "" || x.expected !== "" || x.options.length > 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const givenQuestion = questions.find((x: Question): boolean => x.id === id);
    if (givenQuestion) {
        return givenQuestion;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const givenQuestion = questions.filter(
        (x: Question): boolean => x.id !== id
    );
    return givenQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionNames = questions.map((x: Question): string => x.name);
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (curr: number, x: Question) => curr + x.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (x: Question): boolean => x.published === true
    );
    const totalPoints = publishedQuestions.reduce(
        (curr: number, x: Question) => curr + x.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const headers = "id,name,options,points,published" + "\n";
    const questionCSV = questions
        .map(
            (x: Question): string =>
                x.id +
                "," +
                x.name +
                "," +
                x.options.length.toString() +
                "," +
                x.points +
                "," +
                x.published
        )
        .join("\n");
    return headers + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublished = questions.map(
        (x: Question): Question => ({ ...x, published: true })
    );
    return allPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const sameShort = questions.every(
        (x: Question): boolean => x.type === "short_answer_question"
    );
    const sameMultiple = questions.every(
        (x: Question): boolean => x.type === "multiple_choice_question"
    );
    if (sameShort || sameMultiple) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    const questionsPlus = [...questions, newQuestion];
    return questionsPlus;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const questionInd: number = questions.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    const questionFound = questions[questionInd];
    const changed = { ...questionFound, name: newName };
    const changedQuestions = [...questions];
    changedQuestions.splice(questionInd, 1, changed);
    return changedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const questionInd: number = questions.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    const questionFound = questions[questionInd];
    let changed;
    if (newQuestionType === "multiple_choice_question") {
        changed = { ...questionFound, type: newQuestionType };
    } else {
        changed = {
            ...questionFound,
            type: newQuestionType,
            options: []
        };
    }
    const changedQuestions = [...questions];
    changedQuestions.splice(questionInd, 1, changed);

    return changedQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const questionInd: number = questions.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    const questionFound: Question = questions[questionInd];
    let changed;
    if (targetOptionIndex === -1) {
        const addedOptions = [...questionFound.options, newOption];
        changed = {
            ...questionFound,
            options: addedOptions
        };
    } else {
        const addedOptions = [...questionFound.options];
        addedOptions.splice(targetOptionIndex, 1, newOption);
        changed = { ...questionFound, options: addedOptions };
    }
    const changedQuestions = [...questions];
    changedQuestions.splice(questionInd, 1, changed);
    return changedQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const questionInd: number = questions.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    const questionFound = questions[questionInd];
    const newQ = duplicateQuestion(newId, questionFound);
    const changedQuestions = [...questions];
    changedQuestions.splice(questionInd + 1, 0, newQ);

    return changedQuestions;
}
