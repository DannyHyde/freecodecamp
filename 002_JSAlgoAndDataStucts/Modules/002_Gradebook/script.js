/* Step 1: Compete the 'getAverage' function which takes in an array
           of scores

/********************************************************************
Code provided at the start of the exercise:

function getAverage(scores) {

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

*********************************************************************
-- FINAL CODE FOR STEP 1: --
function getAverage(scores) {
    // initialise sum as 0
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        // whilst i is less than length add array value @ i to sum
        // repeat until i = array length
        sum += scores[i];
    }
    // return the average (sum of all / number of)
    return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

END OF STEP 1 ******************************************************/

/* Step 2: Complete the 'getGrade' function that takes a number score
           and returns a string representing the grade.

*********************************************************************
Code provided at the start of the exercise:

function getAverage(scores) {
let sum = 0;

for (const score of scores) {
    sum += score;
}

return sum / scores.length;
}
function getGrade(score) {
    -- MY CODE HERE
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
*********************************************************************
-- FINAL CODE FOR STEP 2: --
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

END OF STEP 2 ******************************************************/

/* Step 3: Complete the function 'hasPassingGrade' that takes a 
           student score as a parameter, then returns true if they 
           pass or false if not ("F")

*********************************************************************
Code provided at the start of the exercise:

function getAverage(scores) {
let sum = 0;

for (const score of scores) {
    sum += score;
}

return sum / scores.length;
}

function getGrade(score) {
if (score === 100) {
    return "A++";
} else if (score >= 90) {
    return "A";
} else if (score >= 80) {
    return "B";
} else if (score >= 70) {
    return "C";
} else if (score >= 60) {
    return "D";
} else {
    return "F";
}
}
function hasPassingGrade(score) {
    -- MY CODE HERE
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
*********************************************************************
-- FINAL CODE FOR STEP 3: --

function getAverage(scores) {
    let sum = 0;
    
    for (const score of scores) {
        sum += score;
    }
    
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
END OF STEP 3 ******************************************************/

/* Step 4: Complete the 'studentMsg' function with totalScores and 
           studentScore as parameters. It should return a given 
           string to the student.

*********************************************************************
Code provided at the start of the exercise:

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    -- MY CODE HERE
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
*********************************************************************/
//-- FINAL CODE FOR STEP 4: --
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let msg = "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". ";
    if (hasPassingGrade(studentScore)) {
        return msg + "You passed the course.";
    } else {
        return msg + "You failed the course."
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// A second test printed by fcc when my 1st attempt passed ^ then failed this.
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));