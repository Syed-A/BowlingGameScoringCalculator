// This JS file has the calculating of the bowling score logic split in different functions below


// This function getNumericScore has logic to evaluate and return values for the different scoring options

function getNumericScore(value) {

    if (value === '-') {
        return 0;

    } else if (value === 'X' || value === '/') {
        return 10;

    } else {
        return Number.parseInt(value, 10);

    }
}


// This function getValueOfNextTwoThrows has logic to parse through the next two throws
// when a Strike occurs in the current frame. It accounts for going across frames with multiple strikes.
// If the currentIndex is 8 (i.e frame 9) and is a Strike followed by 2 consecutive strikes, then it has to skip the 
// 11th frame as it is a blank due to the split functionality while reading the user inputs in calculateBowlingScore function
// This is done by incrementing the currentIndex by 3

function getValueOfNextTwoThrows(allFrames, currentIndex) {

    let frameScore = 0;
    if (currentIndex === 9) {

        const nxtFrame = readFrame(allFrames[currentIndex + 2]);
        frameScore = getNumericScore(nxtFrame.throw1) + getNumericScore(nxtFrame.throw2)

    } else {

        const nxtFrame = readFrame(allFrames[currentIndex + 1]);
        if (nxtFrame.throw1 === 'X') {

            frameScore += 10;

            if (currentIndex === 8) {

                const nxtnxtFrame = readFrame(allFrames[currentIndex + 3]);
                frameScore += getNumericScore(nxtnxtFrame.throw1);

            } else {

                const nxtnxtFrame = readFrame(allFrames[currentIndex + 2]);

                frameScore += getNumericScore(nxtnxtFrame.throw1);


            }
        } else if (nxtFrame.throw2 === '/') {

            frameScore += 10;

        } else {

            frameScore = getNumericScore(nxtFrame.throw1) + getNumericScore(nxtFrame.throw2)

        }
    }
    return frameScore;
}


// This getValueOfNextThrow function has logic to parse the first throw of the next frame  
// and handle it for the current frame when a spare (/) occurs. It checks if it is the 10th frame 
// (i.e currentIndex = 9) and increments it by 2 as the 11th frame is blank due to the split functionality 
// performed in the calculateBowlingScore function while reading the user inputs

function getValueOfNextThrow(allFrames, currentIndex) {
    if (currentIndex === 9) {
        const nxtFrame = readFrame(allFrames[currentIndex + 2]);
        return getNumericScore(nxtFrame.throw1);
    }
    const nxtFrame = readFrame(allFrames[currentIndex + 1]);
    return getNumericScore(nxtFrame.throw1);

}


// The calculateFrame function has logic to parse through the different scoring options and 
// calls other functions based on the scoring input value.
// On hitting a Strike, the scores of the next two throws possibly spreading across different 
// frames are considered through getValueOfNextTwoThrows function and similarly on hitting a Spare, 
// the score of the next throw is considered through getValueOfNextThrow function

function calculateFrame(allFrames, currentIndex) {

    const frame = readFrame(allFrames[currentIndex]);

    if (frame.throw1 === 'X') {

        return 10 + getValueOfNextTwoThrows(allFrames, currentIndex);

    } else if (frame.throw2 === '/') {

        return 10 + getValueOfNextThrow(allFrames, currentIndex);

    } else {

        return (
            getNumericScore(frame.throw1) + getNumericScore(frame.throw2)
        );

    }
}


// This readFrame has logic to parse through the input values for each frame and split  
// it in to corresponding throws of that frame

function readFrame(frame) {

    if (String(frame).length === 1) {

        const throw1 = String(frame).substr(0, 1);
        return { throw1, throw2: null };

    } else {

        const throw1 = String(frame).substr(0, 1);
        const throw2 = String(frame).substr(1, 1);

        return { throw1, throw2 };
    }
}


// This calculateBowlingScore function has logic to parse through the scoring values
// entered by the user

export default function calculateBowlingScore(score) {
    let finalScore = 0;

    const frames = score.split("|");

    for (let i = 0; i < 10; i++) {
        finalScore += calculateFrame(frames, i);
    }

    return finalScore;
}